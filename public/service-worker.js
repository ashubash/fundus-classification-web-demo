
const CACHE_NAME = 'fundus-models-v1';
const MODEL_URLS = [
  '/student_backbone.onnx.br',
  '/student_head.onnx.br',
  '/test_split.json'
];

// Install: Pre-cache critical resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching models');
      return cache.addAll(MODEL_URLS).catch(err => {
        console.warn('[SW] Pre-cache failed:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate: Clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Cache-first for models, network-first for everything else
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  if (url.origin !== self.location.origin) return;
  
  const isModel = MODEL_URLS.some(modelUrl => url.pathname === modelUrl);
  
  if (isModel) {
    // Cache-first for models (with stale-while-revalidate)
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) {
          console.log('[SW] Cache hit:', url.pathname);
          // Update cache in background
          fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone());
          }).catch(() => {});
          return cached;
        }
        
        console.log('[SW] Cache miss, fetching:', url.pathname);
        const response = await fetch(event.request);
        if (response.ok) {
          cache.put(event.request, response.clone());
        }
        return response;
      })
    );
  } else {
    // Network-first for everything else
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
