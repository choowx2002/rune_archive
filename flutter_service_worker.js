'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8245147c2261b392976c1ca4cfe36933",
"assets/AssetManifest.bin.json": "e34d787c0adc375fb8c1be033f422a44",
"assets/AssetManifest.json": "cf1427506a471fc6c1da4d83b87de44a",
"assets/assets/icons/app_icon.png": "5e1d4a3bead4546d0b7d2430efd2d4d9",
"assets/assets/icons/Battlefield.png": "b427ef0fe000cf844103e7eb3295527d",
"assets/assets/icons/Body.png": "8202456b833c74fe768e1ffe5c7d3593",
"assets/assets/icons/Body2.png": "9737145cc281acaab90cdca0a2db0f80",
"assets/assets/icons/Calm.png": "1b2fc4c09fc94b2407514fa2cf33c291",
"assets/assets/icons/Calm2.png": "8e04a9e3087e6ea349304b73352d2f63",
"assets/assets/icons/ChampionUnit.png": "88780b4eea951f702f5f2104825071ce",
"assets/assets/icons/Chaos.png": "1b2a1ca0cf2566982fa152e5a4bc46d0",
"assets/assets/icons/Chaos2.png": "8ddc3851cd70c967850b071dd9044406",
"assets/assets/icons/common.png": "3a0abb3cb3f17f3a10c45ec47e413777",
"assets/assets/icons/epic.png": "27ca036a27895824557be21f81154c3b",
"assets/assets/icons/Fury.png": "2b9b1f40317e3d31c39e000e5fb7b081",
"assets/assets/icons/Fury2.png": "8b65d7b5142949d0a857713219f79931",
"assets/assets/icons/Gear.png": "3e9c51531b764f3c803c27d8b41ea6f0",
"assets/assets/icons/Legend.png": "d91debb5708e551dcef44c4f2ad3bb4b",
"assets/assets/icons/Mind.png": "bf5b05d7e209e3d33ace1e7e5359fe56",
"assets/assets/icons/Mind2.png": "7762c1f6c5c96b0b96356e3498187191",
"assets/assets/icons/Order.png": "cc008461ebf93b41e64e63bcc7e548ce",
"assets/assets/icons/Order2.png": "9a9493e0a36f98f04e5c2bad00e44c7b",
"assets/assets/icons/overnumbered.png": "b27fce9810e8dd5608a7b691cc4ac22d",
"assets/assets/icons/RainbowRune.png": "dfc8e20727d3b3bc4458077f2413460c",
"assets/assets/icons/RainbowRuneOL.png": "a63ea39c689b3b60c577585e7667242d",
"assets/assets/icons/rare.png": "a6d5628137cf261bd7d2f9725e7ee05c",
"assets/assets/icons/Rune.png": "472a247bc10f6e248d27d11897ec5d7b",
"assets/assets/icons/Spell.png": "636450b358127767d757c0d7cb4de8e8",
"assets/assets/icons/SwordIconRB.png": "73bf25231e8afffb3b7b097f979a7722",
"assets/assets/icons/Tap.png": "c284d699799cd48f9abe8fb393c30f19",
"assets/assets/icons/uncommon.png": "04ca84c554ef8cbe0576207957eb5a05",
"assets/assets/icons/Unit.png": "ba69b09ecef3962a4aefb80484019d30",
"assets/assets/text_icons/%25E5%258F%258D%25E5%25BA%2594.png": "548626bc57549562881ae4396b9a1850",
"assets/assets/text_icons/%25E5%259D%259A%25E5%25AE%2588.png": "1b715c024c8f08dc192cd484ea86af7a",
"assets/assets/text_icons/%25E5%259D%259A%25E5%25AE%25882.png": "afdee73db594c7710ad8ab549e473225",
"assets/assets/text_icons/%25E5%259D%259A%25E5%25AE%25883.png": "79e1a6ae25ad43253b2a86f545408e22",
"assets/assets/text_icons/%25E5%25A3%2581%25E5%259E%2592.png": "e68fb24b87ac82c6f762ce21a2b36a59",
"assets/assets/text_icons/%25E5%25BC%25BA%25E5%258A%259B.png": "0b44c7e611da98b684e383561448b0f3",
"assets/assets/text_icons/%25E5%25BC%25BA%25E6%2594%25BB.png": "84a4e50142a056db2cedb71fade16905",
"assets/assets/text_icons/%25E5%25BC%25BA%25E6%2594%25BB2.png": "26dd32192aecc43ea04b38b86f24f52a",
"assets/assets/text_icons/%25E5%25BC%25BA%25E6%2594%25BB3.png": "78107bb1d8476061dbbe0c1f68b3d808",
"assets/assets/text_icons/%25E5%25BE%2585%25E5%2591%25BD.png": "c6efa60b4c7630a2d9eeaaab8cfde913",
"assets/assets/text_icons/%25E6%2580%25A5%25E9%2580%259F.png": "fae04ccf547b73fcef8b7a696c83ca6d",
"assets/assets/text_icons/%25E6%25A8%25AA%25E7%25BD%25AE.png": "14cd73ed239985f556f5ba89e9abbb69",
"assets/assets/text_icons/%25E6%25A8%25AA%25E7%25BD%25AEw.png": "fd72e89731b14c0e50cf057160e77c18",
"assets/assets/text_icons/%25E6%25A9%2599%25E8%2589%25B2.png": "a48d315dbc179e4005fd2328dc3ab4f8",
"assets/assets/text_icons/%25E6%25B3%2595%25E7%259B%25BE.png": "cfc620b2d883a1c0123df9faadcd946a",
"assets/assets/text_icons/%25E6%25B3%2595%25E7%259B%25BE2.png": "7fb01414445c68073116f0a98cfb7d3e",
"assets/assets/text_icons/%25E6%25B8%25B8%25E8%25B5%25B0.png": "2e1d1ce2cbb068b5b4f26d0c0adcbb4a",
"assets/assets/text_icons/%25E7%259E%25AC%25E6%2581%25AF.png": "ed5132b8dc45fc74c3c073d93ca31a7c",
"assets/assets/text_icons/%25E7%25B4%25AB%25E8%2589%25B2.png": "47f7a2172a59ea8a2d40f15f3f038116",
"assets/assets/text_icons/%25E7%25BA%25A2%25E8%2589%25B2.png": "5b664408cfa35268f31fb85dec451143",
"assets/assets/text_icons/%25E7%25BB%259D%25E5%25BF%25B5.png": "cbf0a39fedd9630831370725034d62e4",
"assets/assets/text_icons/%25E7%25BB%25BF%25E8%2589%25B2.png": "4f02af6432319c576e34de1b3264127e",
"assets/assets/text_icons/%25E8%258E%25B7%25E5%25BE%2597.png": "64c453ce3a3146a77a6f61386bd8ab72",
"assets/assets/text_icons/%25E8%2593%259D%25E8%2589%25B2.png": "3fa17fd966f7ad666feb7fb2c2aaaf1f",
"assets/assets/text_icons/%25E8%25BF%2585%25E6%258D%25B7.png": "c9050cfa836e51b12b5ce6258e7a2bf3",
"assets/assets/text_icons/%25E9%25A2%2584%25E7%259F%25A5.png": "0c7d418de083abe09049b630fe3deabc",
"assets/assets/text_icons/%25E9%25BB%2584%25E8%2589%25B2.png": "322d8ed92bf57e19633cea61dea53d2e",
"assets/assets/text_icons/%25E9%25BC%2593%25E8%2588%259E.png": "bd0f8ae42f1011dc8a87592231663460",
"assets/assets/text_icons/0.png": "43b506b090b21fc1503d0aefd2835a1c",
"assets/assets/text_icons/1.png": "5c1a6e2531fbf0884e538d1e4358aa48",
"assets/assets/text_icons/2.png": "888703d3fd7009593de8af9618a214e2",
"assets/assets/text_icons/3.png": "8c2cc8cad5bed22fcfbf260a872f7cc8",
"assets/assets/text_icons/4.png": "9e58a568aacc612687b19eab6ceca725",
"assets/assets/text_icons/5.png": "a6bc692cef1c21f43d6a9d93f1125489",
"assets/assets/text_icons/6.png": "33bee8eb7b34fb2b41ddc8852ce88ad5",
"assets/assets/text_icons/A.png": "d6b64c51c96da6287a56ab70ad467ef5",
"assets/assets/text_icons/S.png": "c240c7f0578d9a1dbaefa3e0c3a86e30",
"assets/assets/text_icons/SW.png": "b2c8728da239e7639970742b0b5dc448",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "833b3213ef8bfda5d6f1661f011f4d57",
"assets/NOTICES": "4fb0198e45e0becd477b2da9a77dd510",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "e2e202e332fe143eb1551a80a0dec2c3",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d8a21b4fe29ec240fd0319aea6d90cf5",
"icons/Icon-192.png": "832ec75ea98313492fb8c85a0285663b",
"icons/Icon-512.png": "213a7ac9ec8a9b776ef99f1d8b170430",
"icons/Icon-maskable-192.png": "832ec75ea98313492fb8c85a0285663b",
"icons/Icon-maskable-512.png": "213a7ac9ec8a9b776ef99f1d8b170430",
"index.html": "6aca93e5e4e84acbce3a5455422f14e2",
"/": "6aca93e5e4e84acbce3a5455422f14e2",
"main.dart.js": "43d5f31b57fd55be73dc92e8cdaed5c0",
"manifest.json": "b2f32deb8a3ff3cd631a3c0aa663b7fe",
"version.json": "8b1dc3530814fa68491d8985f63d08e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
