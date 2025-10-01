import React, { useState, useEffect } from "react";
import * as ort from "onnxruntime-web";

const CLASSES = ["Normal", "Glaucoma", "Myopia", "Diabetes"];
const MODEL_URL = "./models/student_model_fp16.onnx";
const IMAGE_DIR = "./test_images/";

export default function FundusDemo() {
  const [session, setSession] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState("-");
  const [inferenceTime, setInferenceTime] = useState("-");

  // Load ONNX model on page load
  useEffect(() => {
    async function loadModel() {
      const s = await ort.InferenceSession.create(MODEL_URL, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all",
      });
      setSession(s);
      console.log("FP16 ONNX model loaded!");
    }
    loadModel();
  }, []);

  // Pick a random image from test_split.json
  const pickRandomImage = async () => {
    const response = await fetch("test_split.json");
    const data = await response.json();
    const sample = data[Math.floor(Math.random() * data.length)];
    setSelectedImage(sample.full_path);
    setPrediction("-");
    setInferenceTime("-");
    // Save the ground truth label for logging if needed
    sample.gtLabel = CLASSES[sample.class_label_remapped];
    window.currentGT = sample.gtLabel;
  };

  // Preprocess image into FP16 tensor
  const imageToTensor = async (img) => {
    const canvas = document.createElement("canvas");
    canvas.width = 224;
    canvas.height = 224;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 224, 224);
    const imageData = ctx.getImageData(0, 0, 224, 224);
    const { data } = imageData;

    const floatData = new Float32Array(1 * 3 * 224 * 224);
    for (let i = 0; i < 224 * 224; i++) {
      floatData[i] = (data[i * 4] / 255 - 0.485) / 0.229; // R
      floatData[i + 224 * 224] = (data[i * 4 + 1] / 255 - 0.456) / 0.224; // G
      floatData[i + 2 * 224 * 224] = (data[i * 4 + 2] / 255 - 0.406) / 0.225; // B
    }

    return new ort.Tensor("float16", floatData, [1, 3, 224, 224]);
  };

  const runInference = async () => {
    if (!selectedImage || !session) {
      alert("Please pick an image first and ensure model is loaded.");
      return;
    }
    const imgElement = document.getElementById("selected-image");
    const tensor = await imageToTensor(imgElement);

    const startTime = performance.now();
    const feeds = {};
    feeds[session.inputNames[0]] = tensor;
    const results = await session.run(feeds);
    const endTime = performance.now();

    const outputTensor = results[session.outputNames[0]];
    const outputData = outputTensor.data;
    const predIndex = outputData.indexOf(Math.max(...outputData));
    setPrediction(`${CLASSES[predIndex]} (Confidence: ${outputData[predIndex].toFixed(4)})`);
    setInferenceTime(`${(endTime - startTime).toFixed(2)} ms`);

    console.log("GT:", window.currentGT, "Pred:", CLASSES[predIndex]);
  };

  return (
    <div>
      <img
        id="selected-image"
        src={selectedImage || ""}
        alt="Selected fundus"
        width={224}
        height={224}
      />
      <br />
      <button onClick={pickRandomImage}>Pick Random Image</button>
      <button onClick={runInference}>Run Inference</button>
      <p>Prediction: {prediction}</p>
      <p>Inference Time: {inferenceTime}</p>
    </div>
  );
}
