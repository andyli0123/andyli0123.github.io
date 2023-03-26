'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e5ee999149e0a7250a2a80e30a5c44c3",
"index.html": "2107b318a6fe15f567efc0e5e1fef1a7",
"/": "2107b318a6fe15f567efc0e5e1fef1a7",
"main.dart.js": "67c5c84b8c764cdf2ad0fce60f10c538",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "b3dfa4a78c47101549a61fe7ea1f34c9",
"icons/Icon-192.png": "eeed50eb31c7b0b80bf5227adefe1394",
"icons/Icon-maskable-192.png": "eeed50eb31c7b0b80bf5227adefe1394",
"icons/Icon-maskable-512.png": "6144c19dbb3ac3952229e1820f7de6e6",
"icons/Icon-512.png": "6144c19dbb3ac3952229e1820f7de6e6",
"manifest.json": "d99f20c97c7fefb0a38774aeb54fb01a",
"assets/AssetManifest.json": "5ce2da67069a6e975b505ab5e0c88622",
"assets/NOTICES": "015ac8d5f2d8eaa5bbc1009487d0e988",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/more.mp3": "7887f455a9aca22c13305ecb81bed543",
"assets/assets/Yesterdays%2520We%2520Don't%2520Forget.jpg": "322d4ae0b7f9428a081b8c16e0376da6",
"assets/assets/piano.jpg": "7f50a1e683a29bfb0de6a145c95850a9",
"assets/assets/May%2520I%2520Ask.jpg": "fc1f3feb73a49dbecddea6d4d395a911",
"assets/assets/One%2520Sweet%2520Evening.mp3": "83ef7d12ec28193d9742822cf0f5ebb7",
"assets/assets/never.jpg": "5e93e522dfcbd7c91040f891972db3b3",
"assets/assets/Relaxation%2520Station.mp3": "6b95a8e42bb4a8e9472b7e62542794a4",
"assets/assets/Weather%2520Forecast.mp3": "c7872042b0035b971b90b20fc20b6135",
"assets/assets/Soul%2520Searching.jpg": "f37058bada02519b28854f0e3a33a6e3",
"assets/assets/Time%2520for%2520Spring.mp3": "6fb6fd7aea29fc714d23537eca26f845",
"assets/assets/02.%2520Canon%2520in%2520D%2520Major.mp3": "c883b90859483212b4729b135ea2ab6e",
"assets/assets/classical.jpg": "3852a3a82fc0e6dc71d50e0979720e09",
"assets/assets/background.jpg": "d18add7288c1bb39846b3498008d4403",
"assets/assets/Soul%2520Searching.mp3": "4336d4257d80c29710ba435a08810a3b",
"assets/assets/lofi.jpg": "c5cf7ec6b7e8fc452654e002ed8407bb",
"assets/assets/02.%2520Canon%2520in%2520D%2520Major.jpg": "ae887a98c2a73c9f900b53def10261bc",
"assets/assets/Time%2520for%2520Spring.jpg": "08b0369d76b5538bbef25150a9edc239",
"assets/assets/DT.png": "dc71f874e02119191871c7408d7e7998",
"assets/assets/Weather%2520Forecast.jpg": "677708f142b23c910e8f8207efe8a7a6",
"assets/assets/jazz.jpg": "8d038d4d041372c3db7abd226573e8f1",
"assets/assets/May%2520I%2520Ask.mp3": "d2272f3752b3d3368fe7b225abed1288",
"assets/assets/One%2520Sweet%2520Evening.jpg": "16f9f2dcbc10124c254c3e216bd3c850",
"assets/assets/Yesterdays%2520We%2520Don't%2520Forget.mp3": "42ff8d3616723c978b413e2d27c661b2",
"assets/assets/more.jpg": "c7e8d6f17f014809217846f379916492",
"assets/assets/never.mp3": "b70e96ab6ce952a3bf3c4cf77f6af78d",
"assets/assets/Relaxation%2520Station.jpg": "e24fc661d3dff6992ea9ec5db60cbc4c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
