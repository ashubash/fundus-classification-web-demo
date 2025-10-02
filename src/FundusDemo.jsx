// FundusDemo.jsx
import React, { useEffect, useState } from "react";
import useModelLoader from "./useModelLoader"; // make sure this is fixed version
import * as ort from "onnxruntime-web";

const CLASS_MAP = {
  0: "Normal",
  1: "Glaucoma",
  2: "Myopia",
  3: "Diabetes",
};

export default function FundusDemo() {
  const { session, loading, error } = useModelLoader("/models/student_model_float32.onnx");

  const [testImages, setTestImages] = useState([]);
  const [results, setResults] = useState({});
  const [running, setRunning] = useState(false);

  // Load test_split.json once at mount
  useEffect(() => {
    fetch("/test_split.json")
      .then((res) => res.json())
      .then((data) => setTestImages(data))
      .catch((err) => console.error("Failed to load test_split.json", err));
  }, []);

  async function runInference() {
    if (!session) return;
    setRunning(true);

    const newResults = {};

    for (let item of testImages) {
      try {
        // Load image into tensor
        const img = await loadImageTensor(item.full_path);

        const feeds = { input: img }; // adjust 'input' to match model input name
        const outputData = await session.run(feeds);

        // Grab first output
        const logits = outputData[Object.keys(outputData)[0]].data;
        const predIndex = argMax(logits);

        newResults[item.full_path] = {
          pred: predIndex,
          predLabel: CLASS_MAP[predIndex],
          true: item.class_label_remapped,
          trueLabel: CLASS_MAP[item.class_label_remapped],
        };
      } catch (e) {
        console.error("Inference error for", item.full_path, e);
      }
    }

    setResults(newResults);
    setRunning(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fundus Disease Classifier Demo</h1>

      {loading && <p>Loading model...</p>}
      {error && <p style={{ color: "red" }}>Error loading model: {error.message}</p>}

      <button onClick={runInference} disabled={loading || !session || running}>
        {running ? "Running..." : "Run Inference"}
      </button>

      <div style={{ marginTop: "20px" }}>
        {testImages.map((item) => {
          const res = results[item.full_path];
          return (
            <div key={item.full_path} style={{ marginBottom: "20px" }}>
              <img
                src={item.full_path}
                alt="fundus"
                style={{ width: "200px", display: "block" }}
              />
              <p>Ground Truth: {CLASS_MAP[item.class_label_remapped]}</p>
              {res ? (
                <p>
                  Predicted: {res.predLabel} {res.pred === item.class_label_remapped ? "✅" : "❌"}
                </p>
              ) : (
                <p>Not inferred yet</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Utility: argMax
function argMax(arr) {
  return arr.reduce((bestIdx, x, i, a) => (x > a[bestIdx] ? i : bestIdx), 0);
}

// Utility: loadImageTensor (basic RGB float32 resize)
async function loadImageTensor(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const size = 224; // adjust to your model's expected input
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(img, 0, 0, size, size);
      const imageData = ctx.getImageData(0, 0, size, size);
      const { data } = imageData;

      const floatArray = new Float32Array(size * size * 3);
      for (let i = 0; i < size * size; i++) {
        floatArray[i * 3 + 0] = data[i * 4 + 0] / 255.0; // R
        floatArray[i * 3 + 1] = data[i * 4 + 1] / 255.0; // G
        floatArray[i * 3 + 2] = data[i * 4 + 2] / 255.0; // B
      }

      const tensor = new ort.Tensor("float32", floatArray, [1, 3, size, size]);
      resolve(tensor);
    };
    img.onerror = reject;
  });
}
