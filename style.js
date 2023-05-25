!function(e){var s={};function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,s,t){n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,s){if(1&s&&(e=n(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)n.d(t,r,function(s){return e[s]}.bind(null,r));return t},n.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="",n(n.s=0)}({"./classic2023/blink-src/js/cke_styles.js":
/*!************************************************!*\
  !*** ./classic2023/blink-src/js/cke_styles.js ***!
  \************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n*   Array con la definición de los estilos para el editor de CKEditor\r\n*/\nconst ckeStyles = [{\n  name: 'Caja 1',\n  type: 'widget',\n  widget: 'blink_box',\n  attributes: {\n    'class': 'box-1'\n  }\n}, {\n  name: 'Caja 2',\n  type: 'widget',\n  widget: 'blink_box',\n  attributes: {\n    'class': 'box-2'\n  }\n}, {\n  name: 'Énfasis',\n  element: 'span',\n  attributes: {\n    'class': 'bck-enfasis'\n  }\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ckeStyles);\n\n//# sourceURL=webpack:///./classic2023/blink-src/js/cke_styles.js?")},"./classic2023/blink-src/js/main.js":
/*!******************************************!*\
  !*** ./classic2023/blink-src/js/main.js ***!
  \******************************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cke_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cke_styles */ "./classic2023/blink-src/js/cke_styles.js");\n/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overrides */ "./classic2023/blink-src/js/overrides.js");\n/*\r\n*   Javascript principal con la estructura básica del estilo\r\n*/\n\n\n\n(function (blink) {\n  \'use strict\';\n\n  var Classic2023Style = function () {\n    blink.theme.styles["classic"].apply(this, arguments);\n  };\n\n  Classic2023Style.prototype = {\n    parent: blink.theme.styles["classic"].prototype,\n    bodyClassName: \'content_type_clase_classic2023\',\n    extraPlugins: [\'image2\'],\n    ckEditorStyles: {\n      name: \'classic2023\',\n      styles: _cke_styles__WEBPACK_IMPORTED_MODULE_0__["default"]\n    },\n    init: function () {\n      // Heredo de otro estilo\n      this.parent.init.call(this.parent, this);\n      this.removeFinalSlide();\n    },\n    ..._overrides__WEBPACK_IMPORTED_MODULE_1__["default"]\n  };\n  Classic2023Style.prototype = _.extend({}, new blink.theme.styles["classic"](), Classic2023Style.prototype);\n  blink.theme.styles[\'classic2023\'] = Classic2023Style;\n})(blink);\n\n//# sourceURL=webpack:///./classic2023/blink-src/js/main.js?')},"./classic2023/blink-src/js/overrides.js":
/*!***********************************************!*\
  !*** ./classic2023/blink-src/js/overrides.js ***!
  \***********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/*\r\n*   Javascript donde están las funciones que sobreescriben a funciones de Basic\r\n*/\nconst overrides = {\n  removeFinalSlide: t => {\n    let thisStyle = blink.activity.currentStyle;\n    thisStyle.parent.removeFinalSlide.call(thisStyle.parent, thisStyle, true);\n  }\n};\n/* harmony default export */ __webpack_exports__["default"] = (overrides);\n\n//# sourceURL=webpack:///./classic2023/blink-src/js/overrides.js?')},"./classic2023/blink-src/styles/main.scss":
/*!************************************************!*\
  !*** ./classic2023/blink-src/styles/main.scss ***!
  \************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./classic2023/blink-src/styles/main.scss?")},0:
/*!*****************************************************************************************!*\
  !*** multi ./classic2023/blink-src/js/main.js ./classic2023/blink-src/styles/main.scss ***!
  \*****************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! D:\\workspaces\\web\\blinkweb\\blink\\www\\themes\\responsive\\assets\\styles\\classic2023\\blink-src\\js\\main.js */"./classic2023/blink-src/js/main.js");\nmodule.exports = __webpack_require__(/*! D:\\workspaces\\web\\blinkweb\\blink\\www\\themes\\responsive\\assets\\styles\\classic2023\\blink-src\\styles\\main.scss */"./classic2023/blink-src/styles/main.scss");\n\n\n//# sourceURL=webpack:///multi_./classic2023/blink-src/js/main.js_./classic2023/blink-src/styles/main.scss?')}});