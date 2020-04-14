const staticCacheName="PWA2";

const assets = [
  '/wdv495/PWA2/',
  '/wdv495/PWA2/index.html',
  '/wdv495/PWA2/js/app.js',
  '/wdv495/PWA2/img/android-chrome-192x192.png',
  '/wdv495/PWA2/img/android-chrome-512x512.png',
  '/wdv495/PWA2/img/favicon-16x16.png',
  '/wdv495/PWA2/img/favicon-32x32.png',
  '/wdv495/PWA2/img/favicon.ico'
];

//INSTALL

self.addEventListener('install', event =>{
  //console.log("service worker installed")
  event.waitUntil(caches.open(staticCacheName).then(cache=>{
    console.log("caching assets");
    cache.addAll(assets);
  }))
  
})

//ACTIVE

self.addEventListener('activate', event=>{
  //console.log("service worker activated")
})


//FETCH

self.addEventListener('fetch', event=>{
  //console.log("fetch event" + event)
  event.respondWith(
    caches.match(event.request).then(cacheRes =>{
      return cacheRes || fetch(event.request);
    })
  )
})