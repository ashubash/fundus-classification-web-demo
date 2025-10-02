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

        // Correct path to WASM loader
        ort.env.wasm.wasmPaths = "/ort/";

        const s = await ort.InferenceSession.create(modelUrl, {
          executionProviders: ["wasm"],
        });

        if (!cancelled) setSession(s);
      } catch (e) {
        console.error("Model loading failed:", e);
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadModel();

    return () => { cancelled = true; };
  }, [modelUrl]);

  return { session, loading, error };
}
