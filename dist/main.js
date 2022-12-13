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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/utils */ \"./src/js/utils.js\");\n/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/data */ \"./src/js/data.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_js_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_js_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar data = [{\n  id: 1,\n  images: ['/images/products/tatran-s.jpg', '/images/products/tatran-m.jpg'],\n  title: 'Кровать TATRAN',\n  info: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',\n  price: 120000,\n  min: 1,\n  max: 5\n}, {\n  id: 2,\n  images: ['/images/products/vilora-s.jpg', '/images/products/vilora-m.jpg'],\n  title: 'Кресло VILORA',\n  info: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ',\n  price: 21000,\n  min: 2,\n  max: 8\n}, {\n  id: 3,\n  images: ['/images/products/menu-s.jpg', '/images/products/menu-m.jpg'],\n  title: 'Стол MENU',\n  info: 'Европейский дуб - отличается особой прочностью и стабильностью.',\n  price: 34000,\n  min: 1,\n  max: 2\n}, {\n  id: 4,\n  images: ['/images/products/askesta-s.jpg', '/images/products/askesta-m.jpg'],\n  title: 'Диван ASKESTA',\n  info: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',\n  price: 68000,\n  min: 1,\n  max: 9\n}, {\n  id: 5,\n  images: ['/images/products/lunar-s.jpg', '/images/products/lunar-m.jpg'],\n  title: 'Кресло LUNAR',\n  info: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',\n  price: 40000,\n  min: 2,\n  max: 6\n}, {\n  id: 6,\n  images: ['/images/products/nastan-s.jpg', '/images/products/nastan-m.jpg'],\n  title: 'Шкаф Nastan',\n  info: 'Мебель может быть оснащена разнообразными системами подсветки.',\n  price: 80000,\n  min: 1,\n  max: 2\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/data.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar nav = document.querySelector('.header__list');\nvar catalog = document.querySelector('.catalog');\nvar cart = document.querySelector('.cart');\n\n//Обработчик событий табов переключения окна между корзиной и каталогом через делегирование событий\nvar onNavigation = function onNavigation() {\n  nav.addEventListener('click', function (evt) {\n    if (evt.target.tagName !== 'UL') {\n      var target = evt.target.closest('li');\n      if (target.dataset.nav === 'catalog' && catalog.classList.contains('js-nodisplay')) {\n        catalog.classList.remove('js-nodisplay');\n        catalog.classList.add('js-display');\n        cart.classList.add('js-nodisplay');\n        cart.classList.remove('js-display');\n      }\n      ;\n      if (target.dataset.nav === 'cart' && cart.classList.contains('js-nodisplay')) {\n        catalog.classList.add('js-nodisplay');\n        catalog.classList.remove('js-display');\n        cart.classList.remove('js-nodisplay');\n        cart.classList.add('js-display');\n      }\n      ;\n    }\n  });\n};\n\n//проверка на наличие товара в корзине\n\nvar checkCart = function checkCart(id) {\n  var productsList = document.querySelectorAll('.product__item');\n  //сначала проверим что корзина не пуста\n  if (productsList.length > 0) {\n    var arrList = _toConsumableArray(productsList);\n    var check = function check(item) {\n      return item.dataset.id == id;\n    };\n    return arrList.some(check);\n  }\n};\n\n//добавление в корзину\n\nvar renderCart = function renderCart(item) {\n  if (!checkCart(item.id)) {\n    var productList = document.querySelector('.product__list');\n    var template = document.querySelector('.cart-template').content.querySelector('.product__item');\n    var newItem = template.cloneNode(true);\n    newItem.querySelector('.product__image').src = item.images[0];\n    newItem.querySelector('.product__title').textContent = item.title;\n    newItem.querySelector('.product__description').textContent = item.info;\n    newItem.querySelector('.product__price').textContent = item.price;\n    newItem.querySelector('.product__quality').textContent = item.min;\n    newItem.dataset.min = item.min;\n    newItem.dataset.max = item.max;\n    newItem.dataset.id = item.id;\n\n    //добавление товара при условии что количество меньше чем максимум\n    newItem.querySelector('.product__button--add').addEventListener('click', function () {\n      if (Number(newItem.querySelector('.product__quality').textContent) < item.max) {\n        document.querySelector('.order__value').textContent = item.price * item.min + Number(document.querySelector('.order__value').textContent);\n        newItem.querySelector('.product__quality').textContent = Number(newItem.querySelector('.product__quality').textContent) + item.min;\n      }\n    });\n    //уменьшение товара при условии что количество больше чем в корзине\n    newItem.querySelector('.product__button--remove').addEventListener('click', function () {\n      newItem.querySelector('.product__quality').textContent = Number(newItem.querySelector('.product__quality').textContent) - item.min;\n      document.querySelector('.order__value').textContent = Number(document.querySelector('.order__value').textContent) - item.price * item.min;\n      if (newItem.querySelector('.product__quality').textContent == '0') {\n        newItem.remove();\n      }\n    });\n\n    //удаляем все единицы этого наименования\n    newItem.querySelector('.product__link--del').addEventListener('click', function () {\n      document.querySelector('.order__value').textContent = Number(document.querySelector('.order__value').textContent) - item.price * Number(newItem.querySelector('.product__quality').textContent);\n      newItem.remove();\n    });\n    productList.appendChild(newItem);\n    // увеличиваем корзину при первом добавлении\n    document.querySelector('.order__value').textContent = item.price * item.min + Number(document.querySelector('.order__value').textContent);\n  }\n};\n\n//добавление в корзину\n\nvar addToCart = function addToCart(data, evt) {\n  var target = evt.target.closest('li');\n  var id = target.dataset.id;\n  data.forEach(function (item) {\n    if (item.id == id) {\n      renderCart(item);\n    }\n  });\n};\n\n//отрисовка каталога\n\nvar sortingDataMinMax = function sortingDataMinMax(data) {\n  var sorted = function sorted(a, b) {\n    return a.price - b.price;\n  };\n  return data.sort(sorted);\n};\nvar sortingDataMaxMin = function sortingDataMaxMin(data) {\n  var sorted = function sorted(a, b) {\n    return b.price - a.price;\n  };\n  return data.sort(sorted);\n};\nvar renderCatalog = function renderCatalog(data, sortBoolean) {\n  var catalogList = document.querySelector('.catalog__list');\n  if (sortBoolean) {\n    var sortedData = sortingDataMinMax(data);\n    sortedData.forEach(function (item) {\n      var template = document.querySelector('.catalog-template').content.querySelector('.catalog__item');\n      var newItem = template.cloneNode(true);\n      newItem.querySelector('.catalog__image').src = item.images[1];\n      newItem.querySelector('.catalog__title').textContent = item.title;\n      newItem.querySelector('.catalog__description').textContent = item.info;\n      newItem.querySelector('.catalog__price').textContent = item.price;\n      newItem.dataset.min = item.min;\n      newItem.dataset.max = item.max;\n      newItem.dataset.id = item.id;\n      newItem.addEventListener('click', function (evt) {\n        addToCart(data, evt);\n      });\n      catalogList.appendChild(newItem);\n    });\n  } else {\n    var _sortedData = sortingDataMaxMin(data);\n    _sortedData.forEach(function (item) {\n      var template = document.querySelector('.catalog-template').content.querySelector('.catalog__item');\n      var newItem = template.cloneNode(true);\n      newItem.querySelector('.catalog__image').src = item.images[1];\n      newItem.querySelector('.catalog__title').textContent = item.title;\n      newItem.querySelector('.catalog__description').textContent = item.info;\n      newItem.querySelector('.catalog__price').textContent = item.price;\n      newItem.dataset.min = item.min;\n      newItem.dataset.max = item.max;\n      newItem.dataset.id = item.id;\n      newItem.addEventListener('click', function (evt) {\n        addToCart(data, evt);\n      });\n      catalogList.appendChild(newItem);\n    });\n  }\n};\n\n//очистка корзины \n\nvar clearCart = function clearCart() {\n  var buttonClearCart = document.querySelector('.command__button--clear');\n  buttonClearCart.addEventListener('click', function () {\n    var products = document.querySelectorAll('.product__item');\n    for (var i = 0; i < products.length; i++) {\n      products[i].remove();\n    }\n    document.querySelector('.order__value').textContent = '0';\n  });\n};\n\n//переход в каталог по клику на продолжить покупки\nvar goCatalog = function goCatalog() {\n  var buttonGo = document.querySelector('.command__button--moveon');\n  buttonGo.addEventListener('click', function () {\n    catalog.classList.remove('js-nodisplay');\n    catalog.classList.add('js-display');\n    cart.classList.add('js-nodisplay');\n    cart.classList.remove('js-display');\n  });\n};\n\n//событие change select \nvar sortingBySelect = function sortingBySelect(data) {\n  var select = document.querySelector('.catalog__sort');\n  select.addEventListener('change', function (evt) {\n    var products = document.querySelectorAll('.catalog__item');\n    products.forEach(function (item) {\n      return item.remove();\n    });\n    if (evt.target.value == 'cheap') {\n      renderCatalog(data, true);\n    } else {\n      renderCatalog(data, false);\n    }\n  });\n};\nvar start = function start(data) {\n  onNavigation();\n  renderCatalog(data, true);\n  clearCart();\n  goCatalog();\n  sortingBySelect(data, true);\n};\n// sorting()\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/utils.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style/style.scss?");

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