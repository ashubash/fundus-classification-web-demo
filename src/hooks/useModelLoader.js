// useModelLoader.js
import { useEffect, useState } from "react";
import * as ort from "onnxruntime-web";

export default function useModelLoader(modelUrl) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadModel() {
      try {
        setLoading(true);
        setError(null);

        // Optional: Comment these out first to see if they caused blank screen
        // ort.env.wasm.wasmPaths = "/";
        // await ort.env.wasm.init();

        const s = await ort.InferenceSession.create(modelUrl, {
          executionProviders: ["wasm"],
        });

        if (!cancelled) {
          setSession(s);
        }
      } catch (e) {
        console.error("Model loading failed:", e);
        if (!cancelled) {
          setError(e);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadModel();

    return () => {
      cancelled = true;
    };
  }, [modelUrl]);

  return { session, loading, error };
}
