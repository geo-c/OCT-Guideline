(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function injectStylesheet(s,e){var t=s.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,s.head.appendChild(t)}function injectScript(s,e){var t=s.createElement("script");t.type="text/javascript",t.src=e,t.async=!1,s.head.appendChild(t)}function injectAssets(s,e,t){t.forEach(function(t){var n=e.assetRoot+"build/"+e.manifest[t];n.match(/\.css/)?injectStylesheet(s,n):injectScript(s,n)})}function bootHypothesisClient(s,e){if(!s.querySelector('link[type="application/annotator+html"]')){var t=s.createElement("link");t.rel="sidebar",t.href=e.sidebarAppUrl,t.type="application/annotator+html",s.head.appendChild(t);var n=s.createElement("link");n.rel="hypothesis-client",n.href=e.assetRoot+"build/boot.js",n.type="application/annotator+javascript",s.head.appendChild(n),injectAssets(s,e,["scripts/polyfills.bundle.js","scripts/jquery.bundle.js","scripts/injector.bundle.js","styles/icomoon.css","styles/inject.css","styles/pdfjs-overrides.css"])}}function bootSidebarApp(s,e){injectAssets(s,e,["scripts/raven.bundle.js","scripts/angular.bundle.js","scripts/katex.bundle.js","scripts/showdown.bundle.js","scripts/polyfills.bundle.js","scripts/unorm.bundle.js","scripts/app.bundle.js","styles/angular-csp.css","styles/angular-toastr.css","styles/icomoon.css","styles/katex.min.css","styles/app.css"])}function boot(s,e){s.querySelector("hypothesis-app")?bootSidebarApp(s,e):bootHypothesisClient(s,e)}module.exports=boot;

},{}],2:[function(require,module,exports){
"use strict";var boot=require("./boot"),settings=require("../shared/settings").jsonConfigsFrom(document);boot(document,{assetRoot:settings.assetRoot||"https://cdn.hypothes.is/hypothesis/1.48.0/",manifest:{"fonts/KaTeX_AMS-Regular.woff":"fonts/KaTeX_AMS-Regular.woff?d1708b","fonts/KaTeX_Caligraphic-Bold.woff":"fonts/KaTeX_Caligraphic-Bold.woff?bce727","fonts/KaTeX_Caligraphic-Regular.woff":"fonts/KaTeX_Caligraphic-Regular.woff?ff0a2a","fonts/KaTeX_Fraktur-Bold.woff":"fonts/KaTeX_Fraktur-Bold.woff?4fe167","fonts/KaTeX_Fraktur-Regular.woff":"fonts/KaTeX_Fraktur-Regular.woff?22ac05","fonts/KaTeX_Main-Bold.woff":"fonts/KaTeX_Main-Bold.woff?355529","fonts/KaTeX_Main-Italic.woff":"fonts/KaTeX_Main-Italic.woff?0bf8cb","fonts/KaTeX_Main-Regular.woff":"fonts/KaTeX_Main-Regular.woff?76c0fe","fonts/KaTeX_Math-BoldItalic.woff":"fonts/KaTeX_Math-BoldItalic.woff?9a79de","fonts/KaTeX_Math-Italic.woff":"fonts/KaTeX_Math-Italic.woff?a0c5a3","fonts/KaTeX_Math-Regular.woff":"fonts/KaTeX_Math-Regular.woff?741de0","fonts/KaTeX_SansSerif-Bold.woff":"fonts/KaTeX_SansSerif-Bold.woff?0b932c","fonts/KaTeX_SansSerif-Italic.woff":"fonts/KaTeX_SansSerif-Italic.woff?c0cfcc","fonts/KaTeX_SansSerif-Regular.woff":"fonts/KaTeX_SansSerif-Regular.woff?0d52ce","fonts/KaTeX_Script-Regular.woff":"fonts/KaTeX_Script-Regular.woff?30b05b","fonts/KaTeX_Size1-Regular.woff":"fonts/KaTeX_Size1-Regular.woff?ac63f8","fonts/KaTeX_Size2-Regular.woff":"fonts/KaTeX_Size2-Regular.woff?80afd2","fonts/KaTeX_Size3-Regular.woff":"fonts/KaTeX_Size3-Regular.woff?579c05","fonts/KaTeX_Size4-Regular.woff":"fonts/KaTeX_Size4-Regular.woff?44c744","fonts/KaTeX_Typewriter-Regular.woff":"fonts/KaTeX_Typewriter-Regular.woff?6641c6","fonts/h.woff":"fonts/h.woff?9d153c","styles/angular-csp.css":"styles/angular-csp.css?e61a94","styles/angular-toastr.css":"styles/angular-toastr.css?b84bea","styles/app.css":"styles/app.css?28756b","styles/icomoon.css":"styles/icomoon.css?777c98","styles/inject.css":"styles/inject.css?9ccffd","styles/katex.min.css":"styles/katex.min.css?43cde2","styles/pdfjs-overrides.css":"styles/pdfjs-overrides.css?3591c3","scripts/angular.bundle.js":"scripts/angular.bundle.js?0c54ba","scripts/app.bundle.js":"scripts/app.bundle.js?1d45c6","scripts/boot.bundle.js":"scripts/boot.bundle.js?cceffd","scripts/injector.bundle.js":"scripts/injector.bundle.js?4caca7","scripts/jquery.bundle.js":"scripts/jquery.bundle.js?bf9aef","scripts/katex.bundle.js":"scripts/katex.bundle.js?3e79ec","scripts/polyfills.bundle.js":"scripts/polyfills.bundle.js?601fdd","scripts/raven.bundle.js":"scripts/raven.bundle.js?3d4f55","scripts/showdown.bundle.js":"scripts/showdown.bundle.js?efee18","scripts/unorm.bundle.js":"scripts/unorm.bundle.js?e86c45"},sidebarAppUrl:settings.sidebarAppUrl||"https://hypothes.is/app.html"});

},{"../shared/settings":3,"./boot":1}],3:[function(require,module,exports){
"use strict";function assign(o,s){for(var n in s)s.hasOwnProperty(n)&&(o[n]=s[n]);return o}function jsonConfigsFrom(o){for(var s={},n=o.querySelectorAll("script.js-hypothesis-config"),r=0;r<n.length;r++){var t;try{t=JSON.parse(n[r].textContent)}catch(o){console.warn("Could not parse settings from js-hypothesis-config tags",o),t={}}assign(s,t)}return s}module.exports={jsonConfigsFrom:jsonConfigsFrom};

},{}]},{},[2])