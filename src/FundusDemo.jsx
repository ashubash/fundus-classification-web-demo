// src/FundusDemo.jsx
import React, { useEffect, useState } from "react";
import * as ort from "onnxruntime-web";  // Add this line
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

  // Pick a random image
  const pickRandomImage = () => {
    if (!testSplit.length) return;
    const sample = testSplit[Math.floor(Math.random() * testSplit.length)];
    setSelectedImage(sample.full_path);
    setGtLabel(sample.class_label_remapped);
    setPredResult(null);
    setInferenceTime(null);
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

  const runInference = async () => {
    if (!session || !selectedImage) return;

    const imgEl = document.getElementById("sampleImage");
    const tensor = await imageToTensor(imgEl);

    const start = performance.now();
    try {
      const feeds = {};
      feeds[session.inputNames[0]] = tensor;

      const results = await session.run(feeds);
      const output = results[session.outputNames[0]].data;
      const predIndex = output.indexOf(Math.max(...output));

      const end = performance.now();

      setPredResult(predIndex);
      setInferenceTime((end - start).toFixed(2));
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

      <button onClick={runInference} disabled={modelLoading || !selectedImage}>
        {modelLoading ? "Loading Model..." : "Run Inference"}
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