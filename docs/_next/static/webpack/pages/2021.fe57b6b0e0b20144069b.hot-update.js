/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/2021",{

/***/ "./src/pages/2021/fig-cobalt-reserves-per-country.jsx":
/*!************************************************************!*\
  !*** ./src/pages/2021/fig-cobalt-reserves-per-country.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FigCobaltReservesByCountry; }\n/* harmony export */ });\n/* harmony import */ var _Users_magross_Documents_Repos_Nonwork_stateofcobalt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_trim_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/trim-number */ \"./src/utils/trim-number.js\");\n/* harmony import */ var _public_cobalt_reserves_per_country_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/cobalt-reserves-per-country.json */ \"./public/cobalt-reserves-per-country.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/magross/Documents/Repos-Nonwork/stateofcobalt/src/pages/2021/fig-cobalt-reserves-per-country.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction FigCobaltReservesByCountry() {\n  _s();\n\n  var _this = this;\n\n  var perCountry = _public_cobalt_reserves_per_country_json__WEBPACK_IMPORTED_MODULE_4__.perCountry,\n      world = _public_cobalt_reserves_per_country_json__WEBPACK_IMPORTED_MODULE_4__.world;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      expanded = _useState[0],\n      setExpanded = _useState[1];\n\n  var highlightedCountries = [\"Congo (Kinshasa)\", \"Australia\", \"Russia\", \"China\", \"United States\"];\n  var countriesList = expanded ? Object.entries(perCountry) : highlightedCountries.map(function (key) {\n    return [key, perCountry[key]];\n  });\n  console.log(_public_cobalt_reserves_per_country_json__WEBPACK_IMPORTED_MODULE_4__);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    \"class\": \"table-wrapper\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"caption\", {\n        children: [\"Reserves per Country (in tons)\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return setExpanded(!expanded);\n          },\n          \"class\": \"button secondary\",\n          children: expanded ? \"Collapse List\" : \"Expand List\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n          href: \"/cobalt-reserves-per-country.json\",\n          target: \"_blank\",\n          \"class\": \"button secondary\",\n          children: \"View raw data (json file)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            children: \"Country\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            children: \"Known Reserves\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            children: \"Estimated?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n        children: [countriesList.map(function (_ref) {\n          var _ref2 = (0,_Users_magross_Documents_Repos_Nonwork_stateofcobalt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),\n              country = _ref2[0],\n              value = _ref2[1];\n\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n              scope: \"row\",\n              children: country\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: (0,_utils_trim_number__WEBPACK_IMPORTED_MODULE_3__.trimNumber)(value)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 17\n              }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                \"class\": \"accent small\",\n                children: [\"(\", (0,_utils_trim_number__WEBPACK_IMPORTED_MODULE_3__.trimNumber)((value / world).toFixed(3) * 100), \"%)\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n              children: \"?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n          \"class\": \"total\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            scope: \"row\",\n            children: \"World\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n            children: (0,_utils_trim_number__WEBPACK_IMPORTED_MODULE_3__.trimNumber)(world)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FigCobaltReservesByCountry, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n\n_c = FigCobaltReservesByCountry;\n\nvar _c;\n\n$RefreshReg$(_c, \"FigCobaltReservesByCountry\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzLzIwMjEvZmlnLWNvYmFsdC1yZXNlcnZlcy1wZXItY291bnRyeS5qc3g/YjM2ZSJdLCJuYW1lcyI6WyJGaWdDb2JhbHRSZXNlcnZlc0J5Q291bnRyeSIsInBlckNvdW50cnkiLCJyZXNlcnZlc0RhdGEiLCJ3b3JsZCIsInVzZVN0YXRlIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImhpZ2hsaWdodGVkQ291bnRyaWVzIiwiY291bnRyaWVzTGlzdCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiY291bnRyeSIsInZhbHVlIiwidHJpbU51bWJlciIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLDBCQUFULEdBQXNDO0FBQUE7O0FBQUE7O0FBQUEsTUFDM0NDLFVBRDJDLEdBQ3JCQyxnRkFEcUI7QUFBQSxNQUMvQkMsS0FEK0IsR0FDckJELDJFQURxQjs7QUFBQSxrQkFFbkJFLCtDQUFRLENBQUMsS0FBRCxDQUZXO0FBQUEsTUFFNUNDLFFBRjRDO0FBQUEsTUFFbENDLFdBRmtDOztBQUluRCxNQUFNQyxvQkFBb0IsR0FBRyxDQUMzQixrQkFEMkIsRUFFM0IsV0FGMkIsRUFHM0IsUUFIMkIsRUFJM0IsT0FKMkIsRUFLM0IsZUFMMkIsQ0FBN0I7QUFRQSxNQUFNQyxhQUFhLEdBQUdILFFBQVEsR0FDMUJJLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVCxVQUFmLENBRDBCLEdBRTFCTSxvQkFBb0IsQ0FBQ0ksR0FBckIsQ0FBeUIsVUFBQ0MsR0FBRDtBQUFBLFdBQVMsQ0FBQ0EsR0FBRCxFQUFNWCxVQUFVLENBQUNXLEdBQUQsQ0FBaEIsQ0FBVDtBQUFBLEdBQXpCLENBRko7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlaLHFFQUFaO0FBRUEsc0JBQ0U7QUFBSyxhQUFNLGVBQVg7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUEscURBQ2lDLEdBRGpDLGVBRUU7QUFDRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1JLFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWpCO0FBQUEsV0FEWDtBQUVFLG1CQUFNLGtCQUZSO0FBQUEsb0JBSUdBLFFBQVEsR0FBRyxlQUFILEdBQXFCO0FBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFPWSxHQVBaLGVBUUU7QUFDRSxjQUFJLEVBQUMsbUNBRFA7QUFFRSxnQkFBTSxFQUFDLFFBRlQ7QUFHRSxtQkFBTSxrQkFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWtCRTtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsZUEwQkU7QUFBQSxtQkFDR0csYUFBYSxDQUFDRyxHQUFkLENBQWtCO0FBQUE7QUFBQSxjQUFFSSxPQUFGO0FBQUEsY0FBV0MsS0FBWDs7QUFBQSw4QkFDakI7QUFBQSxvQ0FDRTtBQUFJLG1CQUFLLEVBQUMsS0FBVjtBQUFBLHdCQUFpQkQ7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsc0NBQ0U7QUFBQSwwQkFBT0UsOERBQVUsQ0FBQ0QsS0FBRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBQ21DLEdBRG5DLGVBRUU7QUFBTSx5QkFBTSxjQUFaO0FBQUEsZ0NBQ0lDLDhEQUFVLENBQUMsQ0FBQ0QsS0FBSyxHQUFHYixLQUFULEVBQWdCZSxPQUFoQixDQUF3QixDQUF4QixJQUE2QixHQUE5QixDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGlCO0FBQUEsU0FBbEIsQ0FESCxlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFjRTtBQUFJLG1CQUFNLE9BQVY7QUFBQSxrQ0FDRTtBQUFJLGlCQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsc0JBQUtELDhEQUFVLENBQUNkLEtBQUQ7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0REOztHQXBFdUJILDBCOztLQUFBQSwwQiIsImZpbGUiOiIuL3NyYy9wYWdlcy8yMDIxL2ZpZy1jb2JhbHQtcmVzZXJ2ZXMtcGVyLWNvdW50cnkuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRyaW1OdW1iZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdHJpbS1udW1iZXJcIjtcbmltcG9ydCByZXNlcnZlc0RhdGEgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9jb2JhbHQtcmVzZXJ2ZXMtcGVyLWNvdW50cnkuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWdDb2JhbHRSZXNlcnZlc0J5Q291bnRyeSgpIHtcbiAgY29uc3QgeyBwZXJDb3VudHJ5LCB3b3JsZCB9ID0gcmVzZXJ2ZXNEYXRhO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoaWdobGlnaHRlZENvdW50cmllcyA9IFtcbiAgICBcIkNvbmdvIChLaW5zaGFzYSlcIixcbiAgICBcIkF1c3RyYWxpYVwiLFxuICAgIFwiUnVzc2lhXCIsXG4gICAgXCJDaGluYVwiLFxuICAgIFwiVW5pdGVkIFN0YXRlc1wiLFxuICBdO1xuXG4gIGNvbnN0IGNvdW50cmllc0xpc3QgPSBleHBhbmRlZFxuICAgID8gT2JqZWN0LmVudHJpZXMocGVyQ291bnRyeSlcbiAgICA6IGhpZ2hsaWdodGVkQ291bnRyaWVzLm1hcCgoa2V5KSA9PiBba2V5LCBwZXJDb3VudHJ5W2tleV1dKTtcblxuICBjb25zb2xlLmxvZyhyZXNlcnZlc0RhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPGNhcHRpb24+XG4gICAgICAgICAgUmVzZXJ2ZXMgcGVyIENvdW50cnkgKGluIHRvbnMpe1wiIFwifVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtleHBhbmRlZCA/IFwiQ29sbGFwc2UgTGlzdFwiIDogXCJFeHBhbmQgTGlzdFwifVxuICAgICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIi9jb2JhbHQtcmVzZXJ2ZXMtcGVyLWNvdW50cnkuanNvblwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gc2Vjb25kYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IHJhdyBkYXRhIChqc29uIGZpbGUpXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2NhcHRpb24+XG5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cbiAgICAgICAgICAgIDx0aD5Lbm93biBSZXNlcnZlczwvdGg+XG4gICAgICAgICAgICA8dGg+RXN0aW1hdGVkPzwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2NvdW50cmllc0xpc3QubWFwKChbY291bnRyeSwgdmFsdWVdKSA9PiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntjb3VudHJ5fTwvdGg+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dHJpbU51bWJlcih2YWx1ZSl9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjY2VudCBzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgKHt0cmltTnVtYmVyKCh2YWx1ZSAvIHdvcmxkKS50b0ZpeGVkKDMpICogMTAwKX0lKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPj88L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3RhbFwiPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+V29ybGQ8L3RoPlxuICAgICAgICAgICAgPHRkPnt0cmltTnVtYmVyKHdvcmxkKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/2021/fig-cobalt-reserves-per-country.jsx\n");

/***/ })

});