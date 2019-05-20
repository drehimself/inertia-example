(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/About.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/About.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");


function About(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "About to my first Inertia.js app!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.foo));
}

/***/ }),

/***/ "./resources/js/Shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inertia-react */ "./node_modules/inertia-react/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], {
    href: "/"
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], {
    href: "/about"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], {
    href: "/contact"
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", null, children));
}

/***/ })

}]);