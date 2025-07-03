'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf563c186209b7dd3282dba3cec6ab7",
".git/config": "72a9f61cc873ec5ee5596fb194155c69",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0fd1c8c94213eb4a736914506b84bbcb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "468bd0213a85dc5eb05c08161206b474",
".git/logs/refs/heads/main": "8889cf0c69d2d4535bcfc8135e8ba169",
".git/logs/refs/remotes/origin/main": "6a1b33478b8d543c35cbca826db1ce65",
".git/objects/00/552491297bcab1fd6898197fdacd3367ea7fd2": "943f108c229b97cdd4f9d42a87c64417",
".git/objects/06/302364fa989e3e8291654423720b494a75a1bc": "7ab7227e733cba1f08f11a574f4a8560",
".git/objects/06/f12135c3ae128921d8de89cb686c4e061fd696": "6eb93118a2c2c3d939b9e004ebac9382",
".git/objects/07/6383705ffe0e4e5040659c4e2b62ddf951dcb2": "ca228135484f4b08e7ae7647f37a919c",
".git/objects/09/73e937f79308543cae6c0a884d019c88847cfc": "6f07407cb705751bd88604c3bfe6225d",
".git/objects/09/bbcab2994aead5b14649aa9a13fe64eb8874f4": "8b3f9034aeafd2591dce551b86d1097b",
".git/objects/0a/91d75a5939adc2d9f3f4b2633f77ecbac798e9": "b6c11777af110c82a82d8bfd46dc93ba",
".git/objects/0b/69c201aa7416ee3d32e310a34337b30a2882ff": "7585c2a9b3fd2686856ea65785115ddd",
".git/objects/0b/9c4fae84f1963aafc8a6d5354dcc11d4b6353c": "38dd5125654daa7e5d2ba9e8f1b56df3",
".git/objects/10/474fc91be61cbe1b910bb69c7a3d624f569117": "14da0446e25f41dacc64dab18dfd72d1",
".git/objects/13/674c756101fe03f6f204db47c63b182ed02c3e": "2dd4b757ac5c716b5df85f1c3f2e3e94",
".git/objects/13/a83db8cfac47dd8a91a41567acd5786eb96fda": "e4965e3a760daf5cd8d912efed59c505",
".git/objects/19/5525b42312affbc3439eda5c11ec8660ad28c7": "3ff3c616dde1f6c31df88d4cac1f690d",
".git/objects/19/ee0d32d6e1e70ada1117d74ecc1a20d9986a5d": "3a8e4e8d50d04fa12aa4a5d461d3d9a4",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/5c1b6cb4451155685f9507ff10f6244de7cbb8": "c263d5c353158df26a4168072fc8cae9",
".git/objects/25/6037c4bad771fdb2982244568db56c68c4e075": "9999f3834963fbd79184d8573be73d11",
".git/objects/25/f840c4e0d1d99658e6d5e055136e29a83def02": "12bee735676206f4634cc71466ab050a",
".git/objects/28/5ee5ebefbcf50efe7bad2ee9a6a7e15efe042a": "8196b1b7be4ed3a9165c25133733472b",
".git/objects/29/01bad64ad69b8d3ea2877cdc3418ce21037d6f": "b8d5f861ea063844b28ea7346f6710c5",
".git/objects/2f/69c9ebb215e4fb550f48e22022249af969594e": "bd119ae89806922d571359e93f8bba07",
".git/objects/32/0e2ad2ed67bf060fcea3d2271c95cae8cb0c36": "17a576a217b34652bef72b6503996114",
".git/objects/3f/8337ad7337d6b14940840a510934e2ff32cd52": "6ea937518b0e6827740a27fc33331f58",
".git/objects/42/e55e7ddace21540bd394e751b4c50840c6a01c": "cad395ae4a3fddb43367ec0bee7b24fa",
".git/objects/43/dbc86f46f30d9f7ed3290c4843b9571e4a3f3a": "245b751e43e6881d268d1e197acea7ec",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/72392b28993b3e2cb90f3d4895fa15d273c6ba": "78604da9cf135942f449b7ea24e14c39",
".git/objects/49/441574d88f6883a6e86009e581398d3e84120b": "442c2570ae8e2fd71904d2504416b2b2",
".git/objects/49/897d7f419c148555aaa5fd3dd4fb9b58bcb22b": "9026e391ba0fbbc43c332723f6734954",
".git/objects/4a/611a920341cbf75a5ecd35256ff2308380dc3a": "fbf57347f998729ba9aedfb290ecd01c",
".git/objects/4a/bdbc80b999e249e63ed6e8665c1bd57b0d01aa": "6491771b6e6495dda4b5b0d971297b2e",
".git/objects/4b/5f12658d251119f14ab4a4796afe5c8eaeba72": "6faebfd56bd9f6ea14e3b90f40bedc1e",
".git/objects/4c/4b8595ce081daa5df6c9a5bfa34eb2c65a99d3": "67c76f8815312145d284fbb559dabc94",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/446ecf05d14ef84c157004014452f57bd97417": "fc5f0863a5c990dbfa0384a6735cadbd",
".git/objects/52/d480d770db8f23fff846b55a31e39e3419f0c4": "0c690962504c0cb340157ffd1977e6f5",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/61/5ae2da18a2ab25bc9e1deac2605af0937ebdcf": "7ae632d43770f5b520cae2eadb8d6759",
".git/objects/62/1caebd7ee0e375dd6cbcd9bba15050bf050bf8": "ebe60f60c191cebe1c01fdd08982e806",
".git/objects/62/7ea849c05fc7cabc998adc0c8755a4c2c6acbc": "eb86497307513822dad18373a23f11c1",
".git/objects/62/e910dfa5b202191560e8bf3b24a38c8b2971ec": "10f46c769f54c16f226529b3598e192e",
".git/objects/63/ee5bfdc339272d13284727eaa0d3447c157d54": "cc6875876a2d02f3e50923e205df1cea",
".git/objects/65/a2c7b79d916056f561feecc3f254f02f7c327e": "60ec5a04f7498c3bf3bfebfb00295179",
".git/objects/65/ba30ee7497841290504c6d55151c0f5f9b2cb2": "4825989a0933dce466dfefe0b301ca9a",
".git/objects/66/3c6a45b308c8f604000100d97ddcf88a517922": "c220113da097b78583082579f0b0f4ff",
".git/objects/68/08f16a720587265dd4544d58a46f14ac0e5cbc": "d9161741b0a87868a498e07dafd0c1ac",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/a01829279cbd2332803ef8601954c9f32685e6": "79a73b30da0f30b8da1af49064b19c4d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/813065304e66ff74658e7fef4010fd721ed96e": "aee42750ef75015be2073a7eb8d22081",
".git/objects/76/b4dda473dd2bd68b547441a8779365599d477a": "41d95360d6053cd584d4df7d8ee67aac",
".git/objects/7a/99cfae813b8eb9f5deaa9844ff0d23f7d36046": "93f13c3042b99805e49be4f127317192",
".git/objects/7c/3e8077ec30c33b1029a925e31ba9564c53231b": "811be7d615f4ab0d5c877e95c385a9aa",
".git/objects/7f/97cf40c4e7dd609ccc3abd9362b36d29f1dc4b": "923c417c8542e67d07434dfb20e2e6ed",
".git/objects/83/b6dc28387521487131ab4c495e1e7361163925": "47ac489b74e2684a74027913facece29",
".git/objects/86/5a263134ad2733f62e5567b9e7927e2d9c3992": "d4a80d568faa746ce3a1968e0485c1f2",
".git/objects/8b/423657cb65fe91321a405f6f780b35ce441f7f": "929a5d1ea1f9f1ff153ca567863725ba",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/9111b4eb9f3529a2a90be74b8b546cb24cd441": "5d57160b456ef1277e345cbcbc62bfb6",
".git/objects/95/08702854d2528ea9af3cdf58b5b503f1f87543": "ec8513c5a80e281d18de59780eb53aad",
".git/objects/99/923c6bc859193b09f9dab5e77fe16af409031c": "f0e625716cc7332801b492ccf6577653",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/df9d0174f3e71e7e347b30328c03afb5e6f89a": "b7f89c86af43837c3e1be159a947961f",
".git/objects/9c/f14590d1dae034b588fcba01ff315c140aba76": "e4946988e3f52d0ed22331523173aee9",
".git/objects/a0/3ceb1ca7e0289b19c909f6ad5848754a2efb0f": "ab48c2c43395e181e75eb6156e7e60c9",
".git/objects/a7/92068a9b275fbcfb1347257f7eb7fe81ad665b": "f9fe618ad38ae1e35bf12cdd96572e82",
".git/objects/ab/a4e9086f9804f18fea72ab049099283be1f910": "379efcb80031195c553dda98b2ae16cd",
".git/objects/b1/007177a145a88ea850438cce6bcc93a0246e53": "638a1295775eddd1f01688d5607a78b7",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/5b8250ed0076c252833b4ded76463ea379c5e6": "be7b6ab8b7b53c85b262043d89774b69",
".git/objects/bd/1065947e7b97d0826dd5c53a766ff755186e0b": "7b6da2ee452e7fa682c1f80c25a107ea",
".git/objects/bf/e2bac65cd5eb6b572a1d23fee9d8591ae70f54": "50a9024a1a76c501bf2e45193ddad9f9",
".git/objects/c0/5c65cff4e39605df11378f6cc4ad701015d0b5": "4938ce4505f2395e35a6f1808531f16d",
".git/objects/c0/df96d3601776f600ea3da5083991a3bedff575": "68eeb06fc32747e0c59bdd0cf27342fe",
".git/objects/c1/518389f275bd1e46fc97def172306f38abfd37": "490e87de83dae1e556c99d214076df1f",
".git/objects/c4/7ceecad70fe34b04826538d9d9985e197149de": "6a14233244304611fda9bb3e79f4eb7a",
".git/objects/c5/31fb62a85ed6fec91866b97900b26a24e7036d": "d138a0400b716f0cbc084fb800052345",
".git/objects/c7/3a5726ab3980f24556c88929033b2b1acd5d4b": "471b9c20c80a7a260eb32ef8370b5a9e",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/52b84fa8f9beb209d0fe21f3ef3283357b46d5": "a43dcd54e42f3ab2255caf0cac2354df",
".git/objects/ca/543ba69d0b3d069064ffdcd2d7d8c17fbd56ab": "5ab8556afe03463758b24fe2d2dcce77",
".git/objects/cc/b81364b4678e079866745f38f052243cc8ac10": "d21c40ef59f85c711a0c3480dfc048c1",
".git/objects/ce/4b86d8849cb99eb7d5fe4f2cbc92a8e3aef099": "35d1efee4f9acce6956592e2b593458c",
".git/objects/d0/8b706a80cf689ffde1f5eaaf9343f27a3951cd": "ffcd778338052fb3bce60b59c81ad003",
".git/objects/d1/ae91a6f379eb6c64b3ecbc561dcb0a7a51ce4c": "a97f69a66d5aac69e8a0ab14c0928758",
".git/objects/d1/b74a5b58b7d52b0439c33489c1790c0ff655b2": "34b7e7ab68e9b41238cb1d4e7ce1a7e0",
".git/objects/d2/60146039c96f02882476af4d4bae9d4156a991": "f20a2129d83f7e6333e70ae4a56df860",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/b2114cf01855c039d8b9bc49eab6bcca9b17cb": "eb7ef579bb56e71cc9a0c64b19ef06db",
".git/objects/d9/4e8dfb204c0bd919f05af53de3445ca1dbd122": "8f06e91866fa1829cd280ac057d40a7b",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/faddef5ded85fad1ea02b66ace3429e2e9acfe": "e2462ec608caf4e66f78afc10c43d7be",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/6e1f2068b9b2be90c2ccd5fe7124e20d78cf7c": "6c7a13f64472232d8edad2fdf90c0a2a",
".git/objects/e3/75ec939eecd2d0d5b748ca20979bb0f61ce428": "d8b19f216edb6c4a5669ae14ac2e18cb",
".git/objects/e9/1c8eb5b971528bf72a96bbc77af649d837fde0": "d95229a0108e206104514c6e91971509",
".git/objects/e9/80cf90e0a933fbd09dc76383e632936e1ae94f": "02028d9b3eb39f14f53724b04ff7006f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/a08f5986f43ad3e1115d28bb682e5b3d87e733": "bdf4d260ac75e7a07d7ed019d3203d87",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d39fccd4d6aac865ccdd9274684d8695c5b795": "ff2560682dfe08c7ff77c39c1c392009",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/c361732b2b5e5914d247f74fe5d68a615235a3": "28cdc63c0ac1288a56537dbc5f482844",
".git/objects/f9/42889afa0b65bc7ba34d623203a1a9dc79323c": "18f732de67ab7e722ac05bfa3c365089",
".git/objects/fb/fdeba6f8c23c6ef41f38bc67b026beb23494f2": "6eb9dc6a728dc33b9e67d64a17a063c3",
".git/objects/fc/fac79783e592bf91b06abd400da48f3ce2f5c7": "fed3c4437a076b7145720e732b86f929",
".git/refs/heads/main": "3857b5b6e9bedd087adf36c1192c7adb",
".git/refs/remotes/origin/main": "3857b5b6e9bedd087adf36c1192c7adb",
"assets/AssetManifest.bin": "8245147c2261b392976c1ca4cfe36933",
"assets/AssetManifest.bin.json": "e34d787c0adc375fb8c1be033f422a44",
"assets/AssetManifest.json": "cf1427506a471fc6c1da4d83b87de44a",
"assets/assets/icons/app_icon.png": "7233cd8ea12c434dd5f40394a556488c",
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
"assets/NOTICES": "e02515115a36403530278735eb55b5d2",
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
"favicon.png": "12e6ebfa05f77eb37d85618773a1e300",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "21eb4ad50dbcb5982caaf0c5d03c192d",
"icons/Icon-192.png": "2739b1c31ae091ffca42ab7892ccab3c",
"icons/Icon-512.png": "e67d066849de1b1f4a203e01bd0be1b6",
"icons/Icon-maskable-192.png": "2739b1c31ae091ffca42ab7892ccab3c",
"icons/Icon-maskable-512.png": "e67d066849de1b1f4a203e01bd0be1b6",
"index.html": "6aca93e5e4e84acbce3a5455422f14e2",
"/": "6aca93e5e4e84acbce3a5455422f14e2",
"main.dart.js": "43d5f31b57fd55be73dc92e8cdaed5c0",
"manifest.json": "b2f32deb8a3ff3cd631a3c0aa663b7fe",
"version.json": "3167dde8f9fff034435fdac891ee419c"};
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
