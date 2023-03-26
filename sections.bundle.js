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
  const addNote = '<svg id="add-task-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>'

  if (localStorage.getItem('projects') === null) { localStorage.setItem('projects', JSON.stringify(projects)) }

  document.getElementsByTagName('head')[0].innerHTML += importFont

  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'header-container', ''))
  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'content-container', ''))
  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'footer-container', ''))

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('header-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'header-title-wrapper', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('header-title-wrapper', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('h1', '', 'header-title-text'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('header-title-text', headerText)
  document.querySelector('.header-title-wrapper').innerHTML += addNote

  document.querySelector('#add-task-btn').addEventListener('click', showAddForm)

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
    _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('nav-home-list', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('li', 'nav-home-list-item', 'home-item-' + (i + 1)))
    _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('home-item-' + (i + 1), homeItems[i])
    document.getElementById('home-item-' + (i + 1)).innerHTML += imglinks[i]
  }
}

function generateProjList () {
  const projList = Object.values(JSON.parse(localStorage.getItem('projects')))
  const projNum = Object.keys(JSON.parse(localStorage.getItem('projects'))).length
  console.log(projList)

  for (let i = 1; i < projNum; i++) {
    _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('nav-proj-list', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('li', 'nav-proj-list-item', 'proj-item-' + (i + 1)))
    _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('proj-item-' + (i + 1), projList[i])
  }
}

function showAddForm () {
  document.body.appendChild(_dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', '', 'form-wrapper'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('form-wrapper', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('form', 'form-container', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('legend', 'form-row-1', 'form-legend'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('form-legend', 'Add Task://')

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'form-row-2', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-row-2', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('label', '', 'label-1'))
  document.querySelector('#label-1').setAttribute('for', 'title')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('label-1', 'Title:')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('label-1', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('input', 'form-controls', 'title'))
  document.querySelector('#title').setAttribute('type', 'text')
  document.querySelector('#title').setAttribute('name', 'title')
  document.querySelector('#title').setAttribute('placeholder', 'Enter title...')

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-row-2', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('label', '', 'label-3'))
  document.querySelector('#label-3').setAttribute('for', 'dueDate')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('label-3', 'Due Date:')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('label-3', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('input', 'form-controls', 'dueDate'))
  document.querySelector('#dueDate').setAttribute('type', 'datetime-local')
  document.querySelector('#dueDate').setAttribute('name', 'dueDate')

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'form-row-3', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-row-3', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('label', '', 'label-2'))
  document.querySelector('#label-2').setAttribute('for', 'description')
  document.querySelector('#label-2').setAttribute('type', 'text')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('label-2', 'Description:')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('label-2', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('textarea', 'form-controls', 'description'))
  document.querySelector('#description').setAttribute('name', 'description')
  document.querySelector('#description').setAttribute('placeholder', 'Enter description...')
  document.querySelector('#description').setAttribute('rows', '5')
  document.querySelector('#description').setAttribute('cols', '20')

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'form-row-4', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-row-4', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('label', '', 'label-4'))
  document.querySelector('#label-4').setAttribute('for', 'priority')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('label-4', 'Priority:')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('label-4', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('select', 'form-controls', 'priority'))
  document.querySelector('#priority').setAttribute('name', 'priority')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('priority', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('option', '', 'option-1'))
  document.querySelector('#option-1').setAttribute('value', 'None')
  document.querySelector('#option-1').textContent = 'None'
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('priority', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('option', '', 'prio-option-2'))
  document.querySelector('#prio-option-2').setAttribute('value', 'Urgent')
  document.querySelector('#prio-option-2').textContent = 'Urgent'

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-row-4', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('label', '', 'label-5'))
  document.querySelector('#label-5').setAttribute('for', 'project')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('label-5', 'Project:')
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('label-5', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('input', 'form-controls', 'project'))
  document.querySelector('#project').setAttribute('type', 'text')
  document.querySelector('#project').setAttribute('name', 'project')
  document.querySelector('#project').setAttribute('placeholder', 'Enter project...')

  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-container', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', 'form-row-5', ''))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('form-row-5', _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('button', '', 'add-task-form-btn'))
  _dom_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertTextContentById('add-task-form-btn', 'Add Task')
}

function addEvent () {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbnMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRWlDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGdCO0FBQ0c7QUFDWDs7QUFFdEI7QUFDZixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRDs7QUFFbkQ7O0FBRUEsNEJBQTRCLHVFQUEwQjtBQUN0RCw0QkFBNEIsdUVBQTBCO0FBQ3RELDRCQUE0Qix1RUFBMEI7O0FBRXRELEVBQUUseUVBQTRCLHFCQUFxQix1RUFBMEI7QUFDN0UsRUFBRSx5RUFBNEIseUJBQXlCLHVFQUEwQjtBQUNqRixFQUFFLCtFQUFrQztBQUNwQzs7QUFFQTs7QUFFQSxFQUFFLHlFQUE0QixxQkFBcUIsdUVBQTBCO0FBQzdFLEVBQUUsK0VBQWtDO0FBQ3BDLEVBQUUseUVBQTRCLHFCQUFxQix1RUFBMEIsZ0JBQWdCLG1EQUFVOztBQUV2RyxFQUFFLHlFQUE0QixzQkFBc0IsdUVBQTBCO0FBQzlFLEVBQUUseUVBQTRCLHNCQUFzQix1RUFBMEI7QUFDOUUsRUFBRSx5RUFBNEIscUJBQXFCLHVFQUEwQjtBQUM3RSxFQUFFLHlFQUE0QixhQUFhLHVFQUEwQjtBQUNyRSxFQUFFLHlFQUE0QixhQUFhLHVFQUEwQjtBQUNyRTtBQUNBLEVBQUUseUVBQTRCLHFCQUFxQix1RUFBMEI7QUFDN0UsRUFBRSx5RUFBNEIsYUFBYSx1RUFBMEI7QUFDckUsRUFBRSx5RUFBNEIsYUFBYSx1RUFBMEI7QUFDckUsOEVBQThFO0FBQzlFLEVBQUUsK0VBQWtDO0FBQ3BDLEVBQUUsK0VBQWtDO0FBQ3BDLEVBQUUseUVBQTRCLGtCQUFrQix1RUFBMEI7QUFDMUUsRUFBRSwrRUFBa0M7QUFDcEM7O0FBRUEsRUFBRSx5RUFBNEIsc0JBQXNCLHVFQUEwQjtBQUM5RSxFQUFFLHlFQUE0QixrQkFBa0IsdUVBQTBCO0FBQzFFLEVBQUUseUVBQTRCLDZCQUE2Qix1RUFBMEI7QUFDckYsRUFBRSwrRUFBa0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDLElBQUkseUVBQTRCLGtCQUFrQix1RUFBMEI7QUFDNUUsSUFBSSwrRUFBa0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixhQUFhO0FBQy9CLElBQUkseUVBQTRCLGtCQUFrQix1RUFBMEI7QUFDNUUsSUFBSSwrRUFBa0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix1RUFBMEI7QUFDdEQsRUFBRSxzRUFBeUIsaUJBQWlCLHVFQUEwQjtBQUN0RSxFQUFFLHlFQUE0QixtQkFBbUIsdUVBQTBCO0FBQzNFLEVBQUUsK0VBQWtDOztBQUVwQyxFQUFFLHlFQUE0QixtQkFBbUIsdUVBQTBCO0FBQzNFLEVBQUUseUVBQTRCLGVBQWUsdUVBQTBCO0FBQ3ZFO0FBQ0EsRUFBRSwrRUFBa0M7QUFDcEMsRUFBRSxzRUFBeUIsWUFBWSx1RUFBMEI7QUFDakU7QUFDQTtBQUNBOztBQUVBLEVBQUUseUVBQTRCLGVBQWUsdUVBQTBCO0FBQ3ZFO0FBQ0EsRUFBRSwrRUFBa0M7QUFDcEMsRUFBRSxzRUFBeUIsWUFBWSx1RUFBMEI7QUFDakU7QUFDQTs7QUFFQSxFQUFFLHlFQUE0QixtQkFBbUIsdUVBQTBCO0FBQzNFLEVBQUUseUVBQTRCLGVBQWUsdUVBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxFQUFFLCtFQUFrQztBQUNwQyxFQUFFLHNFQUF5QixZQUFZLHVFQUEwQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHlFQUE0QixtQkFBbUIsdUVBQTBCO0FBQzNFLEVBQUUseUVBQTRCLGVBQWUsdUVBQTBCO0FBQ3ZFO0FBQ0EsRUFBRSwrRUFBa0M7QUFDcEMsRUFBRSxzRUFBeUIsWUFBWSx1RUFBMEI7QUFDakU7QUFDQSxFQUFFLHNFQUF5QixhQUFhLHVFQUEwQjtBQUNsRTtBQUNBO0FBQ0EsRUFBRSxzRUFBeUIsYUFBYSx1RUFBMEI7QUFDbEU7QUFDQTs7QUFFQSxFQUFFLHlFQUE0QixlQUFlLHVFQUEwQjtBQUN2RTtBQUNBLEVBQUUsK0VBQWtDO0FBQ3BDLEVBQUUsc0VBQXlCLFlBQVksdUVBQTBCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHlFQUE0QixtQkFBbUIsdUVBQTBCO0FBQzNFLEVBQUUseUVBQTRCLGVBQWUsdUVBQTBCO0FBQ3ZFLEVBQUUsK0VBQWtDO0FBQ3BDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9kb21faW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbG9jYWxfc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3NlY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERPTUluZmVyZmFjZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGluc2VydFRvQnlJZCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYCR7cGFyZW50fWApXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICBjb25zdCBpbnNlcnRUb0J5Q2xhc3MgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke3BhcmVudH1gKVxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gIH1cbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IChuYW1lLCBjbGFzc25hbWUsIGlkbmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke25hbWV9YClcbiAgICBpZiAoY2xhc3NuYW1lICE9PSAnJykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc25hbWUpIH1cbiAgICBpZiAoaWRuYW1lICE9PSAnJykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZG5hbWUpIH1cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG4gIGNvbnN0IGNyZWF0ZUltZ0J5SWQgPSAobmFtZSwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSlcbiAgICBlbGVtZW50LnNyYyA9IHNyY1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbiAgY29uc3QgY3JlYXRlSW1nQnlDbGFzcyA9IChuYW1lLCBzcmMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuYW1lKVxuICAgIGVsZW1lbnQuc3JjID0gc3JjXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuICBjb25zdCBpbnNlcnRIdG1sQnlDbGFzcyA9IChuYW1lLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IGluc2VydFRleHRDb250ZW50QnlJZCA9IChuYW1lLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IHJlbW92ZUJ5Q2xhc3MgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke25hbWV9YClcbiAgICBlbGVtZW50LnJlbW92ZSgpXG4gIH1cbiAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudCwgaW5zZXJ0VG9CeUlkLCBpbnNlcnRUb0J5Q2xhc3MsIGluc2VydEh0bWxCeUNsYXNzLCByZW1vdmVCeUNsYXNzLCBjcmVhdGVJbWdCeUlkLCBjcmVhdGVJbWdCeUNsYXNzLCBpbnNlcnRUZXh0Q29udGVudEJ5SWQgfVxufSkoKVxuXG5leHBvcnQgeyBET01JbmZlcmZhY2UgYXMgZGVmYXVsdCB9XG4iLCJjb25zdCBTdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0Tm90ZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICB9XG4gIGNvbnN0IG1ha2VOb3RlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgfVxuICBjb25zdCBkZWxldGVOb3RlID0gKGtleSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgfVxuXG4gIHJldHVybiB7IGdldE5vdGUsIG1ha2VOb3RlLCBkZWxldGVOb3RlIH1cbn0pKClcblxuZXhwb3J0IHsgU3RvcmFnZSBhcyBkZWZhdWx0IH1cbiIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9kb21faW50ZXJmYWNlLmpzJ1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSAnLi9hc3NldHMvZ2l0aHVibG9nby5wbmcnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL2xvY2FsX3N0b3JhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTZWN0aW9ucyAoKSB7XG4gIGNvbnN0IHByb2plY3RzID0geyBwcm9qXzA6ICdOb25lJyB9XG4gIGNvbnN0IGhlYWRlclRleHQgPSAnVG9kbzovLydcbiAgY29uc3QgaW1wb3J0Rm9udCA9ICc8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIj4gPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4+IDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsa2F0cmEmZmFtaWx5PUJyZWUrU2VyaWYmZmFtaWx5PVRpbHQrTmVvbiZmYW1pbHk9WWF0cmErT25lJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj4nXG4gIGNvbnN0IGZvb3RlclRleHQgPSAnwqkgJyArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArICcgY29mZmVlZGV2ciB8ICdcbiAgY29uc3QgYWRkUHJvalRleHQgPSAnQWRkIGEgUHJvamVjdCdcbiAgY29uc3QgYWRkUHJvakltZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnRhYi1wbHVzPC90aXRsZT48cGF0aCBkPVwiTTMsM0EyLDIgMCAwLDAgMSw1VjE5QTIsMiAwIDAsMCAzLDIxSDIxQTIsMiAwIDAsMCAyMywxOVY1QTIsMiAwIDAsMCAyMSwzSDNNMyw1SDEzVjlIMjFWMTlIM1Y1TTEwLDEwVjEzSDdWMTVIMTBWMThIMTJWMTVIMTVWMTNIMTJWMTBIMTBaXCIgLz48L3N2Zz4nXG4gIGNvbnN0IGFkZE5vdGUgPSAnPHN2ZyBpZD1cImFkZC10YXNrLWJ0blwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnBsdXMtY2lyY2xlPC90aXRsZT48cGF0aCBkPVwiTTE3LDEzSDEzVjE3SDExVjEzSDdWMTFIMTFWN0gxM1YxMUgxN00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPidcblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpIHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKSB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5pbm5lckhUTUwgKz0gaW1wb3J0Rm9udFxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFkZXItY29udGFpbmVyJywgJycpKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGVudC1jb250YWluZXInLCAnJykpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb290ZXItY29udGFpbmVyJywgJycpKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2hlYWRlci1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hlYWRlci10aXRsZS13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdoZWFkZXItdGl0bGUtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdoMScsICcnLCAnaGVhZGVyLXRpdGxlLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnaGVhZGVyLXRpdGxlLXRleHQnLCBoZWFkZXJUZXh0KVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXRpdGxlLXdyYXBwZXInKS5pbm5lckhUTUwgKz0gYWRkTm90ZVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBZGRGb3JtKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2Zvb3Rlci1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgncCcsICcnLCAnZm9vdGVyLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnZm9vdGVyLXRleHQnLCBmb290ZXJUZXh0KVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb290ZXItY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUltZ0J5SWQoJ2dpdGh1Yi1sb2dvJywgR2l0SHViTG9nbykpXG5cbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnY29udGVudC1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hvbWUtbmF2LXdyYXBwZXInLCAnJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2NvbnRlbnQtY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwcm9qLW5hdi13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdob21lLW5hdi13cmFwcGVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdob21lLW5hdicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnaG9tZS1uYXYnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnaDEnLCAnJywgJ2hvbWUtdGl0bGUtdGV4dCcpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdob21lLW5hdicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCd1bCcsICduYXYtaG9tZS1saXN0JywgJycpKVxuICBnZW5lcmF0ZUhvbWVMaXN0KClcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygncHJvai1uYXYtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAncHJvai1uYXYnLCAnJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ3Byb2otbmF2JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2gxJywgJycsICdwcm9qLXRpdGxlLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygncHJvai1uYXYnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgndWwnLCAnbmF2LXByb2otbGlzdCcsICcnKSlcbiAgaWYgKE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKS5sZW5ndGggPiAxKSB7IGdlbmVyYXRlUHJvakxpc3QoKSB9XG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2hvbWUtdGl0bGUtdGV4dCcsICdIb21lJylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgncHJvai10aXRsZS10ZXh0JywgJ1Byb2plY3RzJylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnbmF2LXByb2otbGlzdCcsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdsaScsICduYXYtcHJvai1saXN0LWl0ZW0nLCAnYWRkLXByb2onKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnYWRkLXByb2onLCBhZGRQcm9qVGV4dClcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qJykuaW5uZXJIVE1MICs9IGFkZFByb2pJbWdcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdjb250ZW50LWNvbnRhaW5lcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbm90ZXMtd3JhcHBlcicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnbm90ZXMtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGFpbmVyLWhlYWRlci13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdjb250YWluZXItaGVhZGVyLXdyYXBwZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJ2NvbnRhaW5lci1oZWFkZXItdGV4dCcpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VGV4dENvbnRlbnRCeUlkKCdjb250YWluZXItaGVhZGVyLXRleHQnLCAnQWxsIFRhc2tzJylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lTGlzdCAoKSB7XG4gIGNvbnN0IGhvbWVJdGVtcyA9IFsnVGFza3MnLCAnVG9kYXknLCAnVXJnZW50J11cbiAgY29uc3QgaW1nbGlua3MgPSBbJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2xpcGJvYXJkLWxpc3Qtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xOSAzSDE0LjgyQzE0LjQgMS44NCAxMy4zIDEgMTIgMVM5LjYgMS44NCA5LjE4IDNINUMzLjkgMyAzIDMuOSAzIDVWMTlDMyAyMC4xIDMuOSAyMSA1IDIxSDE5QzIwLjEgMjEgMjEgMjAuMSAyMSAxOVY1QzIxIDMuOSAyMC4xIDMgMTkgM00xMiAzQzEyLjU1IDMgMTMgMy40NSAxMyA0UzEyLjU1IDUgMTIgNSAxMSA0LjU1IDExIDQgMTEuNDUgMyAxMiAzTTcgN0gxN1Y1SDE5VjE5SDVWNUg3VjdNMTIgMTdWMTVIMTdWMTdIMTJNMTIgMTFWOUgxN1YxMUgxMk04IDEyVjlIN1Y4SDlWMTJIOE05LjI1IDE0QzkuNjYgMTQgMTAgMTQuMzQgMTAgMTQuNzVDMTAgMTQuOTUgOS45MiAxNS4xNCA5Ljc5IDE1LjI3TDguMTIgMTdIMTBWMThIN1YxNy4wOEw5IDE1SDdWMTRIOS4yNVwiIC8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1hY2NvdW50LW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTkgM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuOSAzIDMgMy45IDMgNVYxOUMzIDIwLjExIDMuOSAyMSA1IDIxSDE5QzIwLjExIDIxIDIxIDIwLjExIDIxIDE5VjVDMjEgMy45IDIwLjExIDMgMTkgM00xOSAxOUg1VjlIMTlWMTlNMTkgN0g1VjVIMTlNMTIgMTBDMTQgMTAgMTUgMTIuNDIgMTMuNTkgMTMuODRDMTIuMTcgMTUuMjYgOS43NSAxNC4yNSA5Ljc1IDEyLjI1QzkuNzUgMTEgMTAuNzUgMTAgMTIgMTBNMTYuNSAxNy44OFYxOEg3LjVWMTcuODhDNy41IDE2LjYzIDkuNSAxNS42MyAxMiAxNS42M1MxNi41IDE2LjYzIDE2LjUgMTcuODhaXCIgLz48L3N2Zz4nLFxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnN0YXItb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiwxNS4zOUw4LjI0LDE3LjY2TDkuMjMsMTMuMzhMNS45MSwxMC41TDEwLjI5LDEwLjEzTDEyLDYuMDlMMTMuNzEsMTAuMTNMMTguMDksMTAuNUwxNC43NywxMy4zOEwxNS43NiwxNy42Nk0yMiw5LjI0TDE0LjgxLDguNjNMMTIsMkw5LjE5LDguNjNMMiw5LjI0TDcuNDUsMTMuOTdMNS44MiwyMUwxMiwxNy4yN0wxOC4xOCwyMUwxNi41NCwxMy45N0wyMiw5LjI0WlwiIC8+PC9zdmc+J11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvbWVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ25hdi1ob21lLWxpc3QnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnbGknLCAnbmF2LWhvbWUtbGlzdC1pdGVtJywgJ2hvbWUtaXRlbS0nICsgKGkgKyAxKSkpXG4gICAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnaG9tZS1pdGVtLScgKyAoaSArIDEpLCBob21lSXRlbXNbaV0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtaXRlbS0nICsgKGkgKyAxKSkuaW5uZXJIVE1MICs9IGltZ2xpbmtzW2ldXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qTGlzdCAoKSB7XG4gIGNvbnN0IHByb2pMaXN0ID0gT2JqZWN0LnZhbHVlcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSlcbiAgY29uc3QgcHJvak51bSA9IE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKS5sZW5ndGhcbiAgY29uc29sZS5sb2cocHJvakxpc3QpXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qTnVtOyBpKyspIHtcbiAgICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCduYXYtcHJvai1saXN0JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xpJywgJ25hdi1wcm9qLWxpc3QtaXRlbScsICdwcm9qLWl0ZW0tJyArIChpICsgMSkpKVxuICAgIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ3Byb2otaXRlbS0nICsgKGkgKyAxKSwgcHJvakxpc3RbaV0pXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FkZEZvcm0gKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJ2Zvcm0td3JhcHBlcicpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdmb3JtLXdyYXBwZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZm9ybScsICdmb3JtLWNvbnRhaW5lcicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnZm9ybS1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnbGVnZW5kJywgJ2Zvcm0tcm93LTEnLCAnZm9ybS1sZWdlbmQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnZm9ybS1sZWdlbmQnLCAnQWRkIFRhc2s6Ly8nKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2Zvcm0tY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb3JtLXJvdy0yJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLXJvdy0yJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgJycsICdsYWJlbC0xJykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbC0xJykuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VGV4dENvbnRlbnRCeUlkKCdsYWJlbC0xJywgJ1RpdGxlOicpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5SWQoJ2xhYmVsLTEnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnZm9ybS1jb250cm9scycsICd0aXRsZScpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgdGl0bGUuLi4nKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2Zvcm0tcm93LTInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCAnJywgJ2xhYmVsLTMnKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsLTMnKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnbGFiZWwtMycsICdEdWUgRGF0ZTonKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdsYWJlbC0zJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2Zvcm0tY29udHJvbHMnLCAnZHVlRGF0ZScpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRldGltZS1sb2NhbCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2Zvcm0tY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb3JtLXJvdy0zJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLXJvdy0zJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgJycsICdsYWJlbC0yJykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbC0yJykuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWwtMicpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnbGFiZWwtMicsICdEZXNjcmlwdGlvbjonKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdsYWJlbC0yJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgJ2Zvcm0tY29udHJvbHMnLCAnZGVzY3JpcHRpb24nKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBkZXNjcmlwdGlvbi4uLicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnNldEF0dHJpYnV0ZSgncm93cycsICc1JylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykuc2V0QXR0cmlidXRlKCdjb2xzJywgJzIwJylcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLWNvbnRhaW5lcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZm9ybS1yb3ctNCcsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnZm9ybS1yb3ctNCcsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdsYWJlbCcsICcnLCAnbGFiZWwtNCcpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWwtNCcpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5JylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnbGFiZWwtNCcsICdQcmlvcml0eTonKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdsYWJlbC00JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsICdmb3JtLWNvbnRyb2xzJywgJ3ByaW9yaXR5JykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5SWQoJ3ByaW9yaXR5JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnb3B0aW9uLTEnKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbi0xJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdOb25lJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbi0xJykudGV4dENvbnRlbnQgPSAnTm9uZSdcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlJZCgncHJpb3JpdHknLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgJycsICdwcmlvLW9wdGlvbi0yJykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvLW9wdGlvbi0yJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdVcmdlbnQnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpby1vcHRpb24tMicpLnRleHRDb250ZW50ID0gJ1VyZ2VudCdcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLXJvdy00JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgJycsICdsYWJlbC01JykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbC01Jykuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdCcpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2xhYmVsLTUnLCAnUHJvamVjdDonKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdsYWJlbC01JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2Zvcm0tY29udHJvbHMnLCAncHJvamVjdCcpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jykuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBwcm9qZWN0Li4uJylcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLWNvbnRhaW5lcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZm9ybS1yb3ctNScsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnZm9ybS1yb3ctNScsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnJywgJ2FkZC10YXNrLWZvcm0tYnRuJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2FkZC10YXNrLWZvcm0tYnRuJywgJ0FkZCBUYXNrJylcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnQgKCkge1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrcyAoKSB7fVxuZnVuY3Rpb24gbG9hZFRvZGF5ICgpIHt9XG5mdW5jdGlvbiBsb2FkVXJnZW50ICgpIHt9XG5mdW5jdGlvbiBsb2FkUHJvamVjdHMgKCkge31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==