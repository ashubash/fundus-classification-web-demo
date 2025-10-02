import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    // Generate .br files during build
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
      compressionOptions: { level: 11 }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'onnxruntime': ['onnxruntime-web']
        }
      }
    }
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  }
});
