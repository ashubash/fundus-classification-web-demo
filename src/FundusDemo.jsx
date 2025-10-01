import React, { useState, useEffect } from "react";
import * as ort from "onnxruntime-web";

const MODEL_URL = "/models/student_model_fp16.onnx";
const CLASSES = ["Normal", "Glaucoma", "Myopia", "Diabetes"];

export default function FundusDemo() {
  const [session, setSession] = useState(null);
  const [testSplit, setTestSplit] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gtLabel, setGtLabel] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [inferenceTime, setInferenceTime] = useState(null);

  useEffect(() => {
    async function loadModel() {
      const s = await ort.InferenceSession.create(MODEL_URL, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all",
      });
      setSession(s);
      console.log("ONNX model loaded!");
    }
    async function loadJSON() {
      const resp = await fetch("/test_split.json");
      const data = await resp.json();
      setTestSplit(data);
    }
    loadModel();
    loadJSON();
  }, []);

  const pickRandomImage = () => {
    const sample = testSplit[Math.floor(Math.random() * testSplit.length)];
    setSelectedImage(sample.full_path);
    setGtLabel(sample.class_label_remapped);
    setPrediction("");
    setInferenceTime(null);
  };

  const runInference = async () => {
    if (!session || !selectedImage) return;
    const imgEl = document.getElementById("sampleImage");
    const canvas = document.createElement("canvas");
    canvas.width = 224;
    canvas.height = 224;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imgEl, 0, 0, 224, 224);
    const imgData = ctx.getImageData(0, 0, 224, 224);
    const floatData = new Float32Array(1 * 3 * 224 * 224);

    for (let i = 0; i < 224 * 224; i++) {
      floatData[i] = (imgData.data[i * 4] / 255 - 0.485) / 0.229;
      floatData[i + 224 * 224] = (imgData.data[i * 4 + 1] / 255 - 0.456) / 0.224;
      floatData[i + 2 * 224 * 224] = (imgData.data[i * 4 + 2] / 255 - 0.406) / 0.225;
    }

    const input = new ort.Tensor("float32", floatData, [1, 3, 224, 224]);
    const start = performance.now();
    const outputMap = await session.run({ [session.inputNames[0]]: input });
    const end = performance.now();

    const outputData = outputMap[session.outputNames[0]].data;
    const predIdx = outputData.indexOf(Math.max(...outputData));
    setPrediction(`${CLASSES[predIdx]} (Confidence: ${outputData[predIdx].toFixed(4)})`);
    setInferenceTime((end - start).toFixed(2));
  };

  return (
    <div>
      <button onClick={pickRandomImage}>Pick Random Image</button>
      <button onClick={runInference}>Run Inference</button>
      {selectedImage && <img id="sampleImage" src={selectedImage} width={224} height={224} />}
      {prediction && <p>Prediction: {prediction}</p>}
      {inferenceTime && <p>Inference Time: {inferenceTime} ms</p>}
      {gtLabel !== null && <p>Ground Truth: {CLASSES[gtLabel]}</p>}
    </div>
  );
}
