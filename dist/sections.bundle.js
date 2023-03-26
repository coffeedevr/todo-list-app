"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["sections"],{

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
    if (classname !== '') { element.setAttribute('class', classname) }
    if (idname !== '') { element.setAttribute('id', idname) }
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

/***/ "./src/local_storage.js":
/*!******************************!*\
  !*** ./src/local_storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
const Storage = (() => {
  const getNote = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }
  const makeNote = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  const deleteNote = (key) => {
    localStorage.removeItem(key)
  }

  return { getNote, makeNote, deleteNote }
})()




/***/ }),

/***/ "./src/sections.js":
/*!*************************!*\
  !*** ./src/sections.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadSections)
/* harmony export */ });
/* harmony import */ var _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_interface.js */ "./src/dom_interface.js");
/* harmony import */ var _assets_githublogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/githublogo.png */ "./src/assets/githublogo.png");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local_storage */ "./src/local_storage.js");




function loadSections () {
  const projects = { proj_0: 'None' }
  const headerText = 'Todo://'
  const importFont = '<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Alkatra&family=Bree+Serif&family=Tilt+Neon&family=Yatra+One&display=swap" rel="stylesheet">'
  const footerText = '© ' + new Date().getFullYear() + ' coffeedevr | '
  const addProjText = 'Add a Project'
  const addProjImg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tab-plus</title><path d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z" /></svg>'

  if (localStorage.getItem('projects') === null) { localStorage.setItem('projects', JSON.stringify(projects)) }

  document.getElementsByTagName('head')[0].innerHTML += importFont

  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'header-container', ''))
  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'content-container', ''))
  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'footer-container', ''))

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('header-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'header-title-wrapper', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('header-title-wrapper', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('h1', '', 'header-title-text'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('header-title-text', headerText)

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('footer-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('p', '', 'footer-text'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('footer-text', footerText)
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('footer-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createImgById('github-logo', _assets_githublogo_png__WEBPACK_IMPORTED_MODULE_1__))

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('content-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'home-nav-wrapper', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('content-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'proj-nav-wrapper', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('home-nav-wrapper', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'home-nav', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('home-nav', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('h1', '', 'home-title-text'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('home-nav', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('ul', 'nav-home-list', ''))
  generateHomeList()
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('proj-nav-wrapper', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'proj-nav', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('proj-nav', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('h1', '', 'proj-title-text'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('proj-nav', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('ul', 'nav-proj-list', ''))
  if (Object.keys(JSON.parse(localStorage.getItem('projects'))).length > 1) { generateProjList() }
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('home-title-text', 'Home')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('proj-title-text', 'Projects')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('nav-proj-list', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('li', 'nav-proj-list-item', 'add-proj'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('add-proj', addProjText)
  document.getElementById('add-proj').innerHTML += addProjImg

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('content-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'notes-wrapper', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('notes-wrapper', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'container-header-wrapper', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('container-header-wrapper', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('h2', '', 'container-header-text'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('container-header-text', 'All Tasks')
}

function generateHomeList () {
  const homeItems = ['Tasks', 'Today', 'Urgent']
  const imglinks = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clipboard-list-outline</title><path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V9H7V8H9V12H8M9.25 14C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10V18H7V17.08L9 15H7V14H9.25" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-account-outline</title><path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M12 10C14 10 15 12.42 13.59 13.84C12.17 15.26 9.75 14.25 9.75 12.25C9.75 11 10.75 10 12 10M16.5 17.88V18H7.5V17.88C7.5 16.63 9.5 15.63 12 15.63S16.5 16.63 16.5 17.88Z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>']

  for (let i = 0; i < homeItems.length; i++) {
    _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('nav-home-list', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('li', 'nav-home-list-item', 'home-item-' + i))
    _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('home-item-' + i, homeItems[i])
    document.getElementById('home-item-' + i).innerHTML += imglinks[i]
  }
}

function generateProjList () {
  const projList = Object.values(JSON.parse(localStorage.getItem('projects')))
  const projNum = Object.keys(JSON.parse(localStorage.getItem('projects'))).length
  console.log(projList)

  for (let i = 1; i < projNum; i++) {
    _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('nav-proj-list', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('li', 'nav-proj-list-item', 'proj-item-' + i))
    _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('proj-item-' + i, projList[i])
  }
}

function loadTasks () {}
function loadToday () {}
function loadUrgent () {}
function loadProjects () {}


/***/ }),

/***/ "./src/assets/githublogo.png":
/*!***********************************!*\
  !*** ./src/assets/githublogo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d1230310984ab700a264.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/sections.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbnMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRWlDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGdCO0FBQ0c7QUFDWDs7QUFFdEI7QUFDZixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7O0FBRW5EOztBQUVBLDRCQUE0Qix1RUFBMEI7QUFDdEQsNEJBQTRCLHVFQUEwQjtBQUN0RCw0QkFBNEIsdUVBQTBCOztBQUV0RCxFQUFFLHlFQUE0QixxQkFBcUIsdUVBQTBCO0FBQzdFLEVBQUUseUVBQTRCLHlCQUF5Qix1RUFBMEI7QUFDakYsRUFBRSwrRUFBa0M7O0FBRXBDLEVBQUUseUVBQTRCLHFCQUFxQix1RUFBMEI7QUFDN0UsRUFBRSwrRUFBa0M7QUFDcEMsRUFBRSx5RUFBNEIscUJBQXFCLHVFQUEwQixnQkFBZ0IsbURBQVU7O0FBRXZHLEVBQUUseUVBQTRCLHNCQUFzQix1RUFBMEI7QUFDOUUsRUFBRSx5RUFBNEIsc0JBQXNCLHVFQUEwQjtBQUM5RSxFQUFFLHlFQUE0QixxQkFBcUIsdUVBQTBCO0FBQzdFLEVBQUUseUVBQTRCLGFBQWEsdUVBQTBCO0FBQ3JFLEVBQUUseUVBQTRCLGFBQWEsdUVBQTBCO0FBQ3JFO0FBQ0EsRUFBRSx5RUFBNEIscUJBQXFCLHVFQUEwQjtBQUM3RSxFQUFFLHlFQUE0QixhQUFhLHVFQUEwQjtBQUNyRSxFQUFFLHlFQUE0QixhQUFhLHVFQUEwQjtBQUNyRSw4RUFBOEU7QUFDOUUsRUFBRSwrRUFBa0M7QUFDcEMsRUFBRSwrRUFBa0M7QUFDcEMsRUFBRSx5RUFBNEIsa0JBQWtCLHVFQUEwQjtBQUMxRSxFQUFFLCtFQUFrQztBQUNwQzs7QUFFQSxFQUFFLHlFQUE0QixzQkFBc0IsdUVBQTBCO0FBQzlFLEVBQUUseUVBQTRCLGtCQUFrQix1RUFBMEI7QUFDMUUsRUFBRSx5RUFBNEIsNkJBQTZCLHVFQUEwQjtBQUNyRixFQUFFLCtFQUFrQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEMsSUFBSSx5RUFBNEIsa0JBQWtCLHVFQUEwQjtBQUM1RSxJQUFJLCtFQUFrQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGFBQWE7QUFDL0IsSUFBSSx5RUFBNEIsa0JBQWtCLHVFQUEwQjtBQUM1RSxJQUFJLCtFQUFrQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9kb21faW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbG9jYWxfc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3NlY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERPTUluZmVyZmFjZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGluc2VydFRvQnlJZCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYCR7cGFyZW50fWApXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICBjb25zdCBpbnNlcnRUb0J5Q2xhc3MgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke3BhcmVudH1gKVxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gIH1cbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IChuYW1lLCBjbGFzc25hbWUsIGlkbmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke25hbWV9YClcbiAgICBpZiAoY2xhc3NuYW1lICE9PSAnJykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc25hbWUpIH1cbiAgICBpZiAoaWRuYW1lICE9PSAnJykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZG5hbWUpIH1cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG4gIGNvbnN0IGNyZWF0ZUltZ0J5SWQgPSAobmFtZSwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSlcbiAgICBlbGVtZW50LnNyYyA9IHNyY1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbiAgY29uc3QgY3JlYXRlSW1nQnlDbGFzcyA9IChuYW1lLCBzcmMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuYW1lKVxuICAgIGVsZW1lbnQuc3JjID0gc3JjXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuICBjb25zdCBpbnNlcnRIdG1sQnlDbGFzcyA9IChuYW1lLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IGluc2VydFRleHRDb250ZW50QnlJZCA9IChuYW1lLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IHJlbW92ZUJ5Q2xhc3MgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke25hbWV9YClcbiAgICBlbGVtZW50LnJlbW92ZSgpXG4gIH1cbiAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudCwgaW5zZXJ0VG9CeUlkLCBpbnNlcnRUb0J5Q2xhc3MsIGluc2VydEh0bWxCeUNsYXNzLCByZW1vdmVCeUNsYXNzLCBjcmVhdGVJbWdCeUlkLCBjcmVhdGVJbWdCeUNsYXNzLCBpbnNlcnRUZXh0Q29udGVudEJ5SWQgfVxufSkoKVxuXG5leHBvcnQgeyBET01JbmZlcmZhY2UgYXMgZGVmYXVsdCB9XG4iLCJjb25zdCBTdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0Tm90ZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICB9XG4gIGNvbnN0IG1ha2VOb3RlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgfVxuICBjb25zdCBkZWxldGVOb3RlID0gKGtleSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgfVxuXG4gIHJldHVybiB7IGdldE5vdGUsIG1ha2VOb3RlLCBkZWxldGVOb3RlIH1cbn0pKClcblxuZXhwb3J0IHsgU3RvcmFnZSBhcyBkZWZhdWx0IH1cbiIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9kb21faW50ZXJmYWNlLmpzJ1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSAnLi9hc3NldHMvZ2l0aHVibG9nby5wbmcnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL2xvY2FsX3N0b3JhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTZWN0aW9ucyAoKSB7XG4gIGNvbnN0IHByb2plY3RzID0geyBwcm9qXzA6ICdOb25lJyB9XG4gIGNvbnN0IGhlYWRlclRleHQgPSAnVG9kbzovLydcbiAgY29uc3QgaW1wb3J0Rm9udCA9ICc8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIj4gPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4+IDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsa2F0cmEmZmFtaWx5PUJyZWUrU2VyaWYmZmFtaWx5PVRpbHQrTmVvbiZmYW1pbHk9WWF0cmErT25lJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj4nXG4gIGNvbnN0IGZvb3RlclRleHQgPSAnwqkgJyArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArICcgY29mZmVlZGV2ciB8ICdcbiAgY29uc3QgYWRkUHJvalRleHQgPSAnQWRkIGEgUHJvamVjdCdcbiAgY29uc3QgYWRkUHJvakltZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnRhYi1wbHVzPC90aXRsZT48cGF0aCBkPVwiTTMsM0EyLDIgMCAwLDAgMSw1VjE5QTIsMiAwIDAsMCAzLDIxSDIxQTIsMiAwIDAsMCAyMywxOVY1QTIsMiAwIDAsMCAyMSwzSDNNMyw1SDEzVjlIMjFWMTlIM1Y1TTEwLDEwVjEzSDdWMTVIMTBWMThIMTJWMTVIMTVWMTNIMTJWMTBIMTBaXCIgLz48L3N2Zz4nXG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpID09PSBudWxsKSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSkgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uaW5uZXJIVE1MICs9IGltcG9ydEZvbnRcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnaGVhZGVyLWNvbnRhaW5lcicsICcnKSlcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbnRlbnQtY29udGFpbmVyJywgJycpKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZm9vdGVyLWNvbnRhaW5lcicsICcnKSlcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdoZWFkZXItY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFkZXItdGl0bGUtd3JhcHBlcicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnaGVhZGVyLXRpdGxlLXdyYXBwZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnaDEnLCAnJywgJ2hlYWRlci10aXRsZS10ZXh0JykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2hlYWRlci10aXRsZS10ZXh0JywgaGVhZGVyVGV4dClcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb290ZXItY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ3AnLCAnJywgJ2Zvb3Rlci10ZXh0JykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2Zvb3Rlci10ZXh0JywgZm9vdGVyVGV4dClcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnZm9vdGVyLWNvbnRhaW5lcicsIERPTUludGVyZmFjZS5jcmVhdGVJbWdCeUlkKCdnaXRodWItbG9nbycsIEdpdEh1YkxvZ28pKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2NvbnRlbnQtY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdob21lLW5hdi13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdjb250ZW50LWNvbnRhaW5lcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAncHJvai1uYXYtd3JhcHBlcicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnaG9tZS1uYXYtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnaG9tZS1uYXYnLCAnJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2hvbWUtbmF2JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2gxJywgJycsICdob21lLXRpdGxlLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnaG9tZS1uYXYnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgndWwnLCAnbmF2LWhvbWUtbGlzdCcsICcnKSlcbiAgZ2VuZXJhdGVIb21lTGlzdCgpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ3Byb2otbmF2LXdyYXBwZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Byb2otbmF2JywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdwcm9qLW5hdicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdoMScsICcnLCAncHJvai10aXRsZS10ZXh0JykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ3Byb2otbmF2JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ3VsJywgJ25hdi1wcm9qLWxpc3QnLCAnJykpXG4gIGlmIChPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSkubGVuZ3RoID4gMSkgeyBnZW5lcmF0ZVByb2pMaXN0KCkgfVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VGV4dENvbnRlbnRCeUlkKCdob21lLXRpdGxlLXRleHQnLCAnSG9tZScpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ3Byb2otdGl0bGUtdGV4dCcsICdQcm9qZWN0cycpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ25hdi1wcm9qLWxpc3QnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnbGknLCAnbmF2LXByb2otbGlzdC1pdGVtJywgJ2FkZC1wcm9qJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2FkZC1wcm9qJywgYWRkUHJvalRleHQpXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvaicpLmlubmVySFRNTCArPSBhZGRQcm9qSW1nXG5cbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnY29udGVudC1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ25vdGVzLXdyYXBwZXInLCAnJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ25vdGVzLXdyYXBwZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbnRhaW5lci1oZWFkZXItd3JhcHBlcicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnY29udGFpbmVyLWhlYWRlci13cmFwcGVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICdjb250YWluZXItaGVhZGVyLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnY29udGFpbmVyLWhlYWRlci10ZXh0JywgJ0FsbCBUYXNrcycpXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSG9tZUxpc3QgKCkge1xuICBjb25zdCBob21lSXRlbXMgPSBbJ1Rhc2tzJywgJ1RvZGF5JywgJ1VyZ2VudCddXG4gIGNvbnN0IGltZ2xpbmtzID0gWyc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNsaXBib2FyZC1saXN0LW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTkgM0gxNC44MkMxNC40IDEuODQgMTMuMyAxIDEyIDFTOS42IDEuODQgOS4xOCAzSDVDMy45IDMgMyAzLjkgMyA1VjE5QzMgMjAuMSAzLjkgMjEgNSAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWNUMyMSAzLjkgMjAuMSAzIDE5IDNNMTIgM0MxMi41NSAzIDEzIDMuNDUgMTMgNFMxMi41NSA1IDEyIDUgMTEgNC41NSAxMSA0IDExLjQ1IDMgMTIgM003IDdIMTdWNUgxOVYxOUg1VjVIN1Y3TTEyIDE3VjE1SDE3VjE3SDEyTTEyIDExVjlIMTdWMTFIMTJNOCAxMlY5SDdWOEg5VjEySDhNOS4yNSAxNEM5LjY2IDE0IDEwIDE0LjM0IDEwIDE0Ljc1QzEwIDE0Ljk1IDkuOTIgMTUuMTQgOS43OSAxNS4yN0w4LjEyIDE3SDEwVjE4SDdWMTcuMDhMOSAxNUg3VjE0SDkuMjVcIiAvPjwvc3ZnPicsXG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItYWNjb3VudC1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTE5IDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjkgMyAzIDMuOSAzIDVWMTlDMyAyMC4xMSAzLjkgMjEgNSAyMUgxOUMyMC4xMSAyMSAyMSAyMC4xMSAyMSAxOVY1QzIxIDMuOSAyMC4xMSAzIDE5IDNNMTkgMTlINVY5SDE5VjE5TTE5IDdINVY1SDE5TTEyIDEwQzE0IDEwIDE1IDEyLjQyIDEzLjU5IDEzLjg0QzEyLjE3IDE1LjI2IDkuNzUgMTQuMjUgOS43NSAxMi4yNUM5Ljc1IDExIDEwLjc1IDEwIDEyIDEwTTE2LjUgMTcuODhWMThINy41VjE3Ljg4QzcuNSAxNi42MyA5LjUgMTUuNjMgMTIgMTUuNjNTMTYuNSAxNi42MyAxNi41IDE3Ljg4WlwiIC8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5zdGFyLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMTUuMzlMOC4yNCwxNy42Nkw5LjIzLDEzLjM4TDUuOTEsMTAuNUwxMC4yOSwxMC4xM0wxMiw2LjA5TDEzLjcxLDEwLjEzTDE4LjA5LDEwLjVMMTQuNzcsMTMuMzhMMTUuNzYsMTcuNjZNMjIsOS4yNEwxNC44MSw4LjYzTDEyLDJMOS4xOSw4LjYzTDIsOS4yNEw3LjQ1LDEzLjk3TDUuODIsMjFMMTIsMTcuMjdMMTguMTgsMjFMMTYuNTQsMTMuOTdMMjIsOS4yNFpcIiAvPjwvc3ZnPiddXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob21lSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCduYXYtaG9tZS1saXN0JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xpJywgJ25hdi1ob21lLWxpc3QtaXRlbScsICdob21lLWl0ZW0tJyArIGkpKVxuICAgIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2hvbWUtaXRlbS0nICsgaSwgaG9tZUl0ZW1zW2ldKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWl0ZW0tJyArIGkpLmlubmVySFRNTCArPSBpbWdsaW5rc1tpXVxuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvakxpc3QgKCkge1xuICBjb25zdCBwcm9qTGlzdCA9IE9iamVjdC52YWx1ZXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpXG4gIGNvbnN0IHByb2pOdW0gPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSkubGVuZ3RoXG4gIGNvbnNvbGUubG9nKHByb2pMaXN0KVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvak51bTsgaSsrKSB7XG4gICAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnbmF2LXByb2otbGlzdCcsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdsaScsICduYXYtcHJvai1saXN0LWl0ZW0nLCAncHJvai1pdGVtLScgKyBpKSlcbiAgICBET01JbnRlcmZhY2UuaW5zZXJ0VGV4dENvbnRlbnRCeUlkKCdwcm9qLWl0ZW0tJyArIGksIHByb2pMaXN0W2ldKVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrcyAoKSB7fVxuZnVuY3Rpb24gbG9hZFRvZGF5ICgpIHt9XG5mdW5jdGlvbiBsb2FkVXJnZW50ICgpIHt9XG5mdW5jdGlvbiBsb2FkUHJvamVjdHMgKCkge31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==