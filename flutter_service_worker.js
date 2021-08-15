'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "6070a19574a0da4e42f5c75cf6484d44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3eaaf4c018c49089732c2c40064b8fd1",
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
".git/index": "2c4ee5f1d458260b119ff7c19703f340",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63719521b7ff5a9c822aff44d243bf08",
".git/logs/refs/heads/main": "b32352d287476bd8cfc6ca605ca7dfd9",
".git/logs/refs/remotes/origin/main": "c54cd2c01a66515289580f9d7058153e",
".git/objects/02/06e932bf6f0035661ef6bd3b703cb9fb22e8e9": "4f2128ec0afd15008a9b156682509dd2",
".git/objects/02/3ce101544eccf3139ae4fb7349663f42015ad3": "122712dfbb08f3579822081c685c06e0",
".git/objects/03/d65752b4e9b08240a7c82532f2420b57f4ff78": "509a75e5a779140d5af4b67e4df38809",
".git/objects/07/0b725d8fbe6e24e2a4ae0f8e323f14ed6fb135": "7d076788f04ef127b7fba185c4324d54",
".git/objects/07/b68c9b5167f5588da7ae026db5f3e54091675d": "5c3279d61bfb76c5312b8c7e5be16bb7",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/0e/d9f2df094ad429db8323c6627b29d3a049d3fd": "4769c8708dec4fdd5019712de54f5128",
".git/objects/10/2e19cf57983aaaa2d3fda442ecd1b512f9095c": "03dbc854473deeb1b8d4cfce57052786",
".git/objects/12/e94ecf8142bbf9daaf9d87547110d3544d5a5d": "8b6f8a4bfe7ec729e136c60c32527879",
".git/objects/15/e89228e5b905b56c3cf623e9ea56fe0eacb07f": "38d600a9dbcbba05180458c8ffda1c3a",
".git/objects/17/3a5b5b61dd3c6a5a909f86b259d29b930e47c0": "46a6fcc921277bfefc6c2f31589d75ec",
".git/objects/17/6709b3268bbb0e697a882293ca9c54a2b15373": "a662dd1b7ea6df4fa55142dee6bb0331",
".git/objects/1a/725b56a06586043d37f5f68977c731ebbf4f9e": "190cf1799532ac23758a201180961d64",
".git/objects/1d/3ddaf52dd77cb5f823dcb2418cba5be9dc30ca": "b26aa583679f7e416f12b4b48e3504cd",
".git/objects/1e/22368c476a4bf8fae1e187ecb7534de367fd47": "1066f0af7caa1e02c673fa9d02431039",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/ffe039afd5ddf2c23c762a86f49846023b7bf7": "a0f4b12004eb7732c3c64530387f299b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/e1d445a6268c3bf31d002654c9a0ae1893c6d2": "5a722ca36a7f9bc45e4731334afbac86",
".git/objects/27/89386b0b4da0283e5b6ebd512dfbc27da77757": "9b88e26fd625622698642708e02cfc79",
".git/objects/2a/1716bc68c0e6b744fed7bc44ad768c52817cb2": "5a6209e451aa235f6739f8e2ee422d32",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/74d84dfa19f430a04c576aed7bf209d7fc50ce": "2a68f6c9e5f34803795ca39b2e652a2b",
".git/objects/34/2d1228f789f3fa1c1c7fcb826210f07e00ca6b": "344647dc6ae0d1d5d1eb0e3b5d7d9c69",
".git/objects/39/accc2b7a796aa29177eaf453d2774f6488a44f": "50bb3e2ec82584ec8e5b0db24b91753e",
".git/objects/3a/02a5e95eaa27302c5edeb15379ee98894f4af0": "b4ba18dc468675724e5ff99789e41047",
".git/objects/3a/67c8f04a83587e5a6347762d7c5ab6de8a340d": "1f5a671580dd867f3df378d57ab69701",
".git/objects/3e/31453d637d8294b0a7532bcb54330be2317523": "4eb48516b9c97cd0f96da7696e6bee1c",
".git/objects/3e/f42f348c94ac0c359e5c62eacd7d6e2284eb37": "ef61f8b04484d262849be74fe0196b2f",
".git/objects/41/fa21120f6420c802dbb5a4fcb8bb63674bff52": "be6a556e82e79ecf9cb0522469e8db15",
".git/objects/42/6c1f47e0ea6e56f85742fd53cefe01ae025c8a": "db4c60fd5f5424cd9e078b3bcfe1642a",
".git/objects/43/b8736a2fc59788734c3ece6ce9d558ac10c68a": "62c2a5db8cdac903313ee630cc69898c",
".git/objects/44/b022abb0f466f75d4b7983ad821d90e4147004": "f7d7b7294b95537b28edc29ceb2d962e",
".git/objects/45/e20b113d889a0729d29c9988a126079932d7d3": "b198b2024c379d4bdf320e27283613ae",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/47/73b86044a78fcdfb150cbd58eec46c96ff4c64": "df78b8c5465535bb685aa9a47c0b7d0f",
".git/objects/47/ef531ee8b7afb847c0e88523ad4d6ff61669d7": "dbf072ce4f3cc167b377cf1ac18d8251",
".git/objects/48/42f95b65c9e2dc43fecdc432f862209cdc4b3b": "efc7ea75419a0068f3ae2c3329677a24",
".git/objects/4a/256557635ccc760f2c05d1243c4d2b5c7d31cf": "00f95c7588171f775f0b95ecbe0e6332",
".git/objects/4a/80b3214d120ef6183454dd7c4d068865db9b83": "7d9b4272679e57844cefbdc53f0054e1",
".git/objects/4a/df16e79554ef43bcab5bfef3f54d3e8930d3d0": "98fc7c6e4dc1709e6e9e40da1859f731",
".git/objects/4b/d02792d5bfe715a63eec6ae8066a4e15f23a46": "e195753fafb33e86202bc10b74a91e48",
".git/objects/4e/6f5d7163634b346fa8fd02d77d4aab3f10ddf1": "d4fe775257e7b731ec8baeecc78c4da4",
".git/objects/56/0beef4d64f83c756451576f41d3dd0c38b7b28": "e9f7f6ca96ec82c09e36c1ab241662c8",
".git/objects/57/09addb7fb7d40dfd042f72d60471a4826023e8": "5eed8b2a831c5c0d5ac84dadd038cbb5",
".git/objects/5c/3a03b8019ad2009df6a6915aec22f42303bde3": "78ae7d7f6f107c04b2c12725c5af3b4b",
".git/objects/5d/c5f2c8e7ac86065333f3847bb97bbde9f0bb68": "0b05dfce632b9cabfe73e0b8501ec116",
".git/objects/60/94092a774e7ac85da8f5826b44df844e74f79c": "eacbc6849b42b9891bea8fa013635408",
".git/objects/62/b7d58dc58bac66c60bd07d09753fb7856a1172": "ab745af068ee5640cfa7e68c19ead088",
".git/objects/65/57dcf46340d63ba848ecb3e10f3c596447405e": "3cf9a57ca686bb87084b59db74904c2e",
".git/objects/65/e374b89a7cb554d9edd1af0cd2d66de9d0d939": "aecf0d82f6124dc5a1ef3748690667cf",
".git/objects/6a/8cb6365e429a11ecb293ee646e5da9297b89dc": "d290e63e13f142f4b75a8f4987bd912d",
".git/objects/6b/5141eec6647ac105fc41de545c3486d12db073": "8f4236fe1e9ed5f0a5ec8d3009371132",
".git/objects/6d/e431d022e35b673912ad935e3b7393e4c0d0a4": "dc9ca7e3befcd8be919f9df5a76ac1cf",
".git/objects/6e/960b7fb4f7930dbf092dba1408a11f57244d62": "6e5859642bb018d9f1f2bff0f6ae4919",
".git/objects/6f/dd78161857d495d6b077d028e0e129ebacadad": "7590198ddee18c88ae909057c1ce584c",
".git/objects/73/bdfd382750cd988f3c9cb4940dc863f1744fcb": "1d190a280fa64de7367a68874b642332",
".git/objects/73/d19a08d33d7239c0860d958c79202c900d7b4e": "8fcae57ff4352c3deef7ab5e66c8fb01",
".git/objects/75/05cf02d9a584658b146423fa66797bf023e952": "b3549a87c0ca82c797309430ec88b1ac",
".git/objects/75/96da866c9ba40a7944ef4014c2a4790b974105": "057112b78b984c6f12adef0829cbb72d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/eece43b55df332771b0f0a9994aabf544578fd": "d06c5a038e33be76db79acee30628bd4",
".git/objects/7e/b95c6180ad52e10924d1fcb2e489328f2c73f7": "ceea51a1b64afa6e6c2c645f171377b8",
".git/objects/80/1c5e7dde8e0318e2cd844be2f1a4d84d41ed0f": "0217a90ea9ca0ea9552df6adf4671d78",
".git/objects/83/474f9acbbdfc88ce98ab64403233ecfcbe872a": "0a2a9bef9cde964738beb71fa111591d",
".git/objects/83/48fd674a9016b46442ce6b429f4b2b168d6f62": "871aedea582785c53f2f665fd9bfcd81",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/85/fd6b093273b778d7d0ae5ad8c7f4ed7bbc882b": "c17e923f6dc30485a9b8c737d672fe07",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/3cdd749c38c9c4f9c880ce632f71904fe0c9a8": "e94d5b34c39ad8e522dc701b5f0afbde",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/91/8f4ea9e93153262b84c5086431e91a37af36f6": "c514ab7ae7e233ca7a33adaefebd2328",
".git/objects/95/989200267d47d3b13775f76228df4cfbcc56d9": "bf9b3f39789e84126ec50269c5e25447",
".git/objects/97/58e89df13aae82872cd407de01577496b1de74": "ec498e518d48ac94e03ca621e6f2e8bc",
".git/objects/9d/fbf7ab2313b3cd2916dcddc7b5864ee3d624ec": "afa391a223dde60dca8514fe030d8eb3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/fa21b5a62f2b760e870e087690bdb4586ef6d8": "063ac15688710d2a48e188bc8bd7b836",
".git/objects/a2/302e6929f75bb629516b1ffd5531c0b3515de6": "51db9844e52db11f53f8b14b22cfc350",
".git/objects/a3/354f11da2155387cf6b9f0f8239ce39bab1f80": "3e2813dd21503c4aebb144bc07366191",
".git/objects/a6/dce46ed9a211ea56210bdd6d8c7fb2931f3188": "e8677baaa7c523f32c87fb129d1aa330",
".git/objects/a7/3837f2ea460dff4da2abf09457326ef8c442ea": "440b92a07624676ca8ff06a2817fb799",
".git/objects/a7/b76eb0e724fa651bff46a8bead52da443fc9d6": "9b7acd1e2a4514f34d5cf87cc80db4c7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/e1611f33b8ebe59c519dfa9a81e4c9954fc231": "20aa68896326a8d5c4f7b291c97e3653",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/af/eea102e44f37546980473fb2da285165a7489d": "9ca8ceafca8de983aa7f60f0b69f9d19",
".git/objects/b1/770afc760ae4d3620d3f4b4cbf5f04779a1c2b": "abc4b0c40a7f654d9b33a503d962c907",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4af1a9fa58e5bf85142bc4eecf0a22a26c25ab": "4640abc7eef696b58cf687e94e58d1a6",
".git/objects/bd/2cb1eae426a1af1649fe5f313a5e52579370f0": "d347e5835b4e872fa29c4c292cfa888b",
".git/objects/c0/988ae58a8afcbdcc2a1194f0ec359d646bc485": "c97580277ef89b1ea8de826c440d5075",
".git/objects/c1/9357bbfaa254df545f69ec62d1bc190cc697e8": "0da97e69befcd08a7c42ee96bdceaa4b",
".git/objects/c2/d9ecd452a0243b7028d80e5b41d9e8f5c7eb73": "89c303b7a0ab069d439e901559640ef3",
".git/objects/c4/3baaee5ba8c3a2315b116ddff184a19a76b130": "b8531de833dce5ae0d31a2581797e80e",
".git/objects/c4/57f6cecfd618dd88e3129f8a742b994e5b0449": "0494ce6989e85075f4a55a7136e90e8d",
".git/objects/c6/9d5c2e94218519c1bf4feda357db508a2df40d": "e2ea3cd5aad600c31bd813397f097e13",
".git/objects/c8/eccfd62f93b406cf6d89a4f6be09b9dbd0bf75": "dffa690a0617d719e97fb5646e421c89",
".git/objects/c9/0c035406cfa230d48a49c99ea55afde2689ed9": "fd3c1883a68942f967fadf3c17c59e0a",
".git/objects/ce/afbb7f7f38ba9c459d7570fae92f2565a06cf2": "a2bac8593eac17a3336a806a665c0d2a",
".git/objects/cf/b574a2c4200e7fa1a4b1489222fcc9d96f6770": "05a2fa224340896ed2d47c8ffd0a9aee",
".git/objects/d0/19f5567158126369139119d91cf83dd0b8029e": "7d1e85c70cdf6c38c100c7d2a126edf2",
".git/objects/d1/4e1832cadfc887608e3e6a857967740a035ffe": "5175ccdb2440dd15b3454f88946b7683",
".git/objects/d2/455f427dc9b11886a874b2dc8b64d2e7f21fbd": "208be70d4284dcd72fe76036824e1878",
".git/objects/d4/e20e0cbf97f10a55a58073e30e219692c7f2c0": "79a04883d608ee6a332a25e63285329c",
".git/objects/dd/be6a2201bd31a0688a7fef5878818e80d32087": "e5cca30ee1ec18e7d0d78b134e207c63",
".git/objects/de/4475ce4f274cc846e2fcb742b00c85f8da30b0": "e681b55efdf3b57f4e13af43f64a1121",
".git/objects/e0/1bfcb9159430122cf8cd2e05de116c0cb61071": "45df78e18d904605d530655c1df68439",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/25de9afc784957ae0a579c9f724282773a823f": "f707498c32069c20bf38e99b0f0bf674",
".git/objects/e7/74f213b453a4d20f46ce4817f5ae273a629326": "49f5d66960f5b3a43c1b719083da9ea9",
".git/objects/e7/e7a18097a37e0e8670209feaa7f422ca22e53c": "de4f0eee71f05e13d48e0bd7401e39cb",
".git/objects/e9/77599ad4f40288e1bf18557dae52aee82ed87f": "41bfeacdeb8737632ed2eb92833e95e8",
".git/objects/eb/3736c0e45a7957127c19a95e50900305f58a8e": "531cfadd49bc56086ad777732bab8c79",
".git/objects/f0/57d551936952897ea1838ef8cb689f4bcaa60a": "59cc1a001c76c18ca0905eb1a465c52a",
".git/objects/f1/c6271ce6078d3d41beba49cc44e26f4cb9924a": "d040ec82456d73a960c5e52441b34d49",
".git/objects/f6/e2cf0a26389a48928b0e40f6e8407dbc8e960f": "65bc246e07782b862135d8f8e7cb2a88",
".git/objects/f8/614781d9447e7eeb2c41478bca68fabe683580": "f1974e30429872e1f0e73491168b6dbf",
".git/ORIG_HEAD": "909eed7ed2e3fd76f8a23ab50557bff3",
".git/refs/heads/main": "c2eec8d2e83db9df236375e628ea8933",
".git/refs/remotes/origin/main": "c2eec8d2e83db9df236375e628ea8933",
"assets/AssetManifest.json": "39f4afa3d297f94856d5a8e73d0dfda5",
"assets/assets/1.png": "6ffde3d6e81743024b7dd0c0a1e0d5cb",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/projects/Corona_Stats.png": "ed7b5d47e6ea95d48c8a6c923160f9ea",
"assets/assets/projects/DLS_logo.png": "19b52bbadfca064825badd4b3ede003d",
"assets/assets/projects/esportsLogo.png": "e63f49d452779364d3cf7cf15135e91d",
"assets/assets/projects/Flutter_logo.png": "0908e9cb4392a73533b7df9069de695a",
"assets/assets/projects/Pytorch_logo.png": "3441a3022ec2747d32cc0f0a6970c54a",
"assets/assets/projects/Success_Planner.png": "e3215c93f68ba80913103d18a3779994",
"assets/assets/splash.png": "021212725f9e96e0221886133f30135c",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6643be5157b72e18f643c21662a38e31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f7cb18b65834e7c07bae31c54b3253ef",
"/": "f7cb18b65834e7c07bae31c54b3253ef",
"main.dart.js": "9b01e5f5e6ad81612b815c3991ca72e8",
"manifest.json": "2f321f7f885c4f43f05e1ed99fad3bfc",
"splash/style.css": "5c74776d35b9e85d790997a9f2349a2d",
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
