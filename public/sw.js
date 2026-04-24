const CACHE_NAME = 'civic-pulse-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/india_map_logo.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
