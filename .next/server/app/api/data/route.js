"use strict";
(() => {
var exports = {};
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/data/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: ./app/api/data/route.ts


async function POST(req) {
    const { input } = await req.json();
    const url = `https://www.npmjs.com/package/${input.toLowerCase()}`;
    // console.log(url);
    const response = await fetch(url);
    const html = await response.text();
    const dom = new external_jsdom_namespaceObject.JSDOM(html);
    const document = dom.window.document;
    const downloads = document.querySelector("._9ba9a726")?.textContent;
    return next_response/* default */.Z.json({
        item: input,
        downloads
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fdata%2Froute&name=app%2Fapi%2Fdata%2Froute&pagePath=private-next-app-dir%2Fapi%2Fdata%2Froute.ts&appDir=E%3A%5C_CODE%5CWeb%20Scrapper%5Cjsdom_copy%5Cweb-scrapp%5Capp&appPaths=%2Fapi%2Fdata%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/data/route","pathname":"/api/data","filename":"route","bundlePath":"app/api/data/route"},"resolvedPagePath":"E:\\_CODE\\Web Scrapper\\jsdom_copy\\web-scrapp\\app\\api\\data\\route.ts","nextConfigOutput":"export"}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/data/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,501,335], () => (__webpack_exec__(2594)));
module.exports = __webpack_exports__;

})();