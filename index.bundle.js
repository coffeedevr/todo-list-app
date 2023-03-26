"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["index"],{

/***/ "./src/dom_interface.js":
/*!******************************!*\
  !*** ./src/dom_interface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMInferface)
/* harmony export */ });
const DOMInferface = (() => {
  const insertToById = (parent, child) => {
    const parentNode = document.querySelector('#' + `${parent}`)
    parentNode.appendChild(child)
  }
  const insertToByClass = (parent, child) => {
    const parentNode = document.querySelector('.' + `${parent}`)
    parentNode.appendChild(child)
  }
  const createElement = (name, classname, idname) => {
    const element = document.createElement(`${name}`)
    element.setAttribute('class', classname)
    element.setAttribute('id', idname)
    return element
  }
  const createImgById = (name, src) => {
    const element = document.createElement('img')
    element.setAttribute('id', name)
    element.src = src
    return element
  }
  const createImgByClass = (name, src) => {
    const element = document.createElement('img')
    element.setAttribute('class', name)
    element.src = src
    return element
  }
  const insertHtmlByClass = (name, text) => {
    const element = document.querySelector('.' + `${name}`)
    element.innerHTML = text
  }
  const insertTextContentById = (name, text) => {
    const element = document.querySelector('#' + `${name}`)
    element.innerHTML = text
  }
  const removeByClass = (name) => {
    const element = document.querySelector('.' + `${name}`)
    element.remove()
  }
  return { createElement, insertToById, insertToByClass, insertHtmlByClass, removeByClass, createImgById, createImgByClass, insertTextContentById }
})()




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_sections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_sections */ "./src/main_sections.js");


(0,_main_sections__WEBPACK_IMPORTED_MODULE_0__["default"])()


/***/ }),

/***/ "./src/main_sections.js":
/*!******************************!*\
  !*** ./src/main_sections.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadSections)
/* harmony export */ });
/* harmony import */ var _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_interface.js */ "./src/dom_interface.js");


function loadSections () {
  const headerText = 'Todo://'

  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'header-container', ''))
  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'content-container', ''))
  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'footer-container', ''))

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('header-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'header-title-wrapper', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('header-title-wrapper', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('h1', '', 'header-title-text'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('header-title-text', headerText)
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7QUMxQ1E7O0FBRTFDLDBEQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDRmlDOztBQUU5QjtBQUNmOztBQUVBLDRCQUE0Qix1RUFBMEI7QUFDdEQsNEJBQTRCLHVFQUEwQjtBQUN0RCw0QkFBNEIsdUVBQTBCOztBQUV0RCxFQUFFLHlFQUE0QixxQkFBcUIsdUVBQTBCO0FBQzdFLEVBQUUseUVBQTRCLHlCQUF5Qix1RUFBMEI7QUFDakYsRUFBRSwrRUFBa0M7QUFDcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2RvbV9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21haW5fc2VjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRE9NSW5mZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgaW5zZXJ0VG9CeUlkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBgJHtwYXJlbnR9YClcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNoaWxkKVxuICB9XG4gIGNvbnN0IGluc2VydFRvQnlDbGFzcyA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgYCR7cGFyZW50fWApXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gKG5hbWUsIGNsYXNzbmFtZSwgaWRuYW1lKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzbmFtZSlcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZG5hbWUpXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuICBjb25zdCBjcmVhdGVJbWdCeUlkID0gKG5hbWUsIHNyYykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpXG4gICAgZWxlbWVudC5zcmMgPSBzcmNcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG4gIGNvbnN0IGNyZWF0ZUltZ0J5Q2xhc3MgPSAobmFtZSwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmFtZSlcbiAgICBlbGVtZW50LnNyYyA9IHNyY1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbiAgY29uc3QgaW5zZXJ0SHRtbEJ5Q2xhc3MgPSAobmFtZSwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke25hbWV9YClcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHRcbiAgfVxuICBjb25zdCBpbnNlcnRUZXh0Q29udGVudEJ5SWQgPSAobmFtZSwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGAke25hbWV9YClcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHRcbiAgfVxuICBjb25zdCByZW1vdmVCeUNsYXNzID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBgJHtuYW1lfWApXG4gICAgZWxlbWVudC5yZW1vdmUoKVxuICB9XG4gIHJldHVybiB7IGNyZWF0ZUVsZW1lbnQsIGluc2VydFRvQnlJZCwgaW5zZXJ0VG9CeUNsYXNzLCBpbnNlcnRIdG1sQnlDbGFzcywgcmVtb3ZlQnlDbGFzcywgY3JlYXRlSW1nQnlJZCwgY3JlYXRlSW1nQnlDbGFzcywgaW5zZXJ0VGV4dENvbnRlbnRCeUlkIH1cbn0pKClcblxuZXhwb3J0IHsgRE9NSW5mZXJmYWNlIGFzIGRlZmF1bHQgfVxuIiwiaW1wb3J0IGxvYWRTZWN0aW9ucyBmcm9tICcuL21haW5fc2VjdGlvbnMnXG5cbmxvYWRTZWN0aW9ucygpXG4iLCJpbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vZG9tX2ludGVyZmFjZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNlY3Rpb25zICgpIHtcbiAgY29uc3QgaGVhZGVyVGV4dCA9ICdUb2RvOi8vJ1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFkZXItY29udGFpbmVyJywgJycpKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGVudC1jb250YWluZXInLCAnJykpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb290ZXItY29udGFpbmVyJywgJycpKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2hlYWRlci1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hlYWRlci10aXRsZS13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdoZWFkZXItdGl0bGUtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdoMScsICcnLCAnaGVhZGVyLXRpdGxlLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnaGVhZGVyLXRpdGxlLXRleHQnLCBoZWFkZXJUZXh0KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9