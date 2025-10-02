const CACHE_NAME = 'fundus-models-v1';
const MODEL_URLS = [
  '/models/student_model_float32.onnx',
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
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch: Cache-first for model & JSON, network-first for everything else
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) return;

  const isCachedResource = MODEL_URLS.some(path => url.pathname === path);

  if (isCachedResource) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) {
          // Update cache in background
          fetch(event.request).then(resp => {
            if (resp.ok) cache.put(event.request, resp.clone());
          }).catch(() => {});
          return cached;
        }
        const response = await fetch(event.request);
        if (response.ok) cache.put(event.request, response.clone());
        return response;
      })
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
