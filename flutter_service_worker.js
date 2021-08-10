'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1c85bd538eb593ce7fe7b4eb3ba51456",
".git/config": "6070a19574a0da4e42f5c75cf6484d44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "81ccf489dc378610e7624dd5fad89f25",
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
".git/index": "5ebf642e874f07a41b1fd05a7a8860b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42428fde37591dcc16fd00e1c96c44fa",
".git/logs/refs/heads/main": "75b492f11d37f9b1f1cd1114cb75e3ec",
".git/logs/refs/remotes/origin/main": "26c92b321526e1e9b043d5d3ae7c7221",
".git/objects/03/d65752b4e9b08240a7c82532f2420b57f4ff78": "509a75e5a779140d5af4b67e4df38809",
".git/objects/07/0b725d8fbe6e24e2a4ae0f8e323f14ed6fb135": "7d076788f04ef127b7fba185c4324d54",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/10/2e19cf57983aaaa2d3fda442ecd1b512f9095c": "03dbc854473deeb1b8d4cfce57052786",
".git/objects/12/e94ecf8142bbf9daaf9d87547110d3544d5a5d": "8b6f8a4bfe7ec729e136c60c32527879",
".git/objects/15/e89228e5b905b56c3cf623e9ea56fe0eacb07f": "38d600a9dbcbba05180458c8ffda1c3a",
".git/objects/17/3a5b5b61dd3c6a5a909f86b259d29b930e47c0": "46a6fcc921277bfefc6c2f31589d75ec",
".git/objects/1a/725b56a06586043d37f5f68977c731ebbf4f9e": "190cf1799532ac23758a201180961d64",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/ffe039afd5ddf2c23c762a86f49846023b7bf7": "a0f4b12004eb7732c3c64530387f299b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/27/89386b0b4da0283e5b6ebd512dfbc27da77757": "9b88e26fd625622698642708e02cfc79",
".git/objects/2a/1716bc68c0e6b744fed7bc44ad768c52817cb2": "5a6209e451aa235f6739f8e2ee422d32",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/2d1228f789f3fa1c1c7fcb826210f07e00ca6b": "344647dc6ae0d1d5d1eb0e3b5d7d9c69",
".git/objects/39/accc2b7a796aa29177eaf453d2774f6488a44f": "50bb3e2ec82584ec8e5b0db24b91753e",
".git/objects/3a/02a5e95eaa27302c5edeb15379ee98894f4af0": "b4ba18dc468675724e5ff99789e41047",
".git/objects/3a/67c8f04a83587e5a6347762d7c5ab6de8a340d": "1f5a671580dd867f3df378d57ab69701",
".git/objects/3e/31453d637d8294b0a7532bcb54330be2317523": "4eb48516b9c97cd0f96da7696e6bee1c",
".git/objects/3e/f42f348c94ac0c359e5c62eacd7d6e2284eb37": "ef61f8b04484d262849be74fe0196b2f",
".git/objects/41/fa21120f6420c802dbb5a4fcb8bb63674bff52": "be6a556e82e79ecf9cb0522469e8db15",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/48/42f95b65c9e2dc43fecdc432f862209cdc4b3b": "efc7ea75419a0068f3ae2c3329677a24",
".git/objects/4a/256557635ccc760f2c05d1243c4d2b5c7d31cf": "00f95c7588171f775f0b95ecbe0e6332",
".git/objects/57/09addb7fb7d40dfd042f72d60471a4826023e8": "5eed8b2a831c5c0d5ac84dadd038cbb5",
".git/objects/5c/3a03b8019ad2009df6a6915aec22f42303bde3": "78ae7d7f6f107c04b2c12725c5af3b4b",
".git/objects/65/57dcf46340d63ba848ecb3e10f3c596447405e": "3cf9a57ca686bb87084b59db74904c2e",
".git/objects/6d/e431d022e35b673912ad935e3b7393e4c0d0a4": "dc9ca7e3befcd8be919f9df5a76ac1cf",
".git/objects/6e/960b7fb4f7930dbf092dba1408a11f57244d62": "6e5859642bb018d9f1f2bff0f6ae4919",
".git/objects/75/05cf02d9a584658b146423fa66797bf023e952": "b3549a87c0ca82c797309430ec88b1ac",
".git/objects/75/96da866c9ba40a7944ef4014c2a4790b974105": "057112b78b984c6f12adef0829cbb72d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/eece43b55df332771b0f0a9994aabf544578fd": "d06c5a038e33be76db79acee30628bd4",
".git/objects/83/474f9acbbdfc88ce98ab64403233ecfcbe872a": "0a2a9bef9cde964738beb71fa111591d",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/85/fd6b093273b778d7d0ae5ad8c7f4ed7bbc882b": "c17e923f6dc30485a9b8c737d672fe07",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/91/8f4ea9e93153262b84c5086431e91a37af36f6": "c514ab7ae7e233ca7a33adaefebd2328",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/fa21b5a62f2b760e870e087690bdb4586ef6d8": "063ac15688710d2a48e188bc8bd7b836",
".git/objects/a3/354f11da2155387cf6b9f0f8239ce39bab1f80": "3e2813dd21503c4aebb144bc07366191",
".git/objects/a6/dce46ed9a211ea56210bdd6d8c7fb2931f3188": "e8677baaa7c523f32c87fb129d1aa330",
".git/objects/a7/b76eb0e724fa651bff46a8bead52da443fc9d6": "9b7acd1e2a4514f34d5cf87cc80db4c7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/e1611f33b8ebe59c519dfa9a81e4c9954fc231": "20aa68896326a8d5c4f7b291c97e3653",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b1/770afc760ae4d3620d3f4b4cbf5f04779a1c2b": "abc4b0c40a7f654d9b33a503d962c907",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4af1a9fa58e5bf85142bc4eecf0a22a26c25ab": "4640abc7eef696b58cf687e94e58d1a6",
".git/objects/c0/988ae58a8afcbdcc2a1194f0ec359d646bc485": "c97580277ef89b1ea8de826c440d5075",
".git/objects/c1/9357bbfaa254df545f69ec62d1bc190cc697e8": "0da97e69befcd08a7c42ee96bdceaa4b",
".git/objects/c2/d9ecd452a0243b7028d80e5b41d9e8f5c7eb73": "89c303b7a0ab069d439e901559640ef3",
".git/objects/c4/57f6cecfd618dd88e3129f8a742b994e5b0449": "0494ce6989e85075f4a55a7136e90e8d",
".git/objects/c6/9d5c2e94218519c1bf4feda357db508a2df40d": "e2ea3cd5aad600c31bd813397f097e13",
".git/objects/c9/0c035406cfa230d48a49c99ea55afde2689ed9": "fd3c1883a68942f967fadf3c17c59e0a",
".git/objects/d2/455f427dc9b11886a874b2dc8b64d2e7f21fbd": "208be70d4284dcd72fe76036824e1878",
".git/objects/dd/be6a2201bd31a0688a7fef5878818e80d32087": "e5cca30ee1ec18e7d0d78b134e207c63",
".git/objects/de/4475ce4f274cc846e2fcb742b00c85f8da30b0": "e681b55efdf3b57f4e13af43f64a1121",
".git/objects/e0/1bfcb9159430122cf8cd2e05de116c0cb61071": "45df78e18d904605d530655c1df68439",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/25de9afc784957ae0a579c9f724282773a823f": "f707498c32069c20bf38e99b0f0bf674",
".git/objects/e7/74f213b453a4d20f46ce4817f5ae273a629326": "49f5d66960f5b3a43c1b719083da9ea9",
".git/objects/e9/77599ad4f40288e1bf18557dae52aee82ed87f": "41bfeacdeb8737632ed2eb92833e95e8",
".git/objects/f1/c6271ce6078d3d41beba49cc44e26f4cb9924a": "d040ec82456d73a960c5e52441b34d49",
".git/objects/f8/614781d9447e7eeb2c41478bca68fabe683580": "f1974e30429872e1f0e73491168b6dbf",
".git/ORIG_HEAD": "930e3f908d49b3710c15d5168efeba8d",
".git/refs/heads/main": "bf291a497f7600aae462505c42b65a69",
".git/refs/remotes/origin/main": "bf291a497f7600aae462505c42b65a69",
"assets/AssetManifest.json": "7b1352de5814e90073817469bde611bb",
"assets/assets/1.png": "6ffde3d6e81743024b7dd0c0a1e0d5cb",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/projects/Corona_Stats.png": "ed7b5d47e6ea95d48c8a6c923160f9ea",
"assets/assets/projects/DLS_logo.png": "19b52bbadfca064825badd4b3ede003d",
"assets/assets/projects/esportsLogo.png": "e63f49d452779364d3cf7cf15135e91d",
"assets/assets/projects/Flutter_logo.png": "0908e9cb4392a73533b7df9069de695a",
"assets/assets/projects/Success_Planner.png": "e3215c93f68ba80913103d18a3779994",
"assets/assets/projects/Tensorflow_logo.png": "1402b4895a6583b60dcb181623def9c7",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "52fd924878b6edf3a118aa2a7486f1e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "60bc00564cbec8e0e6069ce3d2596c5f",
"/": "60bc00564cbec8e0e6069ce3d2596c5f",
"main.dart.js": "5b3521bf7e19e9e0f72193fd99c19a1a",
"manifest.json": "2f321f7f885c4f43f05e1ed99fad3bfc",
"pneumonia_ai/.git/COMMIT_EDITMSG": "300c47031824cc946e9e30e021bf9402",
"pneumonia_ai/.git/config": "3f085305e811e62670b854b3f332813a",
"pneumonia_ai/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"pneumonia_ai/.git/FETCH_HEAD": "f8f91319cff2c6fc1483f1972f193963",
"pneumonia_ai/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"pneumonia_ai/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"pneumonia_ai/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"pneumonia_ai/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"pneumonia_ai/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"pneumonia_ai/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"pneumonia_ai/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"pneumonia_ai/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"pneumonia_ai/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"pneumonia_ai/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"pneumonia_ai/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"pneumonia_ai/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"pneumonia_ai/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"pneumonia_ai/.git/index": "6cf13df1865586e254101b12bec05daf",
"pneumonia_ai/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"pneumonia_ai/.git/logs/HEAD": "44f50c1529ee32ac854652436ac5eb89",
"pneumonia_ai/.git/logs/refs/heads/main": "44f50c1529ee32ac854652436ac5eb89",
"pneumonia_ai/.git/logs/refs/remotes/origin/HEAD": "3afe4fd87b4805b53ec21d48736a06a6",
"pneumonia_ai/.git/logs/refs/remotes/origin/main": "00219124d1563f4c15c3400f6115e124",
"pneumonia_ai/.git/objects/0e/76e8b311698257c730cbc472781a70c1973735": "78db330ddcdbedd52605c25b2345e686",
"pneumonia_ai/.git/objects/8f/d07882f42dccaca802fdb90f3705ea20d5e1c3": "483e8808a160b7ea3e5c680e3c90f48f",
"pneumonia_ai/.git/objects/d2/2371c5a3b55a087a97288728e823d16d1f43ff": "8ab4d6db27c4df149fca91460d36dc97",
"pneumonia_ai/.git/objects/pack/pack-d1b9abece4fe2ef5077e1060ae21be2ddb63c280.idx": "e4e979e4b9f1cfdbb36c89fc60ba128f",
"pneumonia_ai/.git/objects/pack/pack-d1b9abece4fe2ef5077e1060ae21be2ddb63c280.pack": "2d953b4118ef5634dae33352d92bfa14",
"pneumonia_ai/.git/packed-refs": "1ec511fd6639084270b669a028031c9a",
"pneumonia_ai/.git/refs/heads/main": "6de2fe5fc155b539787a95e0448133a6",
"pneumonia_ai/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"pneumonia_ai/.git/refs/remotes/origin/main": "6de2fe5fc155b539787a95e0448133a6",
"pneumonia_ai/pneumonia_ai.py": "01bf6ac36fcbeebaa82075b0f087a6a0",
"pneumonia_ai/README.md": "9e2d100492e91840ec2b97422bb79ee1",
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
