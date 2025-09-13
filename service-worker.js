const CACHE_NAME = "todo-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "./todo.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from cache when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
