self.addEventListener('fetch', function(event) {
    if (event.request.url.endsWith('.mp4')) {
      event.respondWith(
        caches.open('video-cache').then(function(cache) {
          return cache.match(event.request).then(function(response) {
            return response || fetch(event.request).then(function(response) {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        })
      );
    }
  });
  