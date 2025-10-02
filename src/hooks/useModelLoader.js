import { useState, useEffect } from 'react';
import * as ort from 'onnxruntime-web';

// Optional: set WASM path if using wasm backend
ort.env.wasm.wasmPaths = "/"; 

const MODEL_URL = "/models/student_model_float32.onnx";

export const useModelLoader = () => {
  const [modelSession, setModelSession] = useState(null);
  const [isModelLoading, setIsModelLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      setIsModelLoading(true);
      try {
        const session = await ort.InferenceSession.create(MODEL_URL, {
          executionProviders: ["wasm"],
          graphOptimizationLevel: "all",
        });
        setModelSession(session);
        console.log("ONNX model loaded successfully!");
      } catch (err) {
        console.error("Failed to load ONNX model:", err);
      } finally {
        setIsModelLoading(false);
      }
    };
    loadModel();
  }, []);

  return { modelSession, isModelLoading };
};
