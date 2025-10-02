// src/FundusDemo.jsx
import React, { useEffect, useState } from "react";
import { useModelLoader } from './hooks/useModelLoader'; // <-- Import the custom hook

const CLASSES = ["Normal", "Glaucoma", "Myopia", "Diabetes"];

export default function FundusDemo() {
  // --- USE THE CUSTOM HOOK TO GET SESSIONS ---
  const { backboneSession, headSession, isModelLoading } = useModelLoader();

  const [testSplit, setTestSplit] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gtLabel, setGtLabel] = useState(null);
  const [predResult, setPredResult] = useState(null);
  const [inferenceTime, setInferenceTime] = useState(null);

  // Load test_split.json
  useEffect(() => {
    async function fetchTestSplit() {
      const res = await fetch("/test_split.json");
      const data = await res.json();
      setTestSplit(data);
    }
    fetchTestSplit();
  }, []);

  // Pick a random image
  const pickRandomImage = () => {
    if (!testSplit.length) return;
    const sample = testSplit[Math.floor(Math.random() * testSplit.length)];
    setSelectedImage(sample.full_path);
    setGtLabel(parseInt(sample.class_label_remapped));
    setPredResult(null);
    setInferenceTime(null);
  };

  // Preprocess image for ONNX
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

  // --- UPDATE THE INFERENCE FUNCTION ---
  const runInference = async () => {
    if (!backboneSession || !headSession || !selectedImage) return;
    
    const imgEl = document.getElementById("sampleImage");
    const tensor = await imageToTensor(imgEl);

    const start = performance.now();

    // Step 1: Run the backbone model to get the embedding
    const backboneFeeds = {};
    backboneFeeds[backboneSession.inputNames[0]] = tensor;
    const backboneResults = await backboneSession.run(backboneFeeds);
    const embedding = backboneResults[backboneSession.outputNames[0]];

    // Step 2: Run the head model with the embedding
    const headFeeds = {};
    headFeeds[headSession.inputNames[0]] = embedding;
    const headResults = await headSession.run(headFeeds);
    
    const end = performance.now();

    // The output of the head is the final logits
    const output = headResults[headSession.outputNames[0]].data;
    const predIndex = output.indexOf(Math.max(...output));
    setPredResult(predIndex);
    setInferenceTime((end - start).toFixed(2));
  };

  return (
    <div>
      <button onClick={pickRandomImage}>Pick Random Image</button>
      <button onClick={runInference} disabled={!selectedImage || !backboneSession || !headSession}>
        {isModelLoading ? "Loading Models..." : "Run Inference"}
      </button>

      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <img id="sampleImage" src={selectedImage} alt="Fundus" width={224} height={224} />
        </div>
      )}

      {gtLabel !== null && (
        <p>
          Ground Truth: <b>{CLASSES[gtLabel]}</b>
        </p>
      )}

      {predResult !== null && (
        <p>
          Prediction: <b>{CLASSES[predResult]}</b> | Inference Time: {inferenceTime} ms
        </p>
      )}
    </div>
  );
}