webpackHotUpdate_N_E("pages/2021",{

/***/ "./src/pages/2021/fig-cobalt-production-by-country.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/2021/fig-cobalt-production-by-country.jsx ***!
  \*************************************************************/
/*! exports provided: FigCobaltProductionByCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FigCobaltProductionByCountry\", function() { return FigCobaltProductionByCountry; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_magross_Documents_Repos_Nonwork_stateofcobalt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_trim_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/trim-number */ \"./src/utils/trim-number.js\");\n/* harmony import */ var _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/cobalt-production-by-year.json */ \"./public/cobalt-production-by-year.json\");\nvar _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/cobalt-production-by-year.json */ \"./public/cobalt-production-by-year.json\", 1);\n\n\n\n\nvar _jsxFileName = \"/Users/magross/Documents/Repos-Nonwork/stateofcobalt/src/pages/2021/fig-cobalt-production-by-country.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar FigCobaltProductionByCountry = function FigCobaltProductionByCountry() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      expanded = _useState[0],\n      setExpanded = _useState[1]; // Controls which countries are shown by default\n\n\n  var highlightedCountries = [\"Congo (Kinshasa)\", \"Russia\", \"China\", \"United States\"];\n  var countriesList = expanded ? Object.entries(_public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_4__.perCountry) // returns [key, value] for each key on the object\n  : highlightedCountries.map(function (key) {\n    return [key, _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_4__.perCountry[key]];\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"table-wrapper\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"caption\", {\n        children: [\"Mine Production by Country (in tons).\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setExpanded(!expanded);\n          },\n          \"class\": \"button secondary\",\n          children: expanded ? \"Collapse List\" : \"Expand List\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/cobalt-production-by-year.json\",\n          target: \"_blank\",\n          \"class\": \"button secondary\",\n          children: \"View raw data (json file)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Country\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this), _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_4__.years.map(function (year) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: year\n            }, year, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [countriesList.map(function (_ref) {\n          var _ref2 = Object(_Users_magross_Documents_Repos_Nonwork_stateofcobalt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n              key = _ref2[0],\n              data = _ref2[1];\n\n          if (expanded || highlightedCountries.includes(key)) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: key\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 19\n              }, _this), data.map(function (item, i) {\n                var percent = item / _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_4__.world[i] * 100;\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                  children: item ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      children: Object(_utils_trim_number__WEBPACK_IMPORTED_MODULE_3__[\"trimNumber\"])(item)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 62,\n                      columnNumber: 29\n                    }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      \"class\": \"accent small\",\n                      children: [\"(\", percent.toFixed(0), \"%)\"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 63,\n                      columnNumber: 29\n                    }, _this)]\n                  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    \"class\": \"accent\",\n                    children: \"\\u2014\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 27\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 23\n                }, _this);\n              })]\n            }, key, true, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 17\n            }, _this);\n          } else {\n            return null;\n          }\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          \"class\": \"total\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"World\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this), _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_4__.world.map(function (item) {\n            var _trimNumber;\n\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: (_trimNumber = Object(_utils_trim_number__WEBPACK_IMPORTED_MODULE_3__[\"trimNumber\"])(item)) !== null && _trimNumber !== void 0 ? _trimNumber : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                \"class\": \"accent\",\n                children: \"\\u2014\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 38\n              }, _this)\n            }, item, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FigCobaltProductionByCountry, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n\n_c = FigCobaltProductionByCountry;\n\nvar _c;\n\n$RefreshReg$(_c, \"FigCobaltProductionByCountry\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzLzIwMjEvZmlnLWNvYmFsdC1wcm9kdWN0aW9uLWJ5LWNvdW50cnkuanN4PzlkMGMiXSwibmFtZXMiOlsiRmlnQ29iYWx0UHJvZHVjdGlvbkJ5Q291bnRyeSIsInVzZVN0YXRlIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImhpZ2hsaWdodGVkQ291bnRyaWVzIiwiY291bnRyaWVzTGlzdCIsIk9iamVjdCIsImVudHJpZXMiLCJwcm9kdWN0aW9uRGF0YSIsInBlckNvdW50cnkiLCJtYXAiLCJrZXkiLCJ5ZWFycyIsInllYXIiLCJkYXRhIiwiaW5jbHVkZXMiLCJpdGVtIiwiaSIsInBlcmNlbnQiLCJ3b3JsZCIsInRyaW1OdW1iZXIiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLEdBQU07QUFBQTs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsS0FBRCxDQURRO0FBQUEsTUFDekNDLFFBRHlDO0FBQUEsTUFDL0JDLFdBRCtCLGlCQUdoRDs7O0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsQ0FDM0Isa0JBRDJCLEVBRTNCLFFBRjJCLEVBRzNCLE9BSDJCLEVBSTNCLGVBSjJCLENBQTdCO0FBT0EsTUFBTUMsYUFBYSxHQUFHSCxRQUFRLEdBQzFCSSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsbUVBQWMsQ0FBQ0MsVUFBOUIsQ0FEMEIsQ0FDZ0I7QUFEaEIsSUFFMUJMLG9CQUFvQixDQUFDTSxHQUFyQixDQUF5QixVQUFDQyxHQUFEO0FBQUEsV0FBUyxDQUFDQSxHQUFELEVBQU1ILG1FQUFjLENBQUNDLFVBQWYsQ0FBMEJFLEdBQTFCLENBQU4sQ0FBVDtBQUFBLEdBQXpCLENBRko7QUFJQSxzQkFDRTtBQUFLLGFBQU0sZUFBWDtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBQSw0REFDd0MsR0FEeEMsZUFF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b2R1Y3Rpb24tYnktY291bnRyeS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHJpbU51bWJlciB9IGZyb20gXCIuLi8uLi91dGlscy90cmltLW51bWJlclwiO1xuaW1wb3J0IHByb2R1Y3Rpb25EYXRhIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvY29iYWx0LXByb2R1Y3Rpb24tYnkteWVhci5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBGaWdDb2JhbHRQcm9kdWN0aW9uQnlDb3VudHJ5ID0gKCkgPT4ge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBDb250cm9scyB3aGljaCBjb3VudHJpZXMgYXJlIHNob3duIGJ5IGRlZmF1bHRcbiAgY29uc3QgaGlnaGxpZ2h0ZWRDb3VudHJpZXMgPSBbXG4gICAgXCJDb25nbyAoS2luc2hhc2EpXCIsXG4gICAgXCJSdXNzaWFcIixcbiAgICBcIkNoaW5hXCIsXG4gICAgXCJVbml0ZWQgU3RhdGVzXCIsXG4gIF07XG5cbiAgY29uc3QgY291bnRyaWVzTGlzdCA9IGV4cGFuZGVkXG4gICAgPyBPYmplY3QuZW50cmllcyhwcm9kdWN0aW9uRGF0YS5wZXJDb3VudHJ5KSAvLyByZXR1cm5zIFtrZXksIHZhbHVlXSBmb3IgZWFjaCBrZXkgb24gdGhlIG9iamVjdFxuICAgIDogaGlnaGxpZ2h0ZWRDb3VudHJpZXMubWFwKChrZXkpID0+IFtrZXksIHByb2R1Y3Rpb25EYXRhLnBlckNvdW50cnlba2V5XV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPGNhcHRpb24+XG4gICAgICAgICAgTWluZSBQcm9kdWN0aW9uIGJ5IENvdW50cnkgKGluIHRvbnMpLntcIiBcIn1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gc2Vjb25kYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZXhwYW5kZWQgPyBcIkNvbGxhcHNlIExpc3RcIiA6IFwiRXhwYW5kIExpc3RcIn1cbiAgICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIvY29iYWx0LXByb2R1Y3Rpb24tYnkteWVhci5qc29uXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgcmF3IGRhdGEgKGpzb24gZmlsZSlcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvY2FwdGlvbj5cblxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkNvdW50cnk8L3RoPlxuICAgICAgICAgICAge3Byb2R1Y3Rpb25EYXRhLnllYXJzLm1hcCgoeWVhcikgPT4gKFxuICAgICAgICAgICAgICA8dGgga2V5PXt5ZWFyfT57eWVhcn08L3RoPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2NvdW50cmllc0xpc3QubWFwKChba2V5LCBkYXRhXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkIHx8IGhpZ2hsaWdodGVkQ291bnRyaWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgPHRkPntrZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gKGl0ZW0gLyBwcm9kdWN0aW9uRGF0YS53b3JsZFtpXSkgKiAxMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dHJpbU51bWJlcihpdGVtKX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjZW50IHNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe3BlcmNlbnQudG9GaXhlZCgwKX0lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjY2VudFwiPuKAlDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cblxuICAgICAgICAgIDx0ciBjbGFzcz1cInRvdGFsXCI+XG4gICAgICAgICAgICA8dGQ+V29ybGQ8L3RkPlxuICAgICAgICAgICAge3Byb2R1Y3Rpb25EYXRhLndvcmxkLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8dGQga2V5PXtpdGVtfT5cbiAgICAgICAgICAgICAgICB7dHJpbU51bWJlcihpdGVtKSA/PyA8c3BhbiBjbGFzcz1cImFjY2VudFwiPuKAlDwvc3Bhbj59XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/2021/fig-cobalt-production-by-country.jsx\n");

/***/ })

})