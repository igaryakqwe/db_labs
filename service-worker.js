/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6321f6744b6e6cd09fc7845467dcfd94"
  },
  {
    "url": "assets/css/0.styles.24a49ee5.css",
    "revision": "5cd131a27656db41297dc8581bf8bac0"
  },
  {
    "url": "assets/img/add-user.722a8c13.png",
    "revision": "722a8c137faeacef84edb12f510c7519"
  },
  {
    "url": "assets/img/add-user.997428a5.png",
    "revision": "997428a5e07993bc87f5627d7b473e12"
  },
  {
    "url": "assets/img/delete-user.2183a0dd.png",
    "revision": "2183a0ddf4994fb64a8a6e01144a6b25"
  },
  {
    "url": "assets/img/delete-user.9c5d0283.png",
    "revision": "9c5d02831e1174e89ef82184d348f681"
  },
  {
    "url": "assets/img/get-all-users.4f3c1ae1.png",
    "revision": "4f3c1ae19a01f0922f44e1b076af0766"
  },
  {
    "url": "assets/img/get-all-users.e7df4305.png",
    "revision": "e7df4305ffdf790cdc361923853a9cb9"
  },
  {
    "url": "assets/img/get-user-by-id.8d07fa7c.png",
    "revision": "8d07fa7c3ab207e751a1e55b18d1b79a"
  },
  {
    "url": "assets/img/get-user-by-id.98b683ad.png",
    "revision": "98b683ada6b4a4b69889238f66bb61fa"
  },
  {
    "url": "assets/img/logo.21fcc4f4.svg",
    "revision": "21fcc4f485f8d8cd95ab594fcdc39a0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update-user.23fdd778.png",
    "revision": "23fdd7784c40ee0138d0df5cef43aa41"
  },
  {
    "url": "assets/img/update-user.4f44010d.png",
    "revision": "4f44010dc99bcc600fe4b3ef70bc3b30"
  },
  {
    "url": "assets/js/10.e6d186d0.js",
    "revision": "5577c34bb06ea495cbd5b0ff179c0e0f"
  },
  {
    "url": "assets/js/11.b80c909f.js",
    "revision": "f8b1deb36a4d47b3c7a24bcf7b72cfc7"
  },
  {
    "url": "assets/js/12.54855c33.js",
    "revision": "10a87746a5689015946971beefc182ff"
  },
  {
    "url": "assets/js/13.ef4a51d3.js",
    "revision": "fcfe8a108d68d23629917a4678fb407b"
  },
  {
    "url": "assets/js/14.0f80e116.js",
    "revision": "31b1cd5faa9685fc7dc8a48e27b5765a"
  },
  {
    "url": "assets/js/15.cc114a8c.js",
    "revision": "613c50f9a28273cd9dc680268c611fc6"
  },
  {
    "url": "assets/js/16.ed98b386.js",
    "revision": "135540c74e52abe8bc7794ec3f18c8f0"
  },
  {
    "url": "assets/js/17.2a6db8d7.js",
    "revision": "470b91485db107061e1aed1abc69e290"
  },
  {
    "url": "assets/js/18.794e0f13.js",
    "revision": "4f6964405a3eae978ace0989c288385d"
  },
  {
    "url": "assets/js/19.97ef8dd9.js",
    "revision": "9471dad1f1ba5fa4b5fe75b40e24bca2"
  },
  {
    "url": "assets/js/2.b15a7bbf.js",
    "revision": "1758eb7c996145e6b62a8f2ae74eee1e"
  },
  {
    "url": "assets/js/20.b3be59af.js",
    "revision": "acf71fe7a5d00c4125ed5d8ed5ab8f40"
  },
  {
    "url": "assets/js/21.af008b02.js",
    "revision": "12a94d6519ad07d52fd8f7b7d543bf33"
  },
  {
    "url": "assets/js/22.3d362531.js",
    "revision": "64b8a5fa55635eed4df4a91bec1f3600"
  },
  {
    "url": "assets/js/23.c6e7a650.js",
    "revision": "54696f83aa694ce2f4b797b5072864ba"
  },
  {
    "url": "assets/js/24.0533daee.js",
    "revision": "b837d603d8de10af942c4449272e62be"
  },
  {
    "url": "assets/js/26.0e2b4074.js",
    "revision": "fe7a56c53e2b539b59b35ab0f179ffd7"
  },
  {
    "url": "assets/js/3.13375ee6.js",
    "revision": "e57950e4d01b3bb2cd9879f2c6eb2615"
  },
  {
    "url": "assets/js/4.df9566cc.js",
    "revision": "2ff9124fa5ba643a35ecc3377f180ffe"
  },
  {
    "url": "assets/js/5.27b14872.js",
    "revision": "60e9964879304ba0b13f3470bd38fb05"
  },
  {
    "url": "assets/js/6.d3ff944c.js",
    "revision": "4d6a1934b8290eb06c2a3fe73d71a3cc"
  },
  {
    "url": "assets/js/7.34495710.js",
    "revision": "6489a6feef01d9513168fe7e4ad33cb2"
  },
  {
    "url": "assets/js/8.b32c7ba6.js",
    "revision": "bd7f3b9a42773c9c2bf6c429e5dd7752"
  },
  {
    "url": "assets/js/9.d28acf72.js",
    "revision": "61efeabdf64052253864e05c76f6f621"
  },
  {
    "url": "assets/js/app.3068bb25.js",
    "revision": "dd1b4149079230db94c07384d22ce04b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f85caa3897d496856d6cef88ec7d4f66"
  },
  {
    "url": "design/index.html",
    "revision": "c74b6a277b849cf77ae0fcfd7f720ae2"
  },
  {
    "url": "index.html",
    "revision": "fb8414581d00fc6f699b976ff6546aa0"
  },
  {
    "url": "intro/index.html",
    "revision": "de15163b516c145783ec693fc0deb8ae"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "de77be7304b62a5091d567b59b8a7755"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "98390cde6a3f7078f95338b854272df7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "54d5069db4434ff64127503eec5dabd5"
  },
  {
    "url": "software/index.html",
    "revision": "eeb613b88bd9ca66b0c80d341620ac0f"
  },
  {
    "url": "test/index.html",
    "revision": "7350642225302e6049a0cff5e9448367"
  },
  {
    "url": "use cases/index.html",
    "revision": "3ab17ff8c5eadfb5600c51daf68a0f4f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
