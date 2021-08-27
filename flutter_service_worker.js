'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e88013e07db8c78b9d2fff9b509a984d",
".git/config": "6070a19574a0da4e42f5c75cf6484d44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7664c9e0e2170e93c463f8056a17c4d6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2271895c46214207865d3138becbd152",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "70b0ca38a4f807dce5a48be8af8651b1",
".git/logs/refs/heads/main": "0737d5c4c24064bac640372388a073a8",
".git/logs/refs/heads/master": "a5cd1eae83b6ff998dc9bd9392586a8e",
".git/logs/refs/remotes/origin/main": "9fedd2034bb9fb255ad81db64f9f2cd3",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/12/1e2cb19e6f791128727fe687ca49aec42b3679": "b028be5c38801fdade321ea7f14e519a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3a/67c8f04a83587e5a6347762d7c5ab6de8a340d": "1f5a671580dd867f3df378d57ab69701",
".git/objects/3e/31453d637d8294b0a7532bcb54330be2317523": "4eb48516b9c97cd0f96da7696e6bee1c",
".git/objects/3e/f42f348c94ac0c359e5c62eacd7d6e2284eb37": "ef61f8b04484d262849be74fe0196b2f",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/55/26522d73af66d20de0fdff643e58f0d265187b": "af74e7a8d3251812e5f25995f9509685",
".git/objects/56/0beef4d64f83c756451576f41d3dd0c38b7b28": "e9f7f6ca96ec82c09e36c1ab241662c8",
".git/objects/57/09addb7fb7d40dfd042f72d60471a4826023e8": "5eed8b2a831c5c0d5ac84dadd038cbb5",
".git/objects/57/3a23b84298d13d597fe9293846366b76c286f5": "53f1f648c71f86302855c7f95b74688e",
".git/objects/5b/0c0a11c73fd850995c0aa325e7bf223875471a": "bcb531dba0e5e695dd915d39560ceda3",
".git/objects/5c/d49c69324e859b7467b5e1720091fd839e51fa": "ba90bdfcccde084f66b5506e93adecb5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/474f9acbbdfc88ce98ab64403233ecfcbe872a": "0a2a9bef9cde964738beb71fa111591d",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8f/623ab4da65c2a7afa6c3e2068239138847bd3d": "8afb31e0545c130ad8bdb8b4aa39df04",
".git/objects/99/b060a817d44dc9290cdb7522c09746299cd9d8": "9b794f50a7f7b79d43f707468bff9ce2",
".git/objects/9d/fbf7ab2313b3cd2916dcddc7b5864ee3d624ec": "afa391a223dde60dca8514fe030d8eb3",
".git/objects/9e/ba9c59c0d3f2b24936428dbfb3254707a9e3c1": "4e9e71714bd4a7619a60563adeb92867",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b1/c522b16567ab4c60c3f6990f6b2329729d9831": "0765f463b746120d481783f87c8bf3dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c8/d2f3f3262ddc27fb6a26f5d606867b2edff6c3": "4a789949faa07c4bd4e6c1245e47b5cf",
".git/objects/c8/f28da66b5eaaa7c2b214b7cab7b50d54f9eb79": "7ecbafdbe573f4c85b57d71f661f52cc",
".git/objects/cc/3f10c16ff5de1ed96bffb2dbe1ca443a8a82e4": "9ff18d7a8a28dd65069704721bdcd66b",
".git/objects/ce/afbb7f7f38ba9c459d7570fae92f2565a06cf2": "a2bac8593eac17a3336a806a665c0d2a",
".git/objects/d1/c0cdaa35772cc025513dcb603f21c126f60056": "38fe8ec0181171ccfe6e465dd1d29c09",
".git/objects/d9/b1842d9df9aec8ce7523465cca0db19a381c97": "5747cb4d8e9b60356b3cf871df78a7fc",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/pack/pack-2314f93142bdda902d2226e556752a4fcb7f5d84.idx": "2cc5255ccab375686149ff8af359d41f",
".git/objects/pack/pack-2314f93142bdda902d2226e556752a4fcb7f5d84.pack": "17be08bc710444f116cea807e6253635",
".git/refs/heads/main": "e4ce332a15f18d44efe5eb3dbca21c0d",
".git/refs/heads/master": "44f9dde284d066be2cc46d6ae4bfaea8",
".git/refs/remotes/origin/main": "e4ce332a15f18d44efe5eb3dbca21c0d",
"assets/AssetManifest.json": "5c5a9de5a33a2a9967e6abb8f021adb3",
"assets/assets/1.png": "6ffde3d6e81743024b7dd0c0a1e0d5cb",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/projects/Achievements.png": "224510a299ab5e57364ee2298d25f0e8",
"assets/assets/projects/Corona_Stats.png": "ed7b5d47e6ea95d48c8a6c923160f9ea",
"assets/assets/projects/DLS_logo.png": "19b52bbadfca064825badd4b3ede003d",
"assets/assets/projects/esportsLogo.png": "e63f49d452779364d3cf7cf15135e91d",
"assets/assets/projects/Flutter_logo.png": "0908e9cb4392a73533b7df9069de695a",
"assets/assets/projects/Founding.png": "40887ed291b71774b0ec799c6b300734",
"assets/assets/projects/Pytorch_logo.png": "3441a3022ec2747d32cc0f0a6970c54a",
"assets/assets/projects/Roles.png": "7212e5ce12e34edb82b98985e0f1d8ae",
"assets/assets/projects/Success_Planner.png": "e3215c93f68ba80913103d18a3779994",
"assets/assets/splash.png": "dc0f5d5e2af898a11cd7f0ad4875c004",
"assets/assets/splash2.png": "021212725f9e96e0221886133f30135c",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "36e5561aca766cd157c36595c83f18ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "08aaf37ed72341885326b00f9a12eb51",
"/": "08aaf37ed72341885326b00f9a12eb51",
"main.dart.js": "075c184d0394c20a3df6132aea942a19",
"manifest.json": "7268d731e85213fad6b35f4c3b52f2e6",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
