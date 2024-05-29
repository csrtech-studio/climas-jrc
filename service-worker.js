const CACHE_NAME = 'climas-jrc-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/js/app.js',
    '/js/script.js',
    '/images/ejemplo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
