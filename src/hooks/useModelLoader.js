// src/hooks/useModelLoader.js
import { useState, useEffect } from 'react';
import * as ort from "onnxruntime-web";
ort.env.wasm.wasmPaths = "/public/dist/";

const BACKBONE_URL = "/models/student_backbone.onnx.br";
const HEAD_URL = "/models/student_head.onnx.br";

export const useModelLoader = () => {
  const [backboneSession, setBackboneSession] = useState(null);
  const [headSession, setHeadSession] = useState(null);
  const [isModelLoading, setIsModelLoading] = useState(true);

  useEffect(() => {
    const loadModels = async () => {
      setIsModelLoading(true);
      try {
        // Load backbone model
        const backboneResponse = await fetch(BACKBONE_URL);
        const backboneArrayBuffer = await backboneResponse.arrayBuffer();
        const loadedBackboneSession = await ort.InferenceSession.create(backboneArrayBuffer, {
          executionProviders: ["wasm"],
          graphOptimizationLevel: "all",
        });

        // Load head model
        const headResponse = await fetch(HEAD_URL);
        const headArrayBuffer = await headResponse.arrayBuffer();
        const loadedHeadSession = await ort.InferenceSession.create(headArrayBuffer, {
          executionProviders: ["wasm"],
          graphOptimizationLevel: "all",
        });
        
        setBackboneSession(loadedBackboneSession);
        setHeadSession(loadedHeadSession);
        console.log("Both ONNX models loaded successfully!");
      } catch (error) {
        console.error("Failed to load models:", error);
      } finally {
        setIsModelLoading(false);
      }
    };

    loadModels();
  }, []); // Empty dependency array ensures this runs only once on mount

  return { backboneSession, headSession, isModelLoading };
};