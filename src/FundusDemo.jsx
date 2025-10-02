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
  const [selectedPreprocPath, setSelectedPreprocPath] = useState(null);
  const [gtLabel, setGtLabel] = useState(null);
  const [predResult, setPredResult] = useState(null);
  const [inferenceTime, setInferenceTime] = useState(null);
  const [tensorReady, setTensorReady] = useState(false);
  const [nextReady, setNextReady] = useState(null);

  const cache = useRef({});

  // Load test_split_preproc.json
  useEffect(() => {
    async function fetchTestSplit() {
      try {
        const res = await fetch("/test_split_preproc.json");
        const data = await res.json();
        setTestSplit(data);
      } catch (err) {
        console.error("Failed to load test_split_preproc.json:", err);
      }
    }
    fetchTestSplit();
  }, []);

  // Load preproc tensor from .npy path
  const loadTensorFromNpy = async (npyPath) => {
    try {
      const response = await fetch(npyPath);
      const arrayBuffer = await response.arrayBuffer();
      const floatArray = new Float32Array(arrayBuffer);
      return new ort.Tensor("float32", floatArray, [1, 3, 224, 224]);
    } catch (err) {
      console.error("Failed to load tensor from .npy:", err);
      throw err;
    }
  };

  // Add subtle Gaussian noise to tensor for variation on repeats
  const addNoiseToTensor = (tensor, noiseStd = 0.01) => {
    const noisyData = new Float32Array(tensor.data);
    for (let i = 0; i < noisyData.length; i++) {
      noisyData[i] += (Math.random() - 0.5) * 2 * noiseStd; // Uniform approx Gaussian, centered at 0
    }
    return new ort.Tensor("float32", noisyData, tensor.dims);
  };

  // Pick a random image (prefers preloaded next if available, but doesn't show pred/time)
  const pickRandomImage = () => {
    const oldPath = selectedImage;
    if (oldPath) {
      delete cache.current[oldPath]; // Clear cache for old image
    }

    if (nextReady) {
      setSelectedImage(nextReady.original_path); // Original image for display
      setSelectedPreprocPath(nextReady.preproc_path); // Matching preproc for inference
      setGtLabel(nextReady.gt);
      // Tensor already cached in preloadNext
      setPredResult(null);
      setInferenceTime(null);
      setTensorReady(true);
      setNextReady(null);
      return;
    }

    if (!testSplit.length) return;
    const sample = testSplit[Math.floor(Math.random() * testSplit.length)];
    const originalPath = sample.original_path;
    setSelectedImage(originalPath); // Original image for display
    setSelectedPreprocPath(sample.preproc_path); // Matching preproc for inference
    setGtLabel(sample.class_label_remapped);
    setPredResult(null);
    setInferenceTime(null);
    setTensorReady(false);
  };

  // Load tensor for current selected image (aligns with displayed original)
  useEffect(() => {
    if (!selectedPreprocPath || cache.current[selectedImage]?.tensor) {
      setTensorReady(!!cache.current[selectedImage]?.tensor);
      return;
    }

    const loadCurrentTensor = async () => {
      try {
        const tensor = await loadTensorFromNpy(selectedPreprocPath);
        cache.current[selectedImage] = { tensor, gt: gtLabel }; // Keyed by original_path
        setTensorReady(true);
      } catch (err) {
        console.error("Failed to load current tensor:", err);
        setTensorReady(false);
      }
    };

    loadCurrentTensor();
  }, [selectedPreprocPath]);

  // Preload tensor for next random image (excluding current) - no inference yet
  const preloadNext = async () => {
    if (!session || !testSplit.length || !selectedImage || nextReady) return;

    let attempts = 0;
    let newSample;
    while (attempts < testSplit.length && (!newSample || newSample.original_path === selectedImage)) {
      newSample = testSplit[Math.floor(Math.random() * testSplit.length)];
      attempts++;
    }
    if (!newSample) return;

    const newOriginalPath = newSample.original_path; // For display
    const newPreprocPath = newSample.preproc_path; // For inference
    const newGt = newSample.class_label_remapped;

    try {
      const tensor = await loadTensorFromNpy(newPreprocPath);
      // Cache tensor only (no pred/time), keyed by original_path
      cache.current[newOriginalPath] = { tensor, gt: newGt };
      setNextReady({ original_path: newOriginalPath, preproc_path: newPreprocPath, gt: newGt });
    } catch (err) {
      console.error("Preload tensor failed:", err);
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
    if (!session || !selectedImage || !tensorReady) return;

    const tensor = cache.current[selectedImage].tensor; // Preproc tensor matching displayed image

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

      <button onClick={runInference} disabled={modelLoading || !selectedImage || !tensorReady}>
        {modelLoading ? "Loading Model..." : tensorReady ? "Run Inference" : "Loading Tensor..."}
      </button>

      {selectedImage && (
        <div>
          <h3>Selected Image (Original for Viewing):</h3>
          <img
            id="sampleImage"
            src={selectedImage} // Original image path for display
            alt="Fundus"
            width={224}
            height={224}
            style={{ opacity: tensorReady ? 1 : 0.5 }} // Dim until matching tensor ready
          />
          {selectedPreprocPath && (
            <p style={{ fontSize: "0.8em", color: "#666" }}>
              Inference on matching preprocessed tensor: {selectedPreprocPath}
            </p>
          )}
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