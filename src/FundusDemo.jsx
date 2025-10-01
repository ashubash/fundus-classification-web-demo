// src/FundusDemo.jsx
import React, { useEffect, useState } from "react";
import * as ort from "onnxruntime-web";
ort.env.wasm.wasmPaths = "/public/dist/";

const MODEL_URL = "/student_model_float.onnx";
const CLASSES = ["Normal", "Glaucoma", "Myopia", "Diabetes"];

export default function FundusDemo() {
  const [session, setSession] = useState(null);
  const [testSplit, setTestSplit] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gtLabel, setGtLabel] = useState(null);
  const [predResult, setPredResult] = useState(null);
  const [inferenceTime, setInferenceTime] = useState(null);

  // Load ONNX model
  useEffect(() => {
    async function loadModel() {
      const s = await ort.InferenceSession.create(MODEL_URL, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all",
      });
      setSession(s);
      console.log("ONNX FP16 model loaded!");
    }

    loadModel();
  }, []);

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
    if (!session || !selectedImage) return;
    const imgEl = document.getElementById("sampleImage");
    const tensor = await imageToTensor(imgEl);

    const feeds = {};
    feeds[session.inputNames[0]] = tensor;

    const start = performance.now();
    const results = await session.run(feeds);
    const end = performance.now();

    const output = results[session.outputNames[0]].data;
    const predIndex = output.indexOf(Math.max(...output));
    setPredResult(predIndex);
    setInferenceTime((end - start).toFixed(2));
  };

  return (
    <div>
      <button onClick={pickRandomImage}>Pick Random Image</button>
      <button onClick={runInference} disabled={!selectedImage || !session}>
        Run Inference
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
