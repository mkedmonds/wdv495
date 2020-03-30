// var cacheName = 'pwa';
// var filesToCache = [
//   '/',
//   '/index.html',
//   '/css/styles.css',
//   '/js/main.js'
// ];

this.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("v1").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/css/styles.css",
        "/images/lotus.png",
        "/images/blueFlower.png",
      ]);
    })
  );
});
this.addEventListener("fetch", function(event) {
  
  event.respondWith(
    
    caches.match(event.request).then(function(response){
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          caches.open("v1").then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match("/PWA/images/lotus.png");
        });
      }
  }));
});

// /* Start the service worker and cache all of the app's content */
// self.addEventListener('install', function(e) {
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       return cache.addAll(filesToCache);
//     })
//   );
// });

// /* Serve cached content when offline */
// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });