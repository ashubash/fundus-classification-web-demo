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

  // Pick a random image (prefers preloaded next if available)
  const pickRandomImage = () => {
    if (nextReady) {
      setSelectedImage(nextReady.path);
      setGtLabel(nextReady.gt);
      setPredResult(nextReady.pred);
      setInferenceTime(nextReady.time);
      setImageLoaded(true);
      setNextReady(null);
      return;
    }

    if (!testSplit.length) return;
    const sample = testSplit[Math.floor(Math.random() * testSplit.length)];
    setSelectedImage(sample.full_path);
    setGtLabel(sample.class_label_remapped);
    setPredResult(null);
    setInferenceTime(null);
    setImageLoaded(false);
  };

  // Preload and infer on next random image (excluding current)
  const preloadNext = async () => {
    if (!session || !testSplit.length || !selectedImage) return;
    if (nextReady) return; // Already preloading one

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

        const start = performance.now();
        const feeds = {};
        feeds[session.inputNames[0]] = tensor;

        const results = await session.run(feeds);
        const output = results[session.outputNames[0]].data; // raw logits

        // Optimized softmax with numerical stability
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

        cache.current[newPath] = { tensor, pred, gt: newGt, time };
        setNextReady({ path: newPath, pred, gt: newGt, time });
      } catch (err) {
        console.error("Preload inference failed:", err);
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

  const runInference = async () => {
    if (!session || !selectedImage || !imageLoaded) return;

    const path = selectedImage;
    if (cache.current[path]?.pred) {
      const cached = cache.current[path];
      setPredResult(cached.pred);
      setInferenceTime(`cached (${cached.time} ms)`);
      return; // Skip full run for optimization
    }

    const tensor = cache.current[path].tensor;
    const start = performance.now();
    try {
      const feeds = {};
      feeds[session.inputNames[0]] = tensor;

      const results = await session.run(feeds);
      const output = results[session.outputNames[0]].data; // raw logits

      // Optimized softmax with numerical stability
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
      cache.current[path] = { ...cache.current[path], pred, time };

      // Trigger preload for next
      preloadNext();
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