"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["local_storage"],{

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/local_storage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxfc3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbG9jYWxfc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0Tm90ZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICB9XG4gIGNvbnN0IG1ha2VOb3RlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgfVxuICBjb25zdCBkZWxldGVOb3RlID0gKGtleSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgfVxuXG4gIHJldHVybiB7IGdldE5vdGUsIG1ha2VOb3RlLCBkZWxldGVOb3RlIH1cbn0pKClcblxuZXhwb3J0IHsgU3RvcmFnZSBhcyBkZWZhdWx0IH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==