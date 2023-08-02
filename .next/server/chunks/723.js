exports.id = 723;
exports.ids = [723];
exports.modules = {

/***/ 2747:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4050));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 309))

/***/ }),

/***/ 1073:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FloatingButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function FloatingButton() {
    const backToTop = ()=>{
        window.scrollTo(0, 0);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "sticky right-0 bottom-2 m-2 sm:m-8 bg-pink-500 p-2 rounded-full",
        onClick: backToTop,
        children: "Top"
    });
}


/***/ }),

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/CustomButton.tsx


const CustomButton = ({ btnType, containerStyle, handleClick, textStyle, title })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: btnType || "button",
        className: `custom-btn ${containerStyle}`,
        onClick: handleClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: `flex-1 ${textStyle}`,
            children: title
        })
    });
};
/* harmony default export */ const components_CustomButton = (CustomButton);

// EXTERNAL MODULE: ./utils/help.ts
var help = __webpack_require__(9733);
;// CONCATENATED MODULE: ./components/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Navbar() {
    const pathname = (0,navigation.usePathname)();
    const isHistory = pathname === "/history";
    const router = (0,navigation.useRouter)();
    const clean = ()=>{
        (0,help/* clearHistory */.QQ)();
        router.push("/comic");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex p-4 pb-0 px-8 items-center gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/comic",
                className: "btn-home",
                children: [
                    " ",
                    "Home"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/history",
                className: "btn-home",
                children: [
                    " ",
                    "History"
                ]
            }),
            isHistory && /*#__PURE__*/ jsx_runtime_.jsx(components_CustomButton, {
                title: "Clear History",
                containerStyle: "bg-white text-black px-8 py-2 rounded-md",
                handleClick: clean
            })
        ]
    });
}


/***/ }),

/***/ 9733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QQ: () => (/* binding */ clearHistory),
/* harmony export */   Rh: () => (/* binding */ saveHistory),
/* harmony export */   s1: () => (/* binding */ getHistory)
/* harmony export */ });
/* unused harmony export getImagesChapter */
const getImagesChapter = async (title, chapter)=>{
    const images = [];
    for(let index = 1; index <= 200; index++){
        const url = `https://cdn.manhwaland.cfd/wp-content/manga-images/${title[0]}/${title}/${chapter}/${index}.jpg`;
        images.push(url);
    }
    return images;
};
const saveHistory = (title, pathname)=>{
    // Step 1: Retrieve the existing array from localStorage
    const DATA = localStorage.getItem("history");
    const convertTitle = title.replaceAll("-", " ");
    // Step 2: Convert the JSON string back to an array (or create an empty array if the data is not yet in localStorage)
    const histories = DATA ? JSON.parse(DATA) : [];
    // Step 3: Check if there's an existing entry with the same title
    const existingHistoryIndex = histories.findIndex((item)=>item.title === convertTitle);
    const currChapter = parseInt(pathname.toString().charAt(pathname.length - 1));
    // Step 4: Push the new object into the array or update the existing URL
    const payload = {
        title: convertTitle,
        url: `${window.location.origin}${pathname}`,
        chapter: currChapter
    };
    if (existingHistoryIndex !== -1) {
        // If an entry with the same title is found, replace its URL
        histories[existingHistoryIndex].url = payload.url;
        histories[existingHistoryIndex].chapter = payload.chapter;
    } else {
        // If no entry with the same title is found, add a new entry to the array
        histories.push(payload);
    }
    // Step 5: Limit the array length to 10
    const maxLength = 10;
    if (histories.length > maxLength) {
        histories.splice(0, histories.length - maxLength);
    }
    // Step 6: Convert the updated array to a JSON string and save it to localStorage
    const updatedData = JSON.stringify(histories);
    localStorage.setItem("history", updatedData);
};
const clearHistory = ()=>{
    localStorage.setItem("history", "");
};
const getHistory = ()=>{
    // Step 1: Retrieve the existing array from localStorage
    const DATA = localStorage.getItem("history");
    // Step 2: Convert the JSON string back to an array (or create an empty array if the data is not yet in localStorage)
    const histories = DATA ? JSON.parse(DATA) : [];
    return histories;
};


/***/ }),

/***/ 6561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(2411);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`E:\_CODE\Web Scrapper\jsdom_copy\web-scrapp\components\Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
;// CONCATENATED MODULE: ./components/FloatingButton.tsx

const FloatingButton_proxy = (0,module_proxy.createProxy)(String.raw`E:\_CODE\Web Scrapper\jsdom_copy\web-scrapp\components\FloatingButton.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: FloatingButton_esModule, $$typeof: FloatingButton_$$typeof } = FloatingButton_proxy;
const FloatingButton_default_ = FloatingButton_proxy.default;


/* harmony default export */ const FloatingButton = (FloatingButton_default_);
;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "Web Scrapper | Next JS",
    description: "Web Scrapper for collect data from online shop"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(FloatingButton, {})
            ]
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;