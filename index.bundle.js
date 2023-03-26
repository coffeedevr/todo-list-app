"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --system-ui: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --main-color: rgb(24, 136, 170);\n    background-color: #e9ecf0;\n}\n\n* {\n\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n.header-container {\n    margin: 0;\n    box-shadow: 0 4px 2px -2px gray;\n    width: 100%;\n    background-color: white;\n}\n\n.header-title-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 30px;\n    min-width: 640px\n}\n\n#header-title-text {\n    margin: 0;\n    font-size: 3rem;\n    font-family: 'Bree Serif', var(--system-ui);\n    letter-spacing: 4px;\n    font-weight: 700;\n}\n\n.header-title-wrapper > svg {\n    height: 100px;\n    cursor: pointer;\n    fill: rgba(0,0,0,0.8)\n}\n\n.header-title-wrapper > svg:hover {\n    fill: rgba(0,0,0,1)\n}\n\n.content-container {\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: minmax(250px, 1fr) minmax(250px, 1fr);\n    column-gap: 20px;\n}\n\n.home-nav-wrapper {\n    display: flex;\n    flex-direction: column;\n    grid-row: 1 / 2;\n    grid-column: 1 / 1;\n    background-color: white;\n    min-width: 250px\n}\n\n.proj-nav-wrapper {\n    display: flex;\n    flex-direction: column;\n    grid-row: 2 / 2;\n    grid-column: 1 / 1;\n    background-color: white;\n    min-width: 250px\n}\n\n.nav-home-list, \n.nav-proj-list {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#proj-title-text,\n#home-title-text {\n    background-color: rgb(24, 136, 170);\n    color: white;\n    font-family: 'Bree Serif', var(--system-ui);\n    margin: 0px;\n    padding: 20px;\n    letter-spacing: 3px;\n    font-size: 1.5rem\n}\n\n#container-header-text {\n    font-family: 'Bree Serif', var(--system-ui);\n    margin: 0px;\n    letter-spacing: 3px;\n}\n\n\n.nav-home-list > li,\n.nav-proj-list > li {\n  font-size:  1.5rem;\n}\n\n.nav-home-list > li:hover,\n.nav-proj-list > li:hover {\n    background-color: black;\n    color: white;\n    fill: white\n}\n\n.nav-home-list-item {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n    cursor: pointer;\n    gap: 10px;\n    font-family: 'Bree Serif', var(--system-ui);\n    padding: 10px 25px;\n}\n\n.nav-proj-list-item {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n    cursor: pointer;\n    gap: 10px;\n    font-family: 'Bree Serif', var(--system-ui);\n    padding: 10px 25px;\n}\n\n.nav-home-list-item > svg,\n.nav-proj-list-item > svg {\n    height: 50px;\n}\n\n.notes-wrapper {\n    grid-row: 1 / 3;\n    grid-column: 2 / 3;\n    background-color: white;\n}\n\n.container-header-wrapper {\n    padding: 20px;\n    background-color: rgb(24, 136, 170);\n    color: white;\n}\n\n.form-container {\n    font-size: 1.5rem;\n    background-color: rgb(255, 255, 255);\n    display: grid;\n    grid-template-columns: 2fr 2fr;\n    grid-template-rows: 120px 200px 200px 100px;\n    width: 50%\n}\n\n#form-legend {\n    color: white;\n    font-size: 3rem;\n    font-family: \"Bree Serif\", var(--system-ui);\n    letter-spacing: 3px;\n    background-color: black;\n    grid-column: 1 / 3;\n    padding: 25px;\n\n}\n\ntextarea,\ninput[type=\"text\"] {\n    font-size: 1.2rem;\n    border: 0;\n    border-bottom: 2px solid black;\n    padding: 0;\n    outline: none;\n    width: 100%;\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\ninput[type=\"datetime-local\"]::-webkit-inner-spin-button,\ninput[type=\"datetime-local\"]::-webkit-calendar-picker-indicator {\n    display: none;\n    -webkit-appearance: none;\n    font-size: 1.2rem;\n    border: 0;\n    border-bottom: 2px solid black;\n    outline: none;\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\ninput::placeholder {\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\n.form-row-2 {\n    display: flex;\n    flex-direction: column;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    padding: 20px;\n    gap: 50px;\n}\n\n.form-row-3 {\n    display: flex;\n    flex-direction: column;\n    grid-row: 3 / 4;\n    grid-column: 1 / 3;\n    padding: 20px;\n    gap: 50px;\n}\n\n.form-row-4 {\n    display: flex;\n    flex-direction: column;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding: 20px;\n    gap: 50px;\n}\n\n.form-row-5 {\n    display: flex;\n    flex-direction: column;\n    grid-row: 4 / 5;\n    grid-column: 1 / 3;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n\nlabel {\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\n#label-2 {\n    padding: 0;\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\n#label-3 {\n    display: flex;\n    flex-direction: column;\n}\n\n#label-5 {\n    display: flex;\n    flex-direction: column;\n    height: 200px;\n}\n\n#add-task-form-btn {\n    width: 200px;\n    height: 60px;\n    border: 0;\n    outline: 0;\n    border-radius: 50px;\n    font-size: 1.5rem;\n    font-family: \"Bree Serif\", var(--system-ui);\n    color: white;\n    background-color: var(--main-color);\n    cursor: pointer;\n}\n\n#add-task-form-btn:hover {\n    background-color: rgb(17, 98, 122);\n}\n\n#form-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-self: center;\n\tposition: fixed;\n\tz-index: 1;\n\tpadding-top: 50px; /* Location of the box */\n \tleft: 0;\n \ttop: 0;\n \twidth: 100%; /* Full width */\n  \theight: 100%; /* Full height */\n  \toverflow: auto; /* Enable scroll if needed */\n  \tbackground-color: rgb(0,0,0); /* Fallback color */\n  \tbackground-color: rgba(0,0,0,0.6); /* Black w/ opacity */\n}\n\n.footer-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    bottom: 0;\n    width: max(200px, 100%);\n    font-size: 1rem;\n    font-family: 'Tilt Neon', var(--system-ui)\n}\n\n#github-logo {\n    height: 40px;\n    width: 40px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --system-ui: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --main-color: rgb(24, 136, 170);\n    background-color: #e9ecf0;\n}\n\n* {\n\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n.header-container {\n    margin: 0;\n    box-shadow: 0 4px 2px -2px gray;\n    width: 100%;\n    background-color: white;\n}\n\n.header-title-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 30px;\n    min-width: 640px\n}\n\n#header-title-text {\n    margin: 0;\n    font-size: 3rem;\n    font-family: 'Bree Serif', var(--system-ui);\n    letter-spacing: 4px;\n    font-weight: 700;\n}\n\n.header-title-wrapper > svg {\n    height: 100px;\n    cursor: pointer;\n    fill: rgba(0,0,0,0.8)\n}\n\n.header-title-wrapper > svg:hover {\n    fill: rgba(0,0,0,1)\n}\n\n.content-container {\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: minmax(250px, 1fr) minmax(250px, 1fr);\n    column-gap: 20px;\n}\n\n.home-nav-wrapper {\n    display: flex;\n    flex-direction: column;\n    grid-row: 1 / 2;\n    grid-column: 1 / 1;\n    background-color: white;\n    min-width: 250px\n}\n\n.proj-nav-wrapper {\n    display: flex;\n    flex-direction: column;\n    grid-row: 2 / 2;\n    grid-column: 1 / 1;\n    background-color: white;\n    min-width: 250px\n}\n\n.nav-home-list, \n.nav-proj-list {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#proj-title-text,\n#home-title-text {\n    background-color: rgb(24, 136, 170);\n    color: white;\n    font-family: 'Bree Serif', var(--system-ui);\n    margin: 0px;\n    padding: 20px;\n    letter-spacing: 3px;\n    font-size: 1.5rem\n}\n\n#container-header-text {\n    font-family: 'Bree Serif', var(--system-ui);\n    margin: 0px;\n    letter-spacing: 3px;\n}\n\n\n.nav-home-list > li,\n.nav-proj-list > li {\n  font-size:  1.5rem;\n}\n\n.nav-home-list > li:hover,\n.nav-proj-list > li:hover {\n    background-color: black;\n    color: white;\n    fill: white\n}\n\n.nav-home-list-item {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n    cursor: pointer;\n    gap: 10px;\n    font-family: 'Bree Serif', var(--system-ui);\n    padding: 10px 25px;\n}\n\n.nav-proj-list-item {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n    cursor: pointer;\n    gap: 10px;\n    font-family: 'Bree Serif', var(--system-ui);\n    padding: 10px 25px;\n}\n\n.nav-home-list-item > svg,\n.nav-proj-list-item > svg {\n    height: 50px;\n}\n\n.notes-wrapper {\n    grid-row: 1 / 3;\n    grid-column: 2 / 3;\n    background-color: white;\n}\n\n.container-header-wrapper {\n    padding: 20px;\n    background-color: rgb(24, 136, 170);\n    color: white;\n}\n\n.form-container {\n    font-size: 1.5rem;\n    background-color: rgb(255, 255, 255);\n    display: grid;\n    grid-template-columns: 2fr 2fr;\n    grid-template-rows: 120px 200px 200px 100px;\n    width: 50%\n}\n\n#form-legend {\n    color: white;\n    font-size: 3rem;\n    font-family: \"Bree Serif\", var(--system-ui);\n    letter-spacing: 3px;\n    background-color: black;\n    grid-column: 1 / 3;\n    padding: 25px;\n\n}\n\ntextarea,\ninput[type=\"text\"] {\n    font-size: 1.2rem;\n    border: 0;\n    border-bottom: 2px solid black;\n    padding: 0;\n    outline: none;\n    width: 100%;\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\ninput[type=\"datetime-local\"]::-webkit-inner-spin-button,\ninput[type=\"datetime-local\"]::-webkit-calendar-picker-indicator {\n    display: none;\n    -webkit-appearance: none;\n    font-size: 1.2rem;\n    border: 0;\n    border-bottom: 2px solid black;\n    outline: none;\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\ninput::placeholder {\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\n.form-row-2 {\n    display: flex;\n    flex-direction: column;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    padding: 20px;\n    gap: 50px;\n}\n\n.form-row-3 {\n    display: flex;\n    flex-direction: column;\n    grid-row: 3 / 4;\n    grid-column: 1 / 3;\n    padding: 20px;\n    gap: 50px;\n}\n\n.form-row-4 {\n    display: flex;\n    flex-direction: column;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding: 20px;\n    gap: 50px;\n}\n\n.form-row-5 {\n    display: flex;\n    flex-direction: column;\n    grid-row: 4 / 5;\n    grid-column: 1 / 3;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n\nlabel {\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\n#label-2 {\n    padding: 0;\n    font-family: 'Bree Serif', var(--system-ui);\n}\n\n#label-3 {\n    display: flex;\n    flex-direction: column;\n}\n\n#label-5 {\n    display: flex;\n    flex-direction: column;\n    height: 200px;\n}\n\n#add-task-form-btn {\n    width: 200px;\n    height: 60px;\n    border: 0;\n    outline: 0;\n    border-radius: 50px;\n    font-size: 1.5rem;\n    font-family: \"Bree Serif\", var(--system-ui);\n    color: white;\n    background-color: var(--main-color);\n    cursor: pointer;\n}\n\n#add-task-form-btn:hover {\n    background-color: rgb(17, 98, 122);\n}\n\n#form-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-self: center;\n\tposition: fixed;\n\tz-index: 1;\n\tpadding-top: 50px; /* Location of the box */\n \tleft: 0;\n \ttop: 0;\n \twidth: 100%; /* Full width */\n  \theight: 100%; /* Full height */\n  \toverflow: auto; /* Enable scroll if needed */\n  \tbackground-color: rgb(0,0,0); /* Fallback color */\n  \tbackground-color: rgba(0,0,0,0.6); /* Black w/ opacity */\n}\n\n.footer-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    bottom: 0;\n    width: max(200px, 100%);\n    font-size: 1rem;\n    font-family: 'Tilt Neon', var(--system-ui)\n}\n\n#github-logo {\n    height: 40px;\n    width: 40px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections.js */ "./src/sections.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_sections_js__WEBPACK_IMPORTED_MODULE_0__["default"])()


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

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxV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QUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHlFQUE0QixtQkFBbUIsdUVBQTBCO0FBQzNFLEVBQUUseUVBQTRCLGVBQWUsdUVBQTBCO0FBQ3ZFO0FBQ0EsRUFBRSwrRUFBa0M7QUFDcEMsRUFBRSxzRUFBeUIsWUFBWSx1RUFBMEI7QUFDakU7QUFDQSxFQUFFLHNFQUF5QixhQUFhLHVFQUEwQjtBQUNsRTtBQUNBO0FBQ0EsRUFBRSxzRUFBeUIsYUFBYSx1RUFBMEI7QUFDbEU7QUFDQTs7QUFFQSxFQUFFLHlFQUE0QixlQUFlLHVFQUEwQjtBQUN2RTtBQUNBLEVBQUUsK0VBQWtDO0FBQ3BDLEVBQUUsc0VBQXlCLFlBQVksdUVBQTBCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHlFQUE0QixtQkFBbUIsdUVBQTBCO0FBQzNFLEVBQUUseUVBQTRCLGVBQWUsdUVBQTBCO0FBQ3ZFLEVBQUUsK0VBQWtDO0FBQ3BDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEp3Qzs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrRUFBZ0I7QUFDbEI7O0FBRThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2RvbV9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2xvY2FsX3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3Rhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXN5c3RlbS11aTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0tbWFpbi1jb2xvcjogcmdiKDI0LCAxMzYsIDE3MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZjA7XFxufVxcblxcbioge1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXItdGl0bGUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICBtaW4td2lkdGg6IDY0MHB4XFxufVxcblxcbiNoZWFkZXItdGl0bGUtdGV4dCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCB2YXIoLS1zeXN0ZW0tdWkpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlLXdyYXBwZXIgPiBzdmcge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbGw6IHJnYmEoMCwwLDAsMC44KVxcbn1cXG5cXG4uaGVhZGVyLXRpdGxlLXdyYXBwZXIgPiBzdmc6aG92ZXIge1xcbiAgICBmaWxsOiByZ2JhKDAsMCwwLDEpXFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMjUwcHgsIDFmcikgbWlubWF4KDI1MHB4LCAxZnIpO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaG9tZS1uYXYtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLXdpZHRoOiAyNTBweFxcbn1cXG5cXG4ucHJvai1uYXYtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAyIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLXdpZHRoOiAyNTBweFxcbn1cXG5cXG4ubmF2LWhvbWUtbGlzdCwgXFxuLm5hdi1wcm9qLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qLXRpdGxlLXRleHQsXFxuI2hvbWUtdGl0bGUtdGV4dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTM2LCAxNzApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHZhcigtLXN5c3RlbS11aSk7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbVxcbn1cXG5cXG4jY29udGFpbmVyLWhlYWRlci10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmVlIFNlcmlmJywgdmFyKC0tc3lzdGVtLXVpKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxufVxcblxcblxcbi5uYXYtaG9tZS1saXN0ID4gbGksXFxuLm5hdi1wcm9qLWxpc3QgPiBsaSB7XFxuICBmb250LXNpemU6ICAxLjVyZW07XFxufVxcblxcbi5uYXYtaG9tZS1saXN0ID4gbGk6aG92ZXIsXFxuLm5hdi1wcm9qLWxpc3QgPiBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZpbGw6IHdoaXRlXFxufVxcblxcbi5uYXYtaG9tZS1saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCB2YXIoLS1zeXN0ZW0tdWkpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxufVxcblxcbi5uYXYtcHJvai1saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCB2YXIoLS1zeXN0ZW0tdWkpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxufVxcblxcbi5uYXYtaG9tZS1saXN0LWl0ZW0gPiBzdmcsXFxuLm5hdi1wcm9qLWxpc3QtaXRlbSA+IHN2ZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm5vdGVzLXdyYXBwZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXItaGVhZGVyLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDEzNiwgMTcwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMjAwcHggMjAwcHggMTAwcHg7XFxuICAgIHdpZHRoOiA1MCVcXG59XFxuXFxuI2Zvcm0tbGVnZW5kIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQnJlZSBTZXJpZlxcXCIsIHZhcigtLXN5c3RlbS11aSk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuXFxufVxcblxcbnRleHRhcmVhLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHZhcigtLXN5c3RlbS11aSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHZhcigtLXN5c3RlbS11aSk7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHZhcigtLXN5c3RlbS11aSk7XFxufVxcblxcbi5mb3JtLXJvdy0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLmZvcm0tcm93LTMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZm9ybS1yb3ctNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5mb3JtLXJvdy01IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmVlIFNlcmlmJywgdmFyKC0tc3lzdGVtLXVpKTtcXG59XFxuXFxuI2xhYmVsLTIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCB2YXIoLS1zeXN0ZW0tdWkpO1xcbn1cXG5cXG4jbGFiZWwtMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNsYWJlbC01IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2FkZC10YXNrLWZvcm0tYnRuIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQnJlZSBTZXJpZlxcXCIsIHZhcigtLXN5c3RlbS11aSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrLWZvcm0tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCA5OCwgMTIyKTtcXG59XFxuXFxuI2Zvcm0td3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0cGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gXFx0bGVmdDogMDtcXG4gXFx0dG9wOiAwO1xcbiBcXHR3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgXFx0b3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogbWF4KDIwMHB4LCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIHZhcigtLXN5c3RlbS11aSlcXG59XFxuXFxuI2dpdGh1Yi1sb2dvIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1KQUFtSjtJQUNuSiwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIseURBQXlEO0lBQ3pELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJ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QUFFLGdCQUFnQjtHQUM5QixjQUFjLEVBQUUsNEJBQTRCO0dBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtHQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDM0Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXN5c3RlbS11aTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0tbWFpbi1jb2xvcjogcmdiKDI0LCAxMzYsIDE3MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZjA7XFxufVxcblxcbioge1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXItdGl0bGUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICBtaW4td2lkdGg6IDY0MHB4XFxufVxcblxcbiNoZWFkZXItdGl0bGUtdGV4dCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCB2YXIoLS1zeXN0ZW0tdWkpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlLXdyYXBwZXIgPiBzdmcge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbGw6IHJnYmEoMCwwLDAsMC44KVxcbn1cXG5cXG4uaGVhZGVyLXRpdGxlLXdyYXBwZXIgPiBzdmc6aG92ZXIge1xcbiAgICBmaWxsOiByZ2JhKDAsMCwwLDEpXFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMjUwcHgsIDFmcikgbWlubWF4KDI1MHB4LCAxZnIpO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaG9tZS1uYXYtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLXdpZHRoOiAyNTBweFxcbn1cXG5cXG4ucHJvai1uYXYtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAyIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLXdpZHRoOiAyNTBweFxcbn1cXG5cXG4ubmF2LWhvbWUtbGlzdCwgXFxuLm5hdi1wcm9qLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qLXRpdGxlLXRleHQsXFxuI2hvbWUtdGl0bGUtdGV4dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTM2LCAxNzApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHZhcigtLXN5c3RlbS11aSk7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbVxcbn1cXG5cXG4jY29udGFpbmVyLWhlYWRlci10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmVlIFNlcmlmJywgdmFyKC0tc3lzdGVtLXVpKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxufVxcblxcblxcbi5uYXYtaG9tZS1saXN0ID4gbGksXFxuLm5hdi1wcm9qLWxpc3QgPiBsaSB7XFxuICBmb250LXNpemU6ICAxLjVyZW07XFxufVxcblxcbi5uYXYtaG9tZS1saXN0ID4gbGk6aG92ZXIsXFxuLm5hdi1wcm9qLWxpc3QgPiBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZpbGw6IHdoaXRlXFxufVxcblxcbi5uYXYtaG9tZS1saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCB2YXIoLS1zeXN0ZW0tdWkpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxufVxcblxcbi5uYXYtcHJvai1saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCB2YXIoLS1zeXN0ZW0tdWkpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxufVxcblxcbi5uYXYtaG9tZS1saXN0LWl0ZW0gPiBzdmcsXFxuLm5hdi1wcm9qLWxpc3QtaXRlbSA+IHN2ZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm5vdGVzLXdyYXBwZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXItaGVhZGVyLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDEzNiwgMTcwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMjAwcHggMjAwcHggMTAwcHg7XFxuICAgIHdpZHRoOiA1MCVcXG59XFxuXFxuI2Zvcm0tbGVnZW5kIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQnJlZSBTZXJpZlxcXCIsIHZhcigtLXN5c3RlbS11aSk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuXFxufVxcblxcbnRleHRhcmVhLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHZhcigtLXN5c3RlbS11aSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHZhcigtLXN5c3RlbS11aSk7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHZhcigtLXN5c3RlbS11aSk7XFxufVxcblxcbi5mb3JtLXJvdy0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLmZvcm0tcm93LTMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZm9ybS1yb3ctNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5mb3JtLXJvdy01IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmVlIFNlcmlmJywgdmFyKC0tc3lzdGVtLXVpKTtcXG59XFxuXFxuI2xhYmVsLTIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCB2YXIoLS1zeXN0ZW0tdWkpO1xcbn1cXG5cXG4jbGFiZWwtMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNsYWJlbC01IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2FkZC10YXNrLWZvcm0tYnRuIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQnJlZSBTZXJpZlxcXCIsIHZhcigtLXN5c3RlbS11aSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrLWZvcm0tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCA5OCwgMTIyKTtcXG59XFxuXFxuI2Zvcm0td3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0cGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gXFx0bGVmdDogMDtcXG4gXFx0dG9wOiAwO1xcbiBcXHR3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgXFx0b3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogbWF4KDIwMHB4LCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIHZhcigtLXN5c3RlbS11aSlcXG59XFxuXFxuI2dpdGh1Yi1sb2dvIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IERPTUluZmVyZmFjZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGluc2VydFRvQnlJZCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYCR7cGFyZW50fWApXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICBjb25zdCBpbnNlcnRUb0J5Q2xhc3MgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke3BhcmVudH1gKVxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gIH1cbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IChuYW1lLCBjbGFzc25hbWUsIGlkbmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke25hbWV9YClcbiAgICBpZiAoY2xhc3NuYW1lICE9PSAnJykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc25hbWUpIH1cbiAgICBpZiAoaWRuYW1lICE9PSAnJykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZG5hbWUpIH1cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG4gIGNvbnN0IGNyZWF0ZUltZ0J5SWQgPSAobmFtZSwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSlcbiAgICBlbGVtZW50LnNyYyA9IHNyY1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbiAgY29uc3QgY3JlYXRlSW1nQnlDbGFzcyA9IChuYW1lLCBzcmMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuYW1lKVxuICAgIGVsZW1lbnQuc3JjID0gc3JjXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuICBjb25zdCBpbnNlcnRIdG1sQnlDbGFzcyA9IChuYW1lLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IGluc2VydFRleHRDb250ZW50QnlJZCA9IChuYW1lLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYCR7bmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IHJlbW92ZUJ5Q2xhc3MgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke25hbWV9YClcbiAgICBlbGVtZW50LnJlbW92ZSgpXG4gIH1cbiAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudCwgaW5zZXJ0VG9CeUlkLCBpbnNlcnRUb0J5Q2xhc3MsIGluc2VydEh0bWxCeUNsYXNzLCByZW1vdmVCeUNsYXNzLCBjcmVhdGVJbWdCeUlkLCBjcmVhdGVJbWdCeUNsYXNzLCBpbnNlcnRUZXh0Q29udGVudEJ5SWQgfVxufSkoKVxuXG5leHBvcnQgeyBET01JbmZlcmZhY2UgYXMgZGVmYXVsdCB9XG4iLCJpbXBvcnQgbG9hZFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMuanMnXG5pbXBvcnQgbWFrZU5vdGUgZnJvbSAnLi90YXNrcy5qcydcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmxvYWRTZWN0aW9ucygpXG4iLCJjb25zdCBTdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0Tm90ZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICB9XG4gIGNvbnN0IG1ha2VOb3RlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgfVxuICBjb25zdCBkZWxldGVOb3RlID0gKGtleSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgfVxuXG4gIHJldHVybiB7IGdldE5vdGUsIG1ha2VOb3RlLCBkZWxldGVOb3RlIH1cbn0pKClcblxuZXhwb3J0IHsgU3RvcmFnZSBhcyBkZWZhdWx0IH1cbiIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9kb21faW50ZXJmYWNlLmpzJ1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSAnLi9hc3NldHMvZ2l0aHVibG9nby5wbmcnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL2xvY2FsX3N0b3JhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTZWN0aW9ucyAoKSB7XG4gIGNvbnN0IHByb2plY3RzID0geyBwcm9qXzA6ICdOb25lJyB9XG4gIGNvbnN0IGhlYWRlclRleHQgPSAnVG9kbzovLydcbiAgY29uc3QgaW1wb3J0Rm9udCA9ICc8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIj4gPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4+IDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsa2F0cmEmZmFtaWx5PUJyZWUrU2VyaWYmZmFtaWx5PVRpbHQrTmVvbiZmYW1pbHk9WWF0cmErT25lJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj4nXG4gIGNvbnN0IGZvb3RlclRleHQgPSAnwqkgJyArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArICcgY29mZmVlZGV2ciB8ICdcbiAgY29uc3QgYWRkUHJvalRleHQgPSAnQWRkIGEgUHJvamVjdCdcbiAgY29uc3QgYWRkUHJvakltZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnRhYi1wbHVzPC90aXRsZT48cGF0aCBkPVwiTTMsM0EyLDIgMCAwLDAgMSw1VjE5QTIsMiAwIDAsMCAzLDIxSDIxQTIsMiAwIDAsMCAyMywxOVY1QTIsMiAwIDAsMCAyMSwzSDNNMyw1SDEzVjlIMjFWMTlIM1Y1TTEwLDEwVjEzSDdWMTVIMTBWMThIMTJWMTVIMTVWMTNIMTJWMTBIMTBaXCIgLz48L3N2Zz4nXG4gIGNvbnN0IGFkZE5vdGUgPSAnPHN2ZyBpZD1cImFkZC10YXNrLWJ0blwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnBsdXMtY2lyY2xlPC90aXRsZT48cGF0aCBkPVwiTTE3LDEzSDEzVjE3SDExVjEzSDdWMTFIMTFWN0gxM1YxMUgxN00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPidcblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpIHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKSB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5pbm5lckhUTUwgKz0gaW1wb3J0Rm9udFxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFkZXItY29udGFpbmVyJywgJycpKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGVudC1jb250YWluZXInLCAnJykpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb290ZXItY29udGFpbmVyJywgJycpKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2hlYWRlci1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hlYWRlci10aXRsZS13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdoZWFkZXItdGl0bGUtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdoMScsICcnLCAnaGVhZGVyLXRpdGxlLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnaGVhZGVyLXRpdGxlLXRleHQnLCBoZWFkZXJUZXh0KVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXRpdGxlLXdyYXBwZXInKS5pbm5lckhUTUwgKz0gYWRkTm90ZVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBZGRGb3JtKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2Zvb3Rlci1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgncCcsICcnLCAnZm9vdGVyLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnZm9vdGVyLXRleHQnLCBmb290ZXJUZXh0KVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb290ZXItY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUltZ0J5SWQoJ2dpdGh1Yi1sb2dvJywgR2l0SHViTG9nbykpXG5cbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnY29udGVudC1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hvbWUtbmF2LXdyYXBwZXInLCAnJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2NvbnRlbnQtY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwcm9qLW5hdi13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdob21lLW5hdi13cmFwcGVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdob21lLW5hdicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnaG9tZS1uYXYnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnaDEnLCAnJywgJ2hvbWUtdGl0bGUtdGV4dCcpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdob21lLW5hdicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCd1bCcsICduYXYtaG9tZS1saXN0JywgJycpKVxuICBnZW5lcmF0ZUhvbWVMaXN0KClcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygncHJvai1uYXYtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAncHJvai1uYXYnLCAnJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ3Byb2otbmF2JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2gxJywgJycsICdwcm9qLXRpdGxlLXRleHQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygncHJvai1uYXYnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgndWwnLCAnbmF2LXByb2otbGlzdCcsICcnKSlcbiAgaWYgKE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKS5sZW5ndGggPiAxKSB7IGdlbmVyYXRlUHJvakxpc3QoKSB9XG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2hvbWUtdGl0bGUtdGV4dCcsICdIb21lJylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgncHJvai10aXRsZS10ZXh0JywgJ1Byb2plY3RzJylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnbmF2LXByb2otbGlzdCcsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdsaScsICduYXYtcHJvai1saXN0LWl0ZW0nLCAnYWRkLXByb2onKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnYWRkLXByb2onLCBhZGRQcm9qVGV4dClcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qJykuaW5uZXJIVE1MICs9IGFkZFByb2pJbWdcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdjb250ZW50LWNvbnRhaW5lcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbm90ZXMtd3JhcHBlcicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnbm90ZXMtd3JhcHBlcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGFpbmVyLWhlYWRlci13cmFwcGVyJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdjb250YWluZXItaGVhZGVyLXdyYXBwZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJ2NvbnRhaW5lci1oZWFkZXItdGV4dCcpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VGV4dENvbnRlbnRCeUlkKCdjb250YWluZXItaGVhZGVyLXRleHQnLCAnQWxsIFRhc2tzJylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lTGlzdCAoKSB7XG4gIGNvbnN0IGhvbWVJdGVtcyA9IFsnVGFza3MnLCAnVG9kYXknLCAnVXJnZW50J11cbiAgY29uc3QgaW1nbGlua3MgPSBbJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2xpcGJvYXJkLWxpc3Qtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xOSAzSDE0LjgyQzE0LjQgMS44NCAxMy4zIDEgMTIgMVM5LjYgMS44NCA5LjE4IDNINUMzLjkgMyAzIDMuOSAzIDVWMTlDMyAyMC4xIDMuOSAyMSA1IDIxSDE5QzIwLjEgMjEgMjEgMjAuMSAyMSAxOVY1QzIxIDMuOSAyMC4xIDMgMTkgM00xMiAzQzEyLjU1IDMgMTMgMy40NSAxMyA0UzEyLjU1IDUgMTIgNSAxMSA0LjU1IDExIDQgMTEuNDUgMyAxMiAzTTcgN0gxN1Y1SDE5VjE5SDVWNUg3VjdNMTIgMTdWMTVIMTdWMTdIMTJNMTIgMTFWOUgxN1YxMUgxMk04IDEyVjlIN1Y4SDlWMTJIOE05LjI1IDE0QzkuNjYgMTQgMTAgMTQuMzQgMTAgMTQuNzVDMTAgMTQuOTUgOS45MiAxNS4xNCA5Ljc5IDE1LjI3TDguMTIgMTdIMTBWMThIN1YxNy4wOEw5IDE1SDdWMTRIOS4yNVwiIC8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1hY2NvdW50LW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTkgM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuOSAzIDMgMy45IDMgNVYxOUMzIDIwLjExIDMuOSAyMSA1IDIxSDE5QzIwLjExIDIxIDIxIDIwLjExIDIxIDE5VjVDMjEgMy45IDIwLjExIDMgMTkgM00xOSAxOUg1VjlIMTlWMTlNMTkgN0g1VjVIMTlNMTIgMTBDMTQgMTAgMTUgMTIuNDIgMTMuNTkgMTMuODRDMTIuMTcgMTUuMjYgOS43NSAxNC4yNSA5Ljc1IDEyLjI1QzkuNzUgMTEgMTAuNzUgMTAgMTIgMTBNMTYuNSAxNy44OFYxOEg3LjVWMTcuODhDNy41IDE2LjYzIDkuNSAxNS42MyAxMiAxNS42M1MxNi41IDE2LjYzIDE2LjUgMTcuODhaXCIgLz48L3N2Zz4nLFxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnN0YXItb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiwxNS4zOUw4LjI0LDE3LjY2TDkuMjMsMTMuMzhMNS45MSwxMC41TDEwLjI5LDEwLjEzTDEyLDYuMDlMMTMuNzEsMTAuMTNMMTguMDksMTAuNUwxNC43NywxMy4zOEwxNS43NiwxNy42Nk0yMiw5LjI0TDE0LjgxLDguNjNMMTIsMkw5LjE5LDguNjNMMiw5LjI0TDcuNDUsMTMuOTdMNS44MiwyMUwxMiwxNy4yN0wxOC4xOCwyMUwxNi41NCwxMy45N0wyMiw5LjI0WlwiIC8+PC9zdmc+J11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvbWVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ25hdi1ob21lLWxpc3QnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnbGknLCAnbmF2LWhvbWUtbGlzdC1pdGVtJywgJ2hvbWUtaXRlbS0nICsgKGkgKyAxKSkpXG4gICAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnaG9tZS1pdGVtLScgKyAoaSArIDEpLCBob21lSXRlbXNbaV0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtaXRlbS0nICsgKGkgKyAxKSkuaW5uZXJIVE1MICs9IGltZ2xpbmtzW2ldXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qTGlzdCAoKSB7XG4gIGNvbnN0IHByb2pMaXN0ID0gT2JqZWN0LnZhbHVlcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSlcbiAgY29uc3QgcHJvak51bSA9IE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKS5sZW5ndGhcbiAgY29uc29sZS5sb2cocHJvakxpc3QpXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qTnVtOyBpKyspIHtcbiAgICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCduYXYtcHJvai1saXN0JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xpJywgJ25hdi1wcm9qLWxpc3QtaXRlbScsICdwcm9qLWl0ZW0tJyArIChpICsgMSkpKVxuICAgIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ3Byb2otaXRlbS0nICsgKGkgKyAxKSwgcHJvakxpc3RbaV0pXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FkZEZvcm0gKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJ2Zvcm0td3JhcHBlcicpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdmb3JtLXdyYXBwZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnZm9ybScsICdmb3JtLWNvbnRhaW5lcicsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnZm9ybS1jb250YWluZXInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnbGVnZW5kJywgJ2Zvcm0tcm93LTEnLCAnZm9ybS1sZWdlbmQnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnZm9ybS1sZWdlbmQnLCAnQWRkIFRhc2s6Ly8nKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2Zvcm0tY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb3JtLXJvdy0yJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLXJvdy0yJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgJycsICdsYWJlbC0xJykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbC0xJykuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VGV4dENvbnRlbnRCeUlkKCdsYWJlbC0xJywgJ1RpdGxlOicpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5SWQoJ2xhYmVsLTEnLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnZm9ybS1jb250cm9scycsICd0aXRsZScpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgdGl0bGUuLi4nKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2Zvcm0tcm93LTInLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCAnJywgJ2xhYmVsLTMnKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsLTMnKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnbGFiZWwtMycsICdEdWUgRGF0ZTonKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdsYWJlbC0zJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2Zvcm0tY29udHJvbHMnLCAnZHVlRGF0ZScpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRldGltZS1sb2NhbCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKVxuXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5Q2xhc3MoJ2Zvcm0tY29udGFpbmVyJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb3JtLXJvdy0zJywgJycpKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLXJvdy0zJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgJycsICdsYWJlbC0yJykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbC0yJykuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWwtMicpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnbGFiZWwtMicsICdEZXNjcmlwdGlvbjonKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdsYWJlbC0yJywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgJ2Zvcm0tY29udHJvbHMnLCAnZGVzY3JpcHRpb24nKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBkZXNjcmlwdGlvbi4uLicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnNldEF0dHJpYnV0ZSgncm93cycsICc1JylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykuc2V0QXR0cmlidXRlKCdjb2xzJywgJzIwJylcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLWNvbnRhaW5lcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZm9ybS1yb3ctNCcsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnZm9ybS1yb3ctNCcsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdsYWJlbCcsICcnLCAnbGFiZWwtNCcpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWwtNCcpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5JylcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRleHRDb250ZW50QnlJZCgnbGFiZWwtNCcsICdQcmlvcml0eTonKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdsYWJlbC00JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsICdmb3JtLWNvbnRyb2xzJywgJ3ByaW9yaXR5JykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUb0J5SWQoJ3ByaW9yaXR5JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnb3B0aW9uLTEnKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbi0xJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdOb25lJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbi0xJykudGV4dENvbnRlbnQgPSAnTm9uZSdcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlJZCgncHJpb3JpdHknLCBET01JbnRlcmZhY2UuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgJycsICdwcmlvLW9wdGlvbi0yJykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvLW9wdGlvbi0yJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdVcmdlbnQnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpby1vcHRpb24tMicpLnRleHRDb250ZW50ID0gJ1VyZ2VudCdcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLXJvdy00JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgJycsICdsYWJlbC01JykpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbC01Jykuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdCcpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2xhYmVsLTUnLCAnUHJvamVjdDonKVxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUlkKCdsYWJlbC01JywgRE9NSW50ZXJmYWNlLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2Zvcm0tY29udHJvbHMnLCAncHJvamVjdCcpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jykuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBwcm9qZWN0Li4uJylcblxuICBET01JbnRlcmZhY2UuaW5zZXJ0VG9CeUNsYXNzKCdmb3JtLWNvbnRhaW5lcicsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZm9ybS1yb3ctNScsICcnKSlcbiAgRE9NSW50ZXJmYWNlLmluc2VydFRvQnlDbGFzcygnZm9ybS1yb3ctNScsIERPTUludGVyZmFjZS5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnJywgJ2FkZC10YXNrLWZvcm0tYnRuJykpXG4gIERPTUludGVyZmFjZS5pbnNlcnRUZXh0Q29udGVudEJ5SWQoJ2FkZC10YXNrLWZvcm0tYnRuJywgJ0FkZCBUYXNrJylcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnQgKCkge1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrcyAoKSB7fVxuZnVuY3Rpb24gbG9hZFRvZGF5ICgpIHt9XG5mdW5jdGlvbiBsb2FkVXJnZW50ICgpIHt9XG5mdW5jdGlvbiBsb2FkUHJvamVjdHMgKCkge31cbiIsImltcG9ydCBTdG9yYWdlIGZyb20gJy4vbG9jYWxfc3RvcmFnZS5qcydcblxuY29uc3Qgbm90ZUNvdW50ID0gbG9jYWxTdG9yYWdlLmxlbmd0aFxuXG5jb25zdCBOb3RlcyA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBzdGF0dXMpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlXG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gIHRoaXMuc3RhdHVzID0gc3RhdHVzXG59XG5cbmZ1bmN0aW9uIG1ha2VOb3RlICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBzdGF0dXMpIHtcbiAgY29uc3Qgbm90ZSA9IG5ldyBOb3Rlcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBzdGF0dXMpXG4gIFN0b3JhZ2UubWFrZU5vdGUoJ25vdGUtJyArIG5vdGVDb3VudCwgbm90ZSlcbn1cblxuZXhwb3J0IHsgbWFrZU5vdGUgYXMgZGVmYXVsdCB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=