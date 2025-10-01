import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,       // default dev server port
    open: true        // automatically opens browser
  },
  build: {
    outDir: 'dist'
  }
});
