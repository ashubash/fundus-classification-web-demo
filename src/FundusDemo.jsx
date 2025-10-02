// src/FundusDemo.jsx
import React, { useEffect, useState } from "react";
import { useModelLoader } from "./hooks/useModelLoader";

const CLASSES = ["Normal", "Glaucoma", "Myopia", "Diabetes"];

export default function FundusDemo() {
  const { modelSession, isModelLoading } = useModelLoader();

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

  // Run inference
  const runInference = async () => {
    if (!modelSession || !selectedImage) return;

    const imgEl = document.getElementById("sampleImage");
    const tensor = await imageToTensor(imgEl);

    const start = performance.now();

    const feeds = {};
    feeds[modelSession.inputNames[0]] = tensor;
    const results = await modelSession.run(feeds);

    const end = performance.now();

    const output = results[modelSession.outputNames[0]].data;
    const predIndex = output.indexOf(Math.max(...output));

    setPredResult(predIndex);
    setInferenceTime((end - start).toFixed(2));
  };

  return (
    <div className="fundus-demo">
      <h1>Fundus Classification Demo</h1>

      <button onClick={pickRandomImage} disabled={isModelLoading}>
        Pick Random Image
      </button>

      <button
        onClick={runInference}
        disabled={!selectedImage || !modelSession || isModelLoading}
      >
        {isModelLoading ? "Loading Model..." : "Run Inference"}
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
          />
        </div>
      )}

      {gtLabel !== null && (
        <p>
          Ground Truth: <b>{CLASSES[gtLabel]}</b>
        </p>
      )}

      {predResult !== null && (
        <p>
          Prediction: <b>{CLASSES[predResult]}</b> | Inference Time:{" "}
          {inferenceTime} ms
        </p>
      )}
    </div>
  );
}
