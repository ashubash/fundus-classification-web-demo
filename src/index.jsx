// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// --- ADD THIS CODE ---
// Register the service worker for model caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW registration failed:', err));
  });
}
// --- END OF ADDED CODE ---

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);