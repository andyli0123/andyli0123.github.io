'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e5ee999149e0a7250a2a80e30a5c44c3",
"index.html": "990bd64278feda17338e8434837d171e",
"/": "990bd64278feda17338e8434837d171e",
"main.dart.js": "530da863b359431c33847c08cbb416fb",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "b3dfa4a78c47101549a61fe7ea1f34c9",
"icons/Icon-192.png": "eeed50eb31c7b0b80bf5227adefe1394",
"icons/Icon-maskable-192.png": "eeed50eb31c7b0b80bf5227adefe1394",
"icons/Icon-maskable-512.png": "6144c19dbb3ac3952229e1820f7de6e6",
"icons/Icon-512.png": "6144c19dbb3ac3952229e1820f7de6e6",
"manifest.json": "d99f20c97c7fefb0a38774aeb54fb01a",
".git/config": "5cfb1a83acf7b2cf16f5640aed3d3025",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/bd9bf15e0fe4ecc0a84515370edeed73b0669a": "375a2845dc607f812f39bb0c3a64a5ce",
".git/objects/ca/c6a151d5bee70723216a204aabbe4ca57f9ff2": "1cdcca25f2ae86100c4e2368ba2f7ea1",
".git/objects/27/b4ea23e18a52b8d750a021112e0e1eda924b3c": "be2c10f3d9c7af522eed7838765a3749",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/1a/918fc2982c63484347ff4f732b82d1ade9a57c": "777bccad6da5795921b9a24c2fbcba66",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/753e2a2e1ff63f3e8371b5449bfa5aaa0bac74": "8acbf737e118c3c6169c526d71a8d466",
".git/objects/19/a45a4f1374b7dd48b2ea14b8868988aacf235d": "81f6f0c92cb7dbddab611f7e9bc2bf86",
".git/objects/4c/3ef4540c5d4831d3fa46edb7a7eba4b06501d1": "ec3e2dcbe1a4f978832897e74d3669bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/77af6f908b89b5b4c45bbfed132f1e61084d3c": "23891b79c042d8f58da607f171913fc7",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/13d90fc11dfc8b6d83e70ff83e30ae9852fa78": "29e98f1defa74497efba16c96b2dbcd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/5ff0fb3fa6f61d98b60fcdae2ffbcc09285ccb": "56c282e14a4901d5fb7ad44139dfd570",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/c3/908369461b5ae9ae11b44e097c25e3d1f0271a": "efb41c0fce1b91988fa13e4c23e63f61",
".git/objects/46/534a8081c12f5b6d6b87bffc83dc5fda32534c": "3a81f37027a9f1c7ee055e960e71d392",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1e/22b6d46da88946e1516c4112de3d0adf5ea26e": "efcb1caa6a7540054d8233a97d656030",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0eecb2c1cb7e74a57e7c40f2ce4bbc5",
".git/logs/refs/heads/main": "66a53d50e7acc661c1b0a1f25de5dc16",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "67b1315589373ace3c5dbc8e23cfedca",
".git/index": "cf0f56d05b8794756ad6b928156d14b0",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "1b3d60225407ec7a00475a1e6a3c7e79",
"assets/NOTICES": "015ac8d5f2d8eaa5bbc1009487d0e988",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/more.mp3": "7887f455a9aca22c13305ecb81bed543",
"assets/assets/piano.jpg": "7f50a1e683a29bfb0de6a145c95850a9",
"assets/assets/May%2520I%2520Ask.jpg": "fc1f3feb73a49dbecddea6d4d395a911",
"assets/assets/never.jpg": "5e93e522dfcbd7c91040f891972db3b3",
"assets/assets/Time%2520for%2520Spring.mp3": "6fb6fd7aea29fc714d23537eca26f845",
"assets/assets/02.%2520Canon%2520in%2520D%2520Major.mp3": "c883b90859483212b4729b135ea2ab6e",
"assets/assets/classical.jpg": "3852a3a82fc0e6dc71d50e0979720e09",
"assets/assets/lofi.jpg": "c5cf7ec6b7e8fc452654e002ed8407bb",
"assets/assets/02.%2520Canon%2520in%2520D%2520Major.jpg": "ae887a98c2a73c9f900b53def10261bc",
"assets/assets/Time%2520for%2520Spring.jpg": "08b0369d76b5538bbef25150a9edc239",
"assets/assets/DT.png": "dc71f874e02119191871c7408d7e7998",
"assets/assets/jazz.jpg": "8d038d4d041372c3db7abd226573e8f1",
"assets/assets/May%2520I%2520Ask.mp3": "d2272f3752b3d3368fe7b225abed1288",
"assets/assets/more.jpg": "c7e8d6f17f014809217846f379916492",
"assets/assets/never.mp3": "b70e96ab6ce952a3bf3c4cf77f6af78d",
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
