/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/TaskItem/TaskItem.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/TaskItem/TaskItem.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.task {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "checkmark header"
    ". content";
  padding: 10px;
  column-gap: 16px;

  position: relative;
}

.task__checkbox {
  grid-area: checkmark;
}

.task__header {
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 100px;
}

.task__content {
  grid-area: content;
}

.task__title {
  font-weight: bold;
  margin: 8px 0px;
}

.task__menu {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.task:hover .task__menu {
  opacity: 1;
  visibility: visible;
}

.task__menu > .icon-button > span {
  font-size: 1.25rem;
}

.task__description {
  font-size: small;
  color: var(--color-neutral-300);
}

.task__due-date {
  font-size: small;
  color: var(--accent-color);
}
`, "",{"version":3,"sources":["webpack://./src/components/TaskItem/TaskItem.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,+BAA+B;EAC/B,6BAA6B;EAC7B;;eAEa;EACb,aAAa;EACb,gBAAgB;;EAEhB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB;;wBAEsB;AACxB;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;AAC5B","sourcesContent":[".task {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    \"checkmark header\"\n    \". content\";\n  padding: 10px;\n  column-gap: 16px;\n\n  position: relative;\n}\n\n.task__checkbox {\n  grid-area: checkmark;\n}\n\n.task__header {\n  grid-area: header;\n  display: grid;\n  grid-template-columns: 1fr 100px;\n}\n\n.task__content {\n  grid-area: content;\n}\n\n.task__title {\n  font-weight: bold;\n  margin: 8px 0px;\n}\n\n.task__menu {\n  display: inline-flex;\n  justify-content: flex-end;\n  align-items: center;\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    opacity 0.3s ease,\n    visibility 0.3s ease;\n}\n\n.task:hover .task__menu {\n  opacity: 1;\n  visibility: visible;\n}\n\n.task__menu > .icon-button > span {\n  font-size: 1.25rem;\n}\n\n.task__description {\n  font-size: small;\n  color: var(--color-neutral-300);\n}\n\n.task__due-date {\n  font-size: small;\n  color: var(--accent-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/TaskList/TaskList.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/TaskList/TaskList.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.task-list {
  padding: 16px;
  gap: 8px;
  width: clamp(500px, 70%, 800px);
}
`, "",{"version":3,"sources":["webpack://./src/components/TaskList/TaskList.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,QAAQ;EACR,+BAA+B;AACjC","sourcesContent":[".task-list {\n  padding: 16px;\n  gap: 8px;\n  width: clamp(500px, 70%, 800px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/button.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/button.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.text-button {
  padding: 8px;
  gap: 8px;
  transition: color 0.2s ease-in-out;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.icon-button {
  color: var(--color-neutral-400);
}
`, "",{"version":3,"sources":["webpack://./src/styles/button.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,QAAQ;EACR,kCAAkC;EAClC;;cAEY;AACd;;AAEA;EACE,+BAA+B;AACjC","sourcesContent":[".text-button {\n  padding: 8px;\n  gap: 8px;\n  transition: color 0.2s ease-in-out;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n}\n\n.icon-button {\n  color: var(--color-neutral-400);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/global.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;

  --bg-color: var(--color-neutral-900);
  --fg-color: var(--color-neutral-50);
  --accent-color: #e78a4e;

  --sidebar-bg-color: var(--color-neutral-800);
  --sidebar-fg-color: var(--color-neutral-50);

  --sidebar-color-over-background: var(--color-neutral-600);

  --md-icon-font: "Material Icons Round";
  --md-icon-size: 1rem;

  /* System tokens */
  --md-sys-color-primary: var(--accent-color);
  --md-sys-color-on-primary: var(--color-neutral-300);
  --md-sys-color-on-surface-variant: #3f4948;

  --md-sys-color-secondary-container: var(--color-neutral-700);
  --md-sys-color-on-secondary-container: var(--color-neutral-50);

  --md-ref-typeface-brand: "Roboto Serif";
  --md-ref-typeface-plain: system-ui;

  /* Component tokens */
  --md-checkbox-container-shape: 0px;
  --md-checkbox-container-color: #ffffff;

  /* Button */
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-family: "Roboto Serif", sans-serif;
  color: var(--fg-color);
  background-color: var(--bg-color);
}

body {
  display: grid;
  grid-template-columns: 250px 1fr;
}

main {
  padding: 32px 16px;
  display: flex;
  justify-content: center;
}

aside {
  color: var(--sidebar-fg-color);
  background-color: var(--sidebar-bg-color);

  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  gap: 16px;
}

aside > section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.task-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

/* Buttons */
button {
  background-color: transparent;
  border: none;
  border-radius: 8px;
  color: var(--fg-color);
  font-family: inherit;
  font-size: inherit;
  padding: 4px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  transition: color 0.2s ease-in-out;
  transition:
    background-color 0.3s,
    color 0.3s;
}

button:hover {
  background-color: var(--sidebar-color-over-background);
}

button:active {
  background-color: var(--color-neutral-500);
}

/* Checkbox */
input[type="checkbox"] {
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  width: 1.15em;
  height: 1.15em;
  border: 0.1em solid var(--color-neutral-400);
  border-radius: 0.25em;

  justify-self: center;
  align-self: center;

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--accent-color);

  transform-origin: center center;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);

  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;;EAE5B,oCAAoC;EACpC,mCAAmC;EACnC,uBAAuB;;EAEvB,4CAA4C;EAC5C,2CAA2C;;EAE3C,yDAAyD;;EAEzD,sCAAsC;EACtC,oBAAoB;;EAEpB,kBAAkB;EAClB,2CAA2C;EAC3C,mDAAmD;EACnD,0CAA0C;;EAE1C,4DAA4D;EAC5D,8DAA8D;;EAE9D,uCAAuC;EACvC,kCAAkC;;EAElC,qBAAqB;EACrB,kCAAkC;EAClC,sCAAsC;;EAEtC,WAAW;AACb;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,uCAAuC;EACvC,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,yCAAyC;;EAEzC,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,oBAAoB;AACtB;;AAEA,YAAY;AACZ;EACE,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,eAAe;;EAEf,oBAAoB;EACpB,mBAAmB;EACnB,2BAA2B;;EAE3B,kCAAkC;EAClC;;cAEY;AACd;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,0CAA0C;AAC5C;;AAEA,aAAa;AACb;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,SAAS;EACT,aAAa;EACb,aAAa;EACb,cAAc;EACd,4CAA4C;EAC5C,qBAAqB;;EAErB,oBAAoB;EACpB,kBAAkB;;EAElB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uCAAuC;EACvC,6CAA6C;;EAE7C,+BAA+B;EAC/B,uEAAuE;AACzE;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,4CAA4C;EAC5C,gCAAgC;;EAEhC,eAAe;AACjB","sourcesContent":[":root {\n  --color-neutral-50: #fafafa;\n  --color-neutral-100: #f5f5f5;\n  --color-neutral-200: #e5e5e5;\n  --color-neutral-300: #d4d4d4;\n  --color-neutral-400: #a3a3a3;\n  --color-neutral-500: #737373;\n  --color-neutral-600: #525252;\n  --color-neutral-700: #404040;\n  --color-neutral-800: #262626;\n  --color-neutral-900: #171717;\n  --color-neutral-950: #0a0a0a;\n\n  --bg-color: var(--color-neutral-900);\n  --fg-color: var(--color-neutral-50);\n  --accent-color: #e78a4e;\n\n  --sidebar-bg-color: var(--color-neutral-800);\n  --sidebar-fg-color: var(--color-neutral-50);\n\n  --sidebar-color-over-background: var(--color-neutral-600);\n\n  --md-icon-font: \"Material Icons Round\";\n  --md-icon-size: 1rem;\n\n  /* System tokens */\n  --md-sys-color-primary: var(--accent-color);\n  --md-sys-color-on-primary: var(--color-neutral-300);\n  --md-sys-color-on-surface-variant: #3f4948;\n\n  --md-sys-color-secondary-container: var(--color-neutral-700);\n  --md-sys-color-on-secondary-container: var(--color-neutral-50);\n\n  --md-ref-typeface-brand: \"Roboto Serif\";\n  --md-ref-typeface-plain: system-ui;\n\n  /* Component tokens */\n  --md-checkbox-container-shape: 0px;\n  --md-checkbox-container-color: #ffffff;\n\n  /* Button */\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: \"Roboto Serif\", sans-serif;\n  color: var(--fg-color);\n  background-color: var(--bg-color);\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n}\n\nmain {\n  padding: 32px 16px;\n  display: flex;\n  justify-content: center;\n}\n\naside {\n  color: var(--sidebar-fg-color);\n  background-color: var(--sidebar-bg-color);\n\n  display: flex;\n  flex-direction: column;\n  padding: 32px 16px;\n  gap: 16px;\n}\n\naside > section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n/* Buttons */\nbutton {\n  background-color: transparent;\n  border: none;\n  border-radius: 8px;\n  color: var(--fg-color);\n  font-family: inherit;\n  font-size: inherit;\n  padding: 4px;\n  cursor: pointer;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  transition: color 0.2s ease-in-out;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n}\n\nbutton:hover {\n  background-color: var(--sidebar-color-over-background);\n}\n\nbutton:active {\n  background-color: var(--color-neutral-500);\n}\n\n/* Checkbox */\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: transparent;\n  margin: 0;\n  font: inherit;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.1em solid var(--color-neutral-400);\n  border-radius: 0.25em;\n\n  justify-self: center;\n  align-self: center;\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--accent-color);\n\n  transform-origin: center center;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:focus {\n  outline: max(2px, 0.15em) solid currentColor;\n  outline-offset: max(2px, 0.15em);\n\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/TaskItem/TaskItem.html":
/*!***********************************************!*\
  !*** ./src/components/TaskItem/TaskItem.html ***!
  \***********************************************/
/***/ ((module) => {

// Module
var code = "<template id=\"task-template\">\n  <div class=\"task\">\n    <input type=\"checkbox\" class=\"task__checkbox\" name=\"isDone\" value=\"0\" />\n    <div class=\"task__header\">\n      <h4 class=\"task__title\">{{ title }}</h4>\n      <div class=\"task__menu\">\n        <button class=\"icon-button\">\n          <span class=\"material-symbols-rounded\"> edit </span>\n        </button>\n\n        <button class=\"icon-button\">\n          <span class=\"material-symbols-rounded\"> edit_calendar </span>\n        </button>\n\n        <button class=\"icon-button\">\n          <span class=\"material-symbols-rounded\"> delete </span>\n        </button>\n      </div>\n    </div>\n    <div class=\"task__content\">\n      <div class=\"task__description\">{{ description }}</div>\n      <div class=\"task__due-date\">{{ dueDate }}</div>\n    </div>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/TaskList/TaskList.html":
/*!***********************************************!*\
  !*** ./src/components/TaskList/TaskList.html ***!
  \***********************************************/
/***/ ((module) => {

// Module
var code = "<template id=\"task-list-template\">\n  <div class=\"task-list\">\n    <section class=\"task-list__header\">\n      <h2 class=\"task-list__view\">Today</h2>\n      <div class=\"task-list__header-menu\">\n        <button type=\"button\" class=\"material-symbols-rounded\">\n          <span class=\"material-symbols-rounded\"> add </span>\n        </button>\n      </div>\n    </section>\n    <section class=\"task-list-container\"></section>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/TaskItem/TaskItem.css":
/*!**********************************************!*\
  !*** ./src/components/TaskItem/TaskItem.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TaskItem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./TaskItem.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/TaskItem/TaskItem.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TaskItem_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TaskItem_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TaskItem_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TaskItem_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/TaskList/TaskList.css":
/*!**********************************************!*\
  !*** ./src/components/TaskList/TaskList.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TaskList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./TaskList.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/TaskList/TaskList.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TaskList_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TaskList_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TaskList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TaskList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/button.css":
/*!*******************************!*\
  !*** ./src/styles/button.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/TaskItem/TaskItem.js":
/*!*********************************************!*\
  !*** ./src/components/TaskItem/TaskItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Priority: () => (/* binding */ Priority),
/* harmony export */   TaskItem: () => (/* binding */ TaskItem)
/* harmony export */ });
/* harmony import */ var _TaskItem_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskItem.css */ "./src/components/TaskItem/TaskItem.css");
/* harmony import */ var _TaskItem_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskItem.html */ "./src/components/TaskItem/TaskItem.html");
/* harmony import */ var _TaskItem_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TaskItem_html__WEBPACK_IMPORTED_MODULE_1__);



const Priority = {
  low: 0,
  medium: 1,
  high: 2,
};

class TaskItem {
  constructor(id, title, description, dueDate, priority, project) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._isDone = false;
    this._project = project;
    this._template = null;
  }

  // Getters
  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get isDone() {
    return this._isDone;
  }

  get project() {
    return this._project;
  }

  // Setters
  set title(title) {
    if (title === "") {
      throw new Error("Title cannot be empty");
    }
    if (title.length > 30) {
      throw new Error("Title cannot be longer than 30 characters");
    }
    if (title.length < 3) {
      throw new Error("Title cannot be shorter than 3 characters");
    }
    if (typeof title !== "string") {
      throw new Error("Title must be a string");
    }
    this._title = title;
  }

  set description(description) {
    if (typeof description !== "string") {
      throw new Error("Description must be a string");
    }
    this._description = description;
  }

  set dueDate(dueDate) {
    const isInvalidDate =
      typeof dueDate !== "object" || dueDate.constructor !== Date;
    if (isInvalidDate) {
      throw new Error("Due date must be a date");
    }

    const hasTime =
      dueDate.getHours() !== 0 ||
      dueDate.getMinutes() !== 0 ||
      dueDate.getSeconds() !== 0 ||
      dueDate.getMilliseconds() !== 0;
    if (!hasTime) {
      dueDate.setHours(0, 0, 0, 0);
    }
    this._dueDate = new Date(dueDate);
  }

  set priority(priority) {
    if (!Object.values(Priority).includes(priority)) {
      throw new Error("Invalid priority");
    }
    this._priority = priority;
  }

  set project(project) {
    if (typeof project !== "string") {
      throw new Error("Project must be a string");
    }
    this._project = project;
  }

  markAsDone() {
    this._isDone = true;
  }

  markAsUndone() {
    this._isDone = false;
  }

  getTaskTemplate() {
    if (!this._template) {
      document.body.insertAdjacentHTML("beforeend", (_TaskItem_html__WEBPACK_IMPORTED_MODULE_1___default()));
      this._template = document.getElementById("task-template");
    }
    return this._template;
  }

  render() {
    let template = this.getTaskTemplate();
    const taskElement = template.content.cloneNode(true).querySelector(".task");

    taskElement.querySelector(".task__title").textContent = this.title;
    taskElement.querySelector(".task__description").textContent =
      this.description;
    taskElement.querySelector(".task__due-date").textContent =
      `${this.dueDate.toLocaleDateString()}`;

    const checkbox = taskElement.querySelector(".task__checkbox");
    checkbox.checked = this.isDone;

    return taskElement;
  }
}




/***/ }),

/***/ "./src/components/TaskList/TaskList.js":
/*!*********************************************!*\
  !*** ./src/components/TaskList/TaskList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskList_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.css */ "./src/components/TaskList/TaskList.css");
/* harmony import */ var _TaskList_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.html */ "./src/components/TaskList/TaskList.html");
/* harmony import */ var _TaskList_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TaskList_html__WEBPACK_IMPORTED_MODULE_1__);



class TaskList {
  constructor() {
    this.tasks = [];
    this._template = this.getTaskListTemplate();
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  sortTasks(sortBy) {
    this.tasks.sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt - b.createdAt;
      } else if (sortBy === "priority") {
        return b.priority - a.priority;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }

  getTaskListTemplate() {
    if (!this._template) {
      document.body.insertAdjacentHTML("beforeend", (_TaskList_html__WEBPACK_IMPORTED_MODULE_1___default()));
      this._template = document.getElementById("task-list-template");
    }
    return this._template;
  }

  render() {
    const taskListElement = this._template.content
      .cloneNode(true)
      .querySelector(".task-list");

    const taskListContainer = taskListElement.querySelector(
      ".task-list-container",
    );

    this.tasks.forEach((task) => {
      taskListContainer.appendChild(task.render());
    });
    return taskListElement;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);


/***/ }),

/***/ "./src/components/UI/UI.js":
/*!*********************************!*\
  !*** ./src/components/UI/UI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UI {
  constructor() {
    this.view = "inbox";
    this.taskList = null;
    this.domElements = {
      sidebar: null,
      main: null,
      taskList: null,
    };
    this.cacheDOM();
  }

  cacheDOM() {
    this.domElements.sidebar = document.querySelector(".sidebar");
    this.domElements.main = document.querySelector("main");
    this.domElements.taskList = document.querySelector(".task-list");
  }

  bindEventListeners() {
    const addTaskButton = document.getElementById("add-task-button");
    const searchButton = document.getElementById("search-button");
    const todayViewButton = document.getElementById("today-view-button");
    const upcomingViewButton = document.getElementById("upcoming-view-button");

    addTaskButton.addEventListener("click", this.addTask);
    todayViewButton.addEventListener("click", this.changeView("today"));
    upcomingViewButton.addEventListener("click", this.changeView("upcoming"));
  }

  addTask() {}
  changeView(view) {
    return () => {
      this.view = view;
    };
  }

  render() {
    this.taskList.innerHTML = "";
    this.taskList.appendChild(taskList.render());
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TaskItem_TaskItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TaskItem/TaskItem.js */ "./src/components/TaskItem/TaskItem.js");
/* harmony import */ var _components_TaskList_TaskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TaskList/TaskList.js */ "./src/components/TaskList/TaskList.js");
/* harmony import */ var _components_UI_UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UI/UI.js */ "./src/components/UI/UI.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/button.css */ "./src/styles/button.css");
/* harmony import */ var _components_TaskList_TaskList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TaskList/TaskList.css */ "./src/components/TaskList/TaskList.css");







document.addEventListener("DOMContentLoaded", () => {
  const ui = new _components_UI_UI_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const taskList = new _components_TaskList_TaskList_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const main = document.querySelector("main");

  const task = new _components_TaskItem_TaskItem_js__WEBPACK_IMPORTED_MODULE_0__.TaskItem(
    1,
    "Learn JavaScript",
    "Description here",
    new Date(),
    _components_TaskItem_TaskItem_js__WEBPACK_IMPORTED_MODULE_0__.Priority.medium,
    "Learning",
  );

  const task2 = new _components_TaskItem_TaskItem_js__WEBPACK_IMPORTED_MODULE_0__.TaskItem(
    2,
    "This is a very long task name that should be truncated, but I don't know how to do it yet.",
    "Description here",
    new Date(),
    _components_TaskItem_TaskItem_js__WEBPACK_IMPORTED_MODULE_0__.Priority.medium,
    "Learning",
  );
  taskList.addTask(task);
  taskList.addTask(task2);

  main.appendChild(taskList.render());
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUss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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7O1VDMUNsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVFO0FBQ2Q7QUFDbEI7QUFDVjtBQUNBO0FBQ2U7O0FBRTVDO0FBQ0EsaUJBQWlCLDREQUFFO0FBQ25CLHVCQUF1Qix3RUFBUTtBQUMvQjs7QUFFQSxtQkFBbUIsc0VBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFRO0FBQ1o7QUFDQTs7QUFFQSxvQkFBb0Isc0VBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFza0l0ZW0vVGFza0l0ZW0uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFza0l0ZW0vVGFza0l0ZW0uaHRtbCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC5odG1sIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2tJdGVtL1Rhc2tJdGVtLmNzcz83MGQwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LmNzcz9mNDlmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvYnV0dG9uLmNzcz82YmYxIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9mMGQ4Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFza0l0ZW0vVGFza0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGFzayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiY2hlY2ttYXJrIGhlYWRlclwiXG4gICAgXCIuIGNvbnRlbnRcIjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sdW1uLWdhcDogMTZweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrX19jaGVja2JveCB7XG4gIGdyaWQtYXJlYTogY2hlY2ttYXJrO1xufVxuXG4udGFza19faGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xufVxuXG4udGFza19fY29udGVudCB7XG4gIGdyaWQtYXJlYTogY29udGVudDtcbn1cblxuLnRhc2tfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogOHB4IDBweDtcbn1cblxuLnRhc2tfX21lbnUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOlxuICAgIG9wYWNpdHkgMC4zcyBlYXNlLFxuICAgIHZpc2liaWxpdHkgMC4zcyBlYXNlO1xufVxuXG4udGFzazpob3ZlciAudGFza19fbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50YXNrX19tZW51ID4gLmljb24tYnV0dG9uID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRhc2tfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMzAwKTtcbn1cblxuLnRhc2tfX2R1ZS1kYXRlIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1Rhc2tJdGVtL1Rhc2tJdGVtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCOztlQUVhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7RUFDbEI7O3dCQUVzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImNoZWNrbWFyayBoZWFkZXJcXFwiXFxuICAgIFxcXCIuIGNvbnRlbnRcXFwiO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbHVtbi1nYXA6IDE2cHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrX19jaGVja2JveCB7XFxuICBncmlkLWFyZWE6IGNoZWNrbWFyaztcXG59XFxuXFxuLnRhc2tfX2hlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDBweDtcXG59XFxuXFxuLnRhc2tfX2NvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbn1cXG5cXG4udGFza19fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDhweCAwcHg7XFxufVxcblxcbi50YXNrX19tZW51IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgb3BhY2l0eSAwLjNzIGVhc2UsXFxuICAgIHZpc2liaWxpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4udGFzazpob3ZlciAudGFza19fbWVudSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRhc2tfX21lbnUgPiAuaWNvbi1idXR0b24gPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnRhc2tfX2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC0zMDApO1xcbn1cXG5cXG4udGFza19fZHVlLWRhdGUge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50YXNrLWxpc3Qge1xuICBwYWRkaW5nOiAxNnB4O1xuICBnYXA6IDhweDtcbiAgd2lkdGg6IGNsYW1wKDUwMHB4LCA3MCUsIDgwMHB4KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUiwrQkFBK0I7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2stbGlzdCB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZ2FwOiA4cHg7XFxuICB3aWR0aDogY2xhbXAoNTAwcHgsIDcwJSwgODAwcHgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50ZXh0LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgZ2FwOiA4cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxuICAgIGNvbG9yIDAuM3M7XG59XG5cbi5pY29uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1Isa0NBQWtDO0VBQ2xDOztjQUVZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRleHQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGdhcDogOHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246XFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcXG4gICAgY29sb3IgMC4zcztcXG59XFxuXFxuLmljb24tYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWNvbG9yLW5ldXRyYWwtNTA6ICNmYWZhZmE7XG4gIC0tY29sb3ItbmV1dHJhbC0xMDA6ICNmNWY1ZjU7XG4gIC0tY29sb3ItbmV1dHJhbC0yMDA6ICNlNWU1ZTU7XG4gIC0tY29sb3ItbmV1dHJhbC0zMDA6ICNkNGQ0ZDQ7XG4gIC0tY29sb3ItbmV1dHJhbC00MDA6ICNhM2EzYTM7XG4gIC0tY29sb3ItbmV1dHJhbC01MDA6ICM3MzczNzM7XG4gIC0tY29sb3ItbmV1dHJhbC02MDA6ICM1MjUyNTI7XG4gIC0tY29sb3ItbmV1dHJhbC03MDA6ICM0MDQwNDA7XG4gIC0tY29sb3ItbmV1dHJhbC04MDA6ICMyNjI2MjY7XG4gIC0tY29sb3ItbmV1dHJhbC05MDA6ICMxNzE3MTc7XG4gIC0tY29sb3ItbmV1dHJhbC05NTA6ICMwYTBhMGE7XG5cbiAgLS1iZy1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC05MDApO1xuICAtLWZnLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwKTtcbiAgLS1hY2NlbnQtY29sb3I6ICNlNzhhNGU7XG5cbiAgLS1zaWRlYmFyLWJnLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTgwMCk7XG4gIC0tc2lkZWJhci1mZy1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC01MCk7XG5cbiAgLS1zaWRlYmFyLWNvbG9yLW92ZXItYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmV1dHJhbC02MDApO1xuXG4gIC0tbWQtaWNvbi1mb250OiBcIk1hdGVyaWFsIEljb25zIFJvdW5kXCI7XG4gIC0tbWQtaWNvbi1zaXplOiAxcmVtO1xuXG4gIC8qIFN5c3RlbSB0b2tlbnMgKi9cbiAgLS1tZC1zeXMtY29sb3ItcHJpbWFyeTogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgLS1tZC1zeXMtY29sb3Itb24tcHJpbWFyeTogdmFyKC0tY29sb3ItbmV1dHJhbC0zMDApO1xuICAtLW1kLXN5cy1jb2xvci1vbi1zdXJmYWNlLXZhcmlhbnQ6ICMzZjQ5NDg7XG5cbiAgLS1tZC1zeXMtY29sb3Itc2Vjb25kYXJ5LWNvbnRhaW5lcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xuICAtLW1kLXN5cy1jb2xvci1vbi1zZWNvbmRhcnktY29udGFpbmVyOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwKTtcblxuICAtLW1kLXJlZi10eXBlZmFjZS1icmFuZDogXCJSb2JvdG8gU2VyaWZcIjtcbiAgLS1tZC1yZWYtdHlwZWZhY2UtcGxhaW46IHN5c3RlbS11aTtcblxuICAvKiBDb21wb25lbnQgdG9rZW5zICovXG4gIC0tbWQtY2hlY2tib3gtY29udGFpbmVyLXNoYXBlOiAwcHg7XG4gIC0tbWQtY2hlY2tib3gtY29udGFpbmVyLWNvbG9yOiAjZmZmZmZmO1xuXG4gIC8qIEJ1dHRvbiAqL1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2VyaWZcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHZhcigtLWZnLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5hc2lkZSB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWZnLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzJweCAxNnB4O1xuICBnYXA6IDE2cHg7XG59XG5cbmFzaWRlID4gc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLyogQnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBwYWRkaW5nOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxuICAgIGNvbG9yIDAuM3M7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3Itb3Zlci1iYWNrZ3JvdW5kKTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKTtcbn1cblxuLyogQ2hlY2tib3ggKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxLjE1ZW07XG4gIGhlaWdodDogMS4xNWVtO1xuICBib3JkZXI6IDAuMWVtIHNvbGlkIHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwLjY1ZW07XG4gIGhlaWdodDogMC42NWVtO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tYWNjZW50LWNvbG9yKTtcblxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyB7XG4gIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgY3VycmVudENvbG9yO1xuICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsdUJBQXVCOztFQUV2Qiw0Q0FBNEM7RUFDNUMsMkNBQTJDOztFQUUzQyx5REFBeUQ7O0VBRXpELHNDQUFzQztFQUN0QyxvQkFBb0I7O0VBRXBCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsbURBQW1EO0VBQ25ELDBDQUEwQzs7RUFFMUMsNERBQTREO0VBQzVELDhEQUE4RDs7RUFFOUQsdUNBQXVDO0VBQ3ZDLGtDQUFrQzs7RUFFbEMscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxzQ0FBc0M7O0VBRXRDLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIseUNBQXlDOztFQUV6QyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isb0JBQW9CO0FBQ3RCOztBQUVBLFlBQVk7QUFDWjtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlOztFQUVmLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMkJBQTJCOztFQUUzQixrQ0FBa0M7RUFDbEM7O2NBRVk7QUFDZDs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCw0Q0FBNEM7RUFDNUMscUJBQXFCOztFQUVyQixvQkFBb0I7RUFDcEIsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyw2Q0FBNkM7O0VBRTdDLCtCQUErQjtFQUMvQix1RUFBdUU7QUFDekU7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsZ0NBQWdDOztFQUVoQyxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY29sb3ItbmV1dHJhbC01MDogI2ZhZmFmYTtcXG4gIC0tY29sb3ItbmV1dHJhbC0xMDA6ICNmNWY1ZjU7XFxuICAtLWNvbG9yLW5ldXRyYWwtMjAwOiAjZTVlNWU1O1xcbiAgLS1jb2xvci1uZXV0cmFsLTMwMDogI2Q0ZDRkNDtcXG4gIC0tY29sb3ItbmV1dHJhbC00MDA6ICNhM2EzYTM7XFxuICAtLWNvbG9yLW5ldXRyYWwtNTAwOiAjNzM3MzczO1xcbiAgLS1jb2xvci1uZXV0cmFsLTYwMDogIzUyNTI1MjtcXG4gIC0tY29sb3ItbmV1dHJhbC03MDA6ICM0MDQwNDA7XFxuICAtLWNvbG9yLW5ldXRyYWwtODAwOiAjMjYyNjI2O1xcbiAgLS1jb2xvci1uZXV0cmFsLTkwMDogIzE3MTcxNztcXG4gIC0tY29sb3ItbmV1dHJhbC05NTA6ICMwYTBhMGE7XFxuXFxuICAtLWJnLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTkwMCk7XFxuICAtLWZnLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwKTtcXG4gIC0tYWNjZW50LWNvbG9yOiAjZTc4YTRlO1xcblxcbiAgLS1zaWRlYmFyLWJnLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTgwMCk7XFxuICAtLXNpZGViYXItZmctY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNTApO1xcblxcbiAgLS1zaWRlYmFyLWNvbG9yLW92ZXItYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmV1dHJhbC02MDApO1xcblxcbiAgLS1tZC1pY29uLWZvbnQ6IFxcXCJNYXRlcmlhbCBJY29ucyBSb3VuZFxcXCI7XFxuICAtLW1kLWljb24tc2l6ZTogMXJlbTtcXG5cXG4gIC8qIFN5c3RlbSB0b2tlbnMgKi9cXG4gIC0tbWQtc3lzLWNvbG9yLXByaW1hcnk6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAtLW1kLXN5cy1jb2xvci1vbi1wcmltYXJ5OiB2YXIoLS1jb2xvci1uZXV0cmFsLTMwMCk7XFxuICAtLW1kLXN5cy1jb2xvci1vbi1zdXJmYWNlLXZhcmlhbnQ6ICMzZjQ5NDg7XFxuXFxuICAtLW1kLXN5cy1jb2xvci1zZWNvbmRhcnktY29udGFpbmVyOiB2YXIoLS1jb2xvci1uZXV0cmFsLTcwMCk7XFxuICAtLW1kLXN5cy1jb2xvci1vbi1zZWNvbmRhcnktY29udGFpbmVyOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwKTtcXG5cXG4gIC0tbWQtcmVmLXR5cGVmYWNlLWJyYW5kOiBcXFwiUm9ib3RvIFNlcmlmXFxcIjtcXG4gIC0tbWQtcmVmLXR5cGVmYWNlLXBsYWluOiBzeXN0ZW0tdWk7XFxuXFxuICAvKiBDb21wb25lbnQgdG9rZW5zICovXFxuICAtLW1kLWNoZWNrYm94LWNvbnRhaW5lci1zaGFwZTogMHB4O1xcbiAgLS1tZC1jaGVja2JveC1jb250YWluZXItY29sb3I6ICNmZmZmZmY7XFxuXFxuICAvKiBCdXR0b24gKi9cXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gU2VyaWZcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLWZnLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxufVxcblxcbm1haW4ge1xcbiAgcGFkZGluZzogMzJweCAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBjb2xvcjogdmFyKC0tc2lkZWJhci1mZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMzJweCAxNnB4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG5hc2lkZSA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4vKiBCdXR0b25zICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHZhcigtLWZnLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246XFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcXG4gICAgY29sb3IgMC4zcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3Itb3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCk7XFxufVxcblxcbi8qIENoZWNrYm94ICovXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgd2lkdGg6IDEuMTVlbTtcXG4gIGhlaWdodDogMS4xNWVtO1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjY1ZW07XFxuICBoZWlnaHQ6IDAuNjVlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWFjY2VudC1jb2xvcik7XFxuXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8dGVtcGxhdGUgaWQ9XFxcInRhc2stdGVtcGxhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwidGFza1xcXCI+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcInRhc2tfX2NoZWNrYm94XFxcIiBuYW1lPVxcXCJpc0RvbmVcXFwiIHZhbHVlPVxcXCIwXFxcIiAvPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YXNrX19oZWFkZXJcXFwiPlxcbiAgICAgIDxoNCBjbGFzcz1cXFwidGFza19fdGl0bGVcXFwiPnt7IHRpdGxlIH19PC9oND5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0YXNrX19tZW51XFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImljb24tYnV0dG9uXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFxcXCI+IGVkaXQgPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJpY29uLWJ1dHRvblxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcXFwiPiBlZGl0X2NhbGVuZGFyIDwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaWNvbi1idXR0b25cXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXFxcIj4gZGVsZXRlIDwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFza19fY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFza19fZGVzY3JpcHRpb25cXFwiPnt7IGRlc2NyaXB0aW9uIH19PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFza19fZHVlLWRhdGVcXFwiPnt7IGR1ZURhdGUgfX08L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjx0ZW1wbGF0ZSBpZD1cXFwidGFzay1saXN0LXRlbXBsYXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInRhc2stbGlzdFxcXCI+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJ0YXNrLWxpc3RfX2hlYWRlclxcXCI+XFxuICAgICAgPGgyIGNsYXNzPVxcXCJ0YXNrLWxpc3RfX3ZpZXdcXFwiPlRvZGF5PC9oMj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0YXNrLWxpc3RfX2hlYWRlci1tZW51XFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFxcXCI+IGFkZCA8L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwidGFzay1saXN0LWNvbnRhaW5lclxcXCI+PC9zZWN0aW9uPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFza0l0ZW0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYXNrSXRlbS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFza0xpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYXNrTGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL1Rhc2tJdGVtLmNzc1wiO1xuaW1wb3J0IHRhc2tJdGVtSHRtbCBmcm9tIFwiLi9UYXNrSXRlbS5odG1sXCI7XG5cbmNvbnN0IFByaW9yaXR5ID0ge1xuICBsb3c6IDAsXG4gIG1lZGl1bTogMSxcbiAgaGlnaDogMixcbn07XG5cbmNsYXNzIFRhc2tJdGVtIHtcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuX2lzRG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuX3RlbXBsYXRlID0gbnVsbDtcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IGlzRG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEb25lO1xuICB9XG5cbiAgZ2V0IHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gIH1cblxuICAvLyBTZXR0ZXJzXG4gIHNldCB0aXRsZSh0aXRsZSkge1xuICAgIGlmICh0aXRsZSA9PT0gXCJcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGl0bGUgY2Fubm90IGJlIGVtcHR5XCIpO1xuICAgIH1cbiAgICBpZiAodGl0bGUubGVuZ3RoID4gMzApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRpdGxlIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAzMCBjaGFyYWN0ZXJzXCIpO1xuICAgIH1cbiAgICBpZiAodGl0bGUubGVuZ3RoIDwgMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGl0bGUgY2Fubm90IGJlIHNob3J0ZXIgdGhhbiAzIGNoYXJhY3RlcnNcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGl0bGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRpdGxlIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgfVxuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0aW9uICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZXNjcmlwdGlvbiBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgIH1cbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIGNvbnN0IGlzSW52YWxpZERhdGUgPVxuICAgICAgdHlwZW9mIGR1ZURhdGUgIT09IFwib2JqZWN0XCIgfHwgZHVlRGF0ZS5jb25zdHJ1Y3RvciAhPT0gRGF0ZTtcbiAgICBpZiAoaXNJbnZhbGlkRGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRHVlIGRhdGUgbXVzdCBiZSBhIGRhdGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzVGltZSA9XG4gICAgICBkdWVEYXRlLmdldEhvdXJzKCkgIT09IDAgfHxcbiAgICAgIGR1ZURhdGUuZ2V0TWludXRlcygpICE9PSAwIHx8XG4gICAgICBkdWVEYXRlLmdldFNlY29uZHMoKSAhPT0gMCB8fFxuICAgICAgZHVlRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAhPT0gMDtcbiAgICBpZiAoIWhhc1RpbWUpIHtcbiAgICAgIGR1ZURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHRoaXMuX2R1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xuICAgIGlmICghT2JqZWN0LnZhbHVlcyhQcmlvcml0eSkuaW5jbHVkZXMocHJpb3JpdHkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHByaW9yaXR5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByb2plY3QocHJvamVjdCkge1xuICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvamVjdCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgIH1cbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIG1hcmtBc0RvbmUoKSB7XG4gICAgdGhpcy5faXNEb25lID0gdHJ1ZTtcbiAgfVxuXG4gIG1hcmtBc1VuZG9uZSgpIHtcbiAgICB0aGlzLl9pc0RvbmUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFRhc2tUZW1wbGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX3RlbXBsYXRlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCB0YXNrSXRlbUh0bWwpO1xuICAgICAgdGhpcy5fdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGVtcGxhdGVcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmdldFRhc2tUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpO1xuXG4gICAgdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrX19kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza19fZHVlLWRhdGVcIikudGV4dENvbnRlbnQgPVxuICAgICAgYCR7dGhpcy5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfWA7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza19fY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRoaXMuaXNEb25lO1xuXG4gICAgcmV0dXJuIHRhc2tFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCB7IFRhc2tJdGVtLCBQcmlvcml0eSB9O1xuIiwiaW1wb3J0IFwiLi9UYXNrTGlzdC5jc3NcIjtcbmltcG9ydCBUYXNrTGlzdEh0bWwgZnJvbSBcIi4vVGFza0xpc3QuaHRtbFwiO1xuXG5jbGFzcyBUYXNrTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuZ2V0VGFza0xpc3RUZW1wbGF0ZSgpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrSWQpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gIH1cblxuICBzb3J0VGFza3Moc29ydEJ5KSB7XG4gICAgdGhpcy50YXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoc29ydEJ5ID09PSBcImRhdGVcIikge1xuICAgICAgICByZXR1cm4gYS5jcmVhdGVkQXQgLSBiLmNyZWF0ZWRBdDtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEJ5ID09PSBcInByaW9yaXR5XCIpIHtcbiAgICAgICAgcmV0dXJuIGIucHJpb3JpdHkgLSBhLnByaW9yaXR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRUYXNrTGlzdFRlbXBsYXRlKCkge1xuICAgIGlmICghdGhpcy5fdGVtcGxhdGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFRhc2tMaXN0SHRtbCk7XG4gICAgICB0aGlzLl90ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0LXRlbXBsYXRlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gdGhpcy5fdGVtcGxhdGUuY29udGVudFxuICAgICAgLmNsb25lTm9kZSh0cnVlKVxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuXG4gICAgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSB0YXNrTGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnRhc2stbGlzdC1jb250YWluZXJcIixcbiAgICApO1xuXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrLnJlbmRlcigpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFza0xpc3RFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0O1xuIiwiY2xhc3MgVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZpZXcgPSBcImluYm94XCI7XG4gICAgdGhpcy50YXNrTGlzdCA9IG51bGw7XG4gICAgdGhpcy5kb21FbGVtZW50cyA9IHtcbiAgICAgIHNpZGViYXI6IG51bGwsXG4gICAgICBtYWluOiBudWxsLFxuICAgICAgdGFza0xpc3Q6IG51bGwsXG4gICAgfTtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gIH1cblxuICBjYWNoZURPTSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnRzLnNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgdGhpcy5kb21FbGVtZW50cy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgdGhpcy5kb21FbGVtZW50cy50YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuICB9XG5cbiAgYmluZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIik7XG4gICAgY29uc3QgdG9kYXlWaWV3QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS12aWV3LWJ1dHRvblwiKTtcbiAgICBjb25zdCB1cGNvbWluZ1ZpZXdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwY29taW5nLXZpZXctYnV0dG9uXCIpO1xuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hZGRUYXNrKTtcbiAgICB0b2RheVZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hhbmdlVmlldyhcInRvZGF5XCIpKTtcbiAgICB1cGNvbWluZ1ZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hhbmdlVmlldyhcInVwY29taW5nXCIpKTtcbiAgfVxuXG4gIGFkZFRhc2soKSB7fVxuICBjaGFuZ2VWaWV3KHZpZXcpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMudGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tMaXN0LnJlbmRlcigpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRhc2tJdGVtLCBQcmlvcml0eSB9IGZyb20gXCIuL2NvbXBvbmVudHMvVGFza0l0ZW0vVGFza0l0ZW0uanNcIjtcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LmpzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vY29tcG9uZW50cy9VSS9VSS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvYnV0dG9uLmNzc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LmNzc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHVpID0gbmV3IFVJKCk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCB0YXNrID0gbmV3IFRhc2tJdGVtKFxuICAgIDEsXG4gICAgXCJMZWFybiBKYXZhU2NyaXB0XCIsXG4gICAgXCJEZXNjcmlwdGlvbiBoZXJlXCIsXG4gICAgbmV3IERhdGUoKSxcbiAgICBQcmlvcml0eS5tZWRpdW0sXG4gICAgXCJMZWFybmluZ1wiLFxuICApO1xuXG4gIGNvbnN0IHRhc2syID0gbmV3IFRhc2tJdGVtKFxuICAgIDIsXG4gICAgXCJUaGlzIGlzIGEgdmVyeSBsb25nIHRhc2sgbmFtZSB0aGF0IHNob3VsZCBiZSB0cnVuY2F0ZWQsIGJ1dCBJIGRvbid0IGtub3cgaG93IHRvIGRvIGl0IHlldC5cIixcbiAgICBcIkRlc2NyaXB0aW9uIGhlcmVcIixcbiAgICBuZXcgRGF0ZSgpLFxuICAgIFByaW9yaXR5Lm1lZGl1bSxcbiAgICBcIkxlYXJuaW5nXCIsXG4gICk7XG4gIHRhc2tMaXN0LmFkZFRhc2sodGFzayk7XG4gIHRhc2tMaXN0LmFkZFRhc2sodGFzazIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQodGFza0xpc3QucmVuZGVyKCkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=