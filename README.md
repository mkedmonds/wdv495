# ServiceWorker cache polyfill

This is a polyfill for the [ServiceWorker cache API](http://slightlyoff.github.io/ServiceWorker/spec/service_worker/#cache-storage-interface).

## Usage

Take [serviceworker-cache-polyfill.js](https://github.com/coonsta/cache-polyfill/blob/master/dist/serviceworker-cache-polyfill.js), then in your ServiceWorker script:

```js
importScripts('serviceworker-cache-polyfill.js');

// example usage:
self.addEventListener('install', function(event) {
  event.waitUntil(
    cachesPolyfill.open('demo-cache').then(function(cache) {
      return cache.put('/', new Response("From the cache!"));
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    cachesPolyfill.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});
```

Note that your entry point to the API is `cachesPolyfill` rather than `caches` - Chrome has a partial implementation of the latter that cannot be overwritten.