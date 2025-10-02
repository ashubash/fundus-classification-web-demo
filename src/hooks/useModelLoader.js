// src/hooks/useModelLoader.js
import { useEffect, useState } from 'react';
import * as ort from 'onnxruntime-web';

export default function useModelLoader(modelUrl) {
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadModel() {
      try {
        // Tell ORT where to find wasm + .mjs helper files
        ort.env.wasm.wasmPaths = '/ort/';

        console.log('[ORT] Loading model from', modelUrl);

        const sess = await ort.InferenceSession.create(modelUrl, {
          executionProviders: ['wasm'], // force WASM in Codespaces
        });

        if (!cancelled) {
          console.log('[ORT] Model loaded successfully');
          setSession(sess);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('[ORT] Failed to load model:', err);
          setError(err);
          setLoading(false);
        }
      }
    }

    loadModel();
    return () => {
      cancelled = true;
    };
  }, [modelUrl]);

  return { session, error, loading };
}
