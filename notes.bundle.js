"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["notes"],{

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

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeNote)
/* harmony export */ });
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ "./src/local_storage.js");


const noteCount = localStorage.length

const Notes = function (title, description, dueDate, priority, project, status) {
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
  this.project = project
  this.status = status
}

function makeNote (title, description, dueDate, priority, project, status) {
  const note = new Notes(title, description, dueDate, priority, project, status)
  _local_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeNote('note-' + noteCount, note)
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/notes.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkVzs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrRUFBZ0I7QUFDbEI7O0FBRThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9sb2NhbF9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3RvcmFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldE5vdGUgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgfVxuICBjb25zdCBtYWtlTm90ZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gIH1cbiAgY29uc3QgZGVsZXRlTm90ZSA9IChrZXkpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG4gIH1cblxuICByZXR1cm4geyBnZXROb3RlLCBtYWtlTm90ZSwgZGVsZXRlTm90ZSB9XG59KSgpXG5cbmV4cG9ydCB7IFN0b3JhZ2UgYXMgZGVmYXVsdCB9XG4iLCJpbXBvcnQgU3RvcmFnZSBmcm9tICcuL2xvY2FsX3N0b3JhZ2UuanMnXG5cbmNvbnN0IG5vdGVDb3VudCA9IGxvY2FsU3RvcmFnZS5sZW5ndGhcblxuY29uc3QgTm90ZXMgPSBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgc3RhdHVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZVxuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xufVxuXG5mdW5jdGlvbiBtYWtlTm90ZSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgc3RhdHVzKSB7XG4gIGNvbnN0IG5vdGUgPSBuZXcgTm90ZXModGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgc3RhdHVzKVxuICBTdG9yYWdlLm1ha2VOb3RlKCdub3RlLScgKyBub3RlQ291bnQsIG5vdGUpXG59XG5cbmV4cG9ydCB7IG1ha2VOb3RlIGFzIGRlZmF1bHQgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9