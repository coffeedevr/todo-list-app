"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["main_sections"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main_sections.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9zZWN0aW9ucy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsS0FBSztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVpQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDVzs7QUFFOUI7QUFDZjs7QUFFQSw0QkFBNEIsdUVBQTBCO0FBQ3RELDRCQUE0Qix1RUFBMEI7QUFDdEQsNEJBQTRCLHVFQUEwQjs7QUFFdEQsRUFBRSx5RUFBNEIscUJBQXFCLHVFQUEwQjtBQUM3RSxFQUFFLHlFQUE0Qix5QkFBeUIsdUVBQTBCO0FBQ2pGLEVBQUUsK0VBQWtDO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9kb21faW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbWFpbl9zZWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBET01JbmZlcmZhY2UgPSAoKCkgPT4ge1xuICBjb25zdCBpbnNlcnRUb0J5SWQgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGAke3BhcmVudH1gKVxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gIH1cbiAgY29uc3QgaW5zZXJ0VG9CeUNsYXNzID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBgJHtwYXJlbnR9YClcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNoaWxkKVxuICB9XG4gIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAobmFtZSwgY2xhc3NuYW1lLCBpZG5hbWUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtuYW1lfWApXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NuYW1lKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkbmFtZSlcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG4gIGNvbnN0IGNyZWF0ZUltZ0J5SWQgPSAobmFtZSwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSlcbiAgICBlbGVtZW50LnNyYyA9IHNyY1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbiAgY29uc3QgY3JlYXRlSW1nQnlDbGFzcyA9IChuYW1lLCBzcmMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuYW1lKVxuICAgIGVsZW1lbnQuc3JjID0gc3JjXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuICBjb25zdCBpbnNlcnRIdG1sQnlDbGFzcyA9IChuYW1lLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IGluc2VydFRleHRDb250ZW50QnlJZCA9IChuYW1lLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IHJlbW92ZUJ5Q2xhc3MgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke25hbWV9YClcbiAgICBlbGVtZW50LnJlbW92ZSgpXG4gIH1cbiAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudCwgaW5zZXJ0VG9CeUlkLCBpbnNlcnRUb0J5Q2xhc3MsIGluc2VydEh0bWxCeUNsYXNzLCByZW1vdmVCeUNsYXNzLCBjcmVhdGVJbWdCeUlkLCBjcmVhdGVJbWdCeUNsYXNzLCBpbnNlcnRUZXh0Q29udGVudEJ5SWQgfVxufSkoKVxuXG5leHBvcnQgeyBET01JbmZlcmZhY2UgYXMgZGVmYXVsdCB9XG4iLCJpbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vZG9tX2ludGVyZmFjZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNlY3Rpb25zICgpIHtcbiAgY29uc3QgaGVhZGVyVGV4dCA9ICdUb2RvOi8vJ1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFkZXItY29udGFpbmVyJywgJycpKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGVudC1jb250YWluZXInLCAnJykpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb290ZXItY29udGFpbmVyJywgJycpKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2hlYWRlci1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hlYWRlci10aXRsZS13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdoZWFkZXItdGl0bGUtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdoMScsICcnLCAnaGVhZGVyLXRpdGxlLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnaGVhZGVyLXRpdGxlLXRleHQnLCBoZWFkZXJUZXh0KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9