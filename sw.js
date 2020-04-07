const CACHE_NAME = 'PWA';
const urlsToCache = [
  '/wdv495/PWA/',
  '/wdv495/PWA/js/main.js',
  "/wdv495/PWA/index.html",
  "/wdv495/PWA/manifest.json",
  "/wdv495/PWA/js/displayFriends.js",
  "/wdv495/PWA/js/friends.json",
  "/wdv495/PWA/about.html",
  "/wdv495/PWA/contact.html",
  "/wdv495/PWA/css/styles.css",
  "/wdv495/PWA/images/lotus.png",
  "/wdv495/PWA/images/amy.png",
  "/wdv495/PWA/images/jesse.png",
  "/wdv495/PWA/images/mari.png",
  "/wdv495/PWA/images/noodle.png",
  "/wdv495/PWA/images/olive.png",
  "/wdv495/PWA/images/blueFlower.png",
  "/wdv495/PWA/images/hamburger2.png"
];

//INSTALL

self.addEventListener('install', event =>{
  //console.log("service worker installed")
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>{
    console.log("caching assets");
    cache.addAll(urlsToCache);
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
