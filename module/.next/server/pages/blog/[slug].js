"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 4331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: "container py-8 mx-auto text-4xl text-center font-bold text-slate-900 titleText",
            children: "Loading..."
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 2636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5941);
/* harmony import */ var _components_Loader_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4331);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const easing = [
    0.6,
    -0.5,
    0.01,
    0.99
];
const FadeInUP = {
    initial: {
        y: -60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: easing
        }
    }
};
const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.4
        }
    }
};
const BlogSlug = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(`/api/post/${router.query.slug || ""}/`);
    if (!data) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_Loading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "Dr.DILSHOD || ",
                            data?.title,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        property: "og:title",
                        content: ` ${data?.body}, ${data?.title} `
                    }, ` ${data?.title} `)
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.main, {
                initial: "initial",
                animate: "animate",
                className: "py-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    variants: stagger,
                    className: "container mx-auto px-3 md:px-0 flex flex-col gap-8 md:flex-row relative ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            variants: FadeInUP,
                            className: "w-full md:w-1/2 md:sticky top-[30px] md:h-[500px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                width: 500,
                                height: 500,
                                placeholder: "blur",
                                blurDataURL: data?.photo,
                                src: data?.photo,
                                alt: data?.title,
                                className: " shadow-xl w-full md:h-[500px] object-cover rounded-md"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full md:w-1/2 overflow-hidden ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {
                                    variants: FadeInUP,
                                    className: "text-slate-700 titleText font-bold text-2xl lg:text-4xl",
                                    children: data?.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {
                                    variants: FadeInUP,
                                    className: "mt-4 secondText font-[500!important] text-slate-600 md:text-lg",
                                    children: data?.body
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSlug);
async function getServerSideProps({ params  }) {
    const res = await fetch(`https://psihologictest6.pythonanywhere.com/api/post/${params.slug}/`);
    const data = await res.json();
    if (!data) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675], () => (__webpack_exec__(2636)));
module.exports = __webpack_exports__;

})();