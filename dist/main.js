/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/TaskItem/TaskItem.js":
/*!*********************************************!*\
  !*** ./src/components/TaskItem/TaskItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Priority: () => (/* binding */ Priority),\n/* harmony export */   TaskItem: () => (/* binding */ TaskItem)\n/* harmony export */ });\nconst Priority = {\n  low: 0,\n  medium: 1,\n  high: 2,\n};\n\nclass TaskItem {\n  constructor(id, title, description, dueDate, priority, project) {\n    this._id = id;\n    this._title = title;\n    this._description = description;\n    this._dueDate = dueDate;\n    this._priority = priority;\n    this._isDone = false;\n    this._project = project;\n  }\n\n  // Getters\n  get id() {\n    return this._id;\n  }\n\n  get title() {\n    return this._title;\n  }\n\n  get description() {\n    return this._description;\n  }\n\n  get dueDate() {\n    return this._dueDate;\n  }\n\n  get priority() {\n    return this._priority;\n  }\n\n  get isDone() {\n    return this._isDone;\n  }\n\n  get project() {\n    return this._project;\n  }\n\n  // Setters\n  set title(title) {\n    if (title === '') {\n      throw new Error('Title cannot be empty');\n    }\n    if (title.length > 30) {\n      throw new Error('Title cannot be longer than 30 characters');\n    }\n    if (title.length < 3) {\n      throw new Error('Title cannot be shorter than 3 characters');\n    }\n    if (typeof title !== 'string') {\n      throw new Error('Title must be a string');\n    }\n    this._title = title;\n  }\n\n  set description(description) {\n    if (typeof description !== 'string') {\n      throw new Error('Description must be a string');\n    }\n    this._description = description;\n  }\n\n  set dueDate(dueDate) {\n    const isInvalidDate = typeof dueDate !== 'object' || dueDate.constructor !== Date;\n    if (isInvalidDate) {\n      throw new Error('Due date must be a date');\n    }\n\n    const hasTime = dueDate.getHours() !== 0 || dueDate.getMinutes() !== 0 || dueDate.getSeconds() !== 0 || dueDate.getMilliseconds() !== 0;\n    if (!hasTime) {\n      dueDate.setHours(0, 0, 0, 0);\n    }\n    this._dueDate = new Date(dueDate);\n  }\n\n  set priority(priority) {\n    if (!Object.values(Priority).includes(priority)) {\n      throw new Error('Invalid priority');\n    }\n    this._priority = priority;\n  }\n\n  set project(project) {\n    if (typeof project !== 'string') {\n      throw new Error('Project must be a string');\n    }\n    this._project = project;\n  }\n\n  markAsDone() {\n    this._isDone = true;\n  }\n\n  markAsUndone() {\n    this._isDone = false;\n  }\n\n  render() {\n    var container = document.createElement('div');\n    return container;\n  }\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/TaskItem/TaskItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TaskItem_TaskItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TaskItem/TaskItem.js */ \"./src/components/TaskItem/TaskItem.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styles/global.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n // Adjust the path based on your project structure\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.querySelector('main');\n\n  // Example task\n  const task = new _components_TaskItem_TaskItem_js__WEBPACK_IMPORTED_MODULE_0__.TaskItem(1, 'Learn JavaScript', 'Description here', new Date(), _components_TaskItem_TaskItem_js__WEBPACK_IMPORTED_MODULE_0__.Priority.medium, 'Learning');\n\n  // Append the rendered task to the DOM\n  main.appendChild(task.render());\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;