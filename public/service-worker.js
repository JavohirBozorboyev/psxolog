if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const c=e=>a(e,i),o={module:{uri:i},exports:t,require:c};s[i]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-hdvOXCteOr0jHYgboABDr.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/359-77f550bb7394e225.js",revision:"77f550bb7394e225"},{url:"/_next/static/chunks/649-f267e069ea1156e7.js",revision:"f267e069ea1156e7"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-b542e522de8da16e.js",revision:"b542e522de8da16e"},{url:"/_next/static/chunks/pages/404-b2244f71afc39eb1.js",revision:"b2244f71afc39eb1"},{url:"/_next/static/chunks/pages/_app-e2c64144dfe990d0.js",revision:"e2c64144dfe990d0"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/_offline-45b363a685fb94b8.js",revision:"45b363a685fb94b8"},{url:"/_next/static/chunks/pages/blog-96681739481ac7b6.js",revision:"96681739481ac7b6"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-5d7a0996a3ad0ebf.js",revision:"5d7a0996a3ad0ebf"},{url:"/_next/static/chunks/pages/index-fec3589072a24081.js",revision:"fec3589072a24081"},{url:"/_next/static/chunks/pages/quiz-b4cdb2cf6fa9e3aa.js",revision:"b4cdb2cf6fa9e3aa"},{url:"/_next/static/chunks/pages/quiz/%5Bslug%5D-c28e485ea2c9c5a5.js",revision:"c28e485ea2c9c5a5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-87b3a303122f2f0d.js",revision:"87b3a303122f2f0d"},{url:"/_next/static/css/84d733b2a324cabb.css",revision:"84d733b2a324cabb"},{url:"/_next/static/css/b32b5c51c9c1a1db.css",revision:"b32b5c51c9c1a1db"},{url:"/_next/static/hdvOXCteOr0jHYgboABDr/_buildManifest.js",revision:"08fc3a0d3f8f86bc100de3c8339d4e17"},{url:"/_next/static/hdvOXCteOr0jHYgboABDr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/avatar.50b6959d.jpg",revision:"0b4ccf82ab96cf8415af15544aa450ff"},{url:"/_next/static/media/favicon1.95873fb5.png",revision:"027bacf920208bdf1a41e5aedb114b3d"},{url:"/_offline",revision:"hdvOXCteOr0jHYgboABDr"},{url:"/favicon1.png",revision:"027bacf920208bdf1a41e5aedb114b3d"},{url:"/icon-192x192.png",revision:"0d9bb1fb195442b509e177e50f7b7682"},{url:"/icon-256x256.png",revision:"37ed5c02c49b15aab0b56cba6880d986"},{url:"/icon-384x384.png",revision:"05eb826b67bf0bc15c1a0b0ea08ef38f"},{url:"/icon-512x512.png",revision:"3a12e50d36337a536680e0f7f2cac433"},{url:"/manifest.json",revision:"97933feae1210c311d49be44ffd2efc5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
