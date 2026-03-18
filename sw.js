const CACHE_NAME = 'pro-calc-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Installation: Dateien in den Cache laden
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Strategie: Erst im Cache suchen, dann Netzwerk (Offline-First)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});