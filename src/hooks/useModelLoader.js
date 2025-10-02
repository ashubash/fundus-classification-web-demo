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

        // Use CDN for all WASM/JS loader files (avoids local public/ imports)
        ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.0/dist/";

        // Optional: Disable threading to use lighter non-threaded loaders (reduces fetches)
        // ort.env.wasm.numThreads = 1;

        // Optional: Explicitly disable JSEP if you don't need WebGPU/WebNN (avoids .jsep.mjs load)
        // ort.env.allowJSEPSupport = false;  // Add if the error persists even with CDN

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