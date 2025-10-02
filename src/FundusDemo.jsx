// src/FundusDemo.jsx
import React, { useEffect, useState, useRef } from "react";
import * as ort from "onnxruntime-web";
import useModelLoader from "./hooks/useModelLoader";

const CLASSES = ["Normal", "Glaucoma", "Myopia", "Diabetes"];

export default function FundusDemo() {
  // Load model immediately
  const { session, loading: modelLoading, error: modelError } = useModelLoader(
    "/models/student_model_float32.onnx"
  );

  const [testSplit, setTestSplit] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gtLabel, setGtLabel] = useState(null);
  const [predResult, setPredResult] = useState(null);
  const [inferenceTime, setInferenceTime] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [nextReady, setNextReady] = useState(null);

  const cache = useRef({});

  // Load test_split.json
  useEffect(() => {
    async function fetchTestSplit() {
      try {
        const res = await fetch("/test_split.json");
        const data = await res.json();
        setTestSplit(data);
      } catch (err) {
        console.error("Failed to load test_split.json:", err);
      }
    }
    fetchTestSplit();
  }, []);

  // Pick a random image (prefers preloaded next if available, but doesn't show pred/time)
  const pickRandomImage = () => {
    const oldPath = selectedImage;
    if (oldPath) {
      delete cache.current[oldPath]; // Clear cache for old image
    }

    if (nextReady) {
      const path = nextReady.path;
      setSelectedImage(path);
      setGtLabel(nextReady.gt);
      // Tensor already cached in preloadNext
      setPredResult(null);
      setInferenceTime(null);
      setImageLoaded(true);
      setNextReady(null);
      return;
    }

    if (!testSplit.length) return;
    const sample = testSplit[Math.floor(Math.random() * testSplit.length)];
    const path = sample.full_path;
    setSelectedImage(path);
    setGtLabel(sample.class_label_remapped);
    setPredResult(null);
    setInferenceTime(null);
    setImageLoaded(false);
  };

  // Preload tensor for next random image (excluding current) - no inference yet
  const preloadNext = async () => {
    if (!session || !testSplit.length || !selectedImage || nextReady) return;

    let attempts = 0;
    let newSample;
    while (attempts < testSplit.length && (!newSample || newSample.full_path === selectedImage)) {
      newSample = testSplit[Math.floor(Math.random() * testSplit.length)];
      attempts++;
    }
    if (!newSample) return;

    const newPath = newSample.full_path;
    const newGt = newSample.class_label_remapped;

    // Create hidden preload image
    const preloadImg = new Image();
    preloadImg.onload = async () => {
      try {
        const tensor = await imageToTensor(preloadImg);
        // Cache tensor only (no pred/time)
        cache.current[newPath] = { tensor, gt: newGt };
        setNextReady({ path: newPath, gt: newGt });
      } catch (err) {
        console.error("Preload tensor failed:", err);
      }
    };
    preloadImg.src = newPath;
  };

  // Convert image to tensor
  const imageToTensor = async (imgEl) => {
    const canvas = document.createElement("canvas");
    canvas.width = 224;
    canvas.height = 224;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imgEl, 0, 0, 224, 224);
    const { data } = ctx.getImageData(0, 0, 224, 224);

    const floatData = new Float32Array(1 * 3 * 224 * 224);
    for (let i = 0; i < 224 * 224; i++) {
      floatData[i] = (data[i * 4] / 255 - 0.485) / 0.229; // R
      floatData[i + 224 * 224] = (data[i * 4 + 1] / 255 - 0.456) / 0.224; // G
      floatData[i + 2 * 224 * 224] = (data[i * 4 + 2] / 255 - 0.406) / 0.225; // B
    }

    return new ort.Tensor("float32", floatData, [1, 3, 224, 224]);
  };

  // Add subtle Gaussian noise to tensor for variation on repeats
  const addNoiseToTensor = (tensor, noiseStd = 0.01) => {
    const noisyData = new Float32Array(tensor.data);
    for (let i = 0; i < noisyData.length; i++) {
      noisyData[i] += (Math.random() - 0.5) * 2 * noiseStd; // Uniform approx Gaussian, centered at 0
    }
    return new ort.Tensor("float32", noisyData, tensor.dims);
  };

  // Handle main image load: compute and cache tensor if not already
  const handleImageLoad = async (e) => {
    const path = selectedImage;
    if (!path || cache.current[path]?.tensor) {
      setImageLoaded(true);
      return;
    }

    try {
      const tensor = await imageToTensor(e.target);
      cache.current[path] = { tensor, gt: gtLabel };
      setImageLoaded(true);
    } catch (err) {
      console.error("Tensor computation failed:", err);
      setImageLoaded(true); // Still mark as loaded to avoid stuck UI
    }
  };

  // Compute softmax probs
  const computeProbs = (output) => {
    const probs = new Float32Array(output.length);
    let maxLogit = -Infinity;
    for (let i = 0; i < output.length; i++) {
      if (output[i] > maxLogit) maxLogit = output[i];
    }
    let sumExp = 0;
    for (let i = 0; i < output.length; i++) {
      sumExp += Math.exp(output[i] - maxLogit);
    }
    for (let i = 0; i < output.length; i++) {
      probs[i] = Math.exp(output[i] - maxLogit) / sumExp;
    }
    return probs;
  };

  const runInference = async () => {
    if (!session || !selectedImage || !imageLoaded) return;

    const path = selectedImage;
    let tensor = cache.current[path]?.tensor;
    if (!tensor) {
      const imgEl = document.getElementById("sampleImage");
      tensor = await imageToTensor(imgEl);
      cache.current[path] = { tensor, gt: gtLabel };
    }

    // Add noise for variation on repeats
    const noisyTensor = addNoiseToTensor(tensor);

    const start = performance.now();
    try {
      const feeds = {};
      feeds[session.inputNames[0]] = noisyTensor;

      const results = await session.run(feeds);
      const output = results[session.outputNames[0]].data; // raw logits

      const probs = computeProbs(output);

      // Find predicted class and confidence from current probs
      let maxProb = 0;
      let predIndex = 0;
      for (let i = 0; i < probs.length; i++) {
        if (probs[i] > maxProb) {
          maxProb = probs[i];
          predIndex = i;
        }
      }
      const confidence = maxProb;

      const end = performance.now();
      const time = (end - start).toFixed(2);
      const pred = { index: predIndex, confidence };

      setPredResult(pred);
      setInferenceTime(time);

      // Always trigger preload for next after each run (even on same image)
      setTimeout(() => preloadNext(), 0); // Async to avoid blocking
    } catch (err) {
      console.error("Inference failed:", err);
    }
  };

  return (
    <div className="fundus-demo">
      <h1>Fundus Classification Demo</h1>

      {modelError && <p style={{ color: "red" }}>Error loading model: {modelError.message}</p>}

      <button onClick={pickRandomImage} disabled={!testSplit.length}>
        Pick Random Image
      </button>

      <button onClick={runInference} disabled={modelLoading || !selectedImage || !imageLoaded}>
        {modelLoading ? "Loading Model..." : "Run Inference"}
      </button>

      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <img
            id="sampleImage"
            src={selectedImage}
            alt="Fundus"
            width={224}
            height={224}
            onLoad={handleImageLoad}
            style={{ opacity: imageLoaded ? 1 : 0.5 }}
          />
        </div>
      )}

      {gtLabel !== null && (
        <p>
          Ground Truth: <b>{CLASSES[gtLabel]}</b>
        </p>
      )}

      {predResult && (
        <p>
          Prediction: <b>{CLASSES[predResult.index]}</b> 
          | Confidence: {(predResult.confidence * 100).toFixed(2)}% 
          | Inference Time: {inferenceTime} ms
        </p>
      )}
    </div>
  );
}