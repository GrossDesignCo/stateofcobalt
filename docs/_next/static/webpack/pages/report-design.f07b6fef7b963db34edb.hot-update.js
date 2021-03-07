webpackHotUpdate_N_E("pages/report-design",{

/***/ "./src/components/fig-cobalt-production-by-country.jsx":
/*!*************************************************************!*\
  !*** ./src/components/fig-cobalt-production-by-country.jsx ***!
  \*************************************************************/
/*! exports provided: FigCobaltProductionByCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FigCobaltProductionByCountry\", function() { return FigCobaltProductionByCountry; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_magross_Documents_Repos_Nonwork_stateofcobalt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _utils_number_to_sigfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/number-to-sigfig */ \"./src/utils/number-to-sigfig.js\");\n/* harmony import */ var _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/cobalt-production-by-year.json */ \"./public/cobalt-production-by-year.json\");\nvar _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/cobalt-production-by-year.json */ \"./public/cobalt-production-by-year.json\", 1);\n\n\n\n\nvar _jsxFileName = \"/Users/magross/Documents/Repos-Nonwork/stateofcobalt/src/components/fig-cobalt-production-by-country.jsx\",\n    _this = undefined;\n\n\n\nvar FigCobaltProductionByCountry = function FigCobaltProductionByCountry() {\n  // TODO: Filter list to top 5 cobalt producers\n  // Add remaining countries to \"Other\"\n  var highlightedCountries = [\"Australia\", \"Canada\", \"China\", \"Congo (Kinshasa)\", \"Russia\", \"Philippines\"];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"table-wrapper\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"caption\", {\n        children: [\"Mine Production by Country (in tons).\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/cobalt-production-by-year.json\",\n          \"class\": \"link secondary\",\n          children: \"View raw data\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Country\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this), _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__.years.map(function (year) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: year\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [Object.entries(_public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__[\"per-country\"]).map(function (_ref) {\n          var _ref2 = Object(_Users_magross_Documents_Repos_Nonwork_stateofcobalt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n              key = _ref2[0],\n              data = _ref2[1];\n\n          if (highlightedCountries.includes(key)) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: key\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 19\n              }, _this), data.map(function (item, i) {\n                var percent = item / _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__.world[i] * 100;\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                  children: item ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      children: Object(_utils_number_to_sigfig__WEBPACK_IMPORTED_MODULE_2__[\"trimNumber\"])(item)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 46,\n                      columnNumber: 29\n                    }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      \"class\": \"accent small\",\n                      children: [\"(\", percent.toFixed(0), \"%)\"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 47,\n                      columnNumber: 29\n                    }, _this)]\n                  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    \"class\": \"accent\",\n                    children: \"\\u2014\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 27\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 23\n                }, _this);\n              })]\n            }, key, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 17\n            }, _this);\n          } else {\n            return null;\n          }\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          \"class\": \"total\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"World\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this), _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__.world.map(function (item) {\n            var _trimNumber;\n\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: (_trimNumber = Object(_utils_number_to_sigfig__WEBPACK_IMPORTED_MODULE_2__[\"trimNumber\"])(item)) !== null && _trimNumber !== void 0 ? _trimNumber : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                \"class\": \"accent\",\n                children: \"\\u2014\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 40\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n_c = FigCobaltProductionByCountry;\n\nvar _c;\n\n$RefreshReg$(_c, \"FigCobaltProductionByCountry\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlnLWNvYmFsdC1wcm9kdWN0aW9uLWJ5LWNvdW50cnkuanN4PzM4MTciXSwibmFtZXMiOlsiRmlnQ29iYWx0UHJvZHVjdGlvbkJ5Q291bnRyeSIsImhpZ2hsaWdodGVkQ291bnRyaWVzIiwicHJvZHVjdGlvbkRhdGEiLCJ5ZWFycyIsIm1hcCIsInllYXIiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwiZGF0YSIsImluY2x1ZGVzIiwiaXRlbSIsImkiLCJwZXJjZW50Iiwid29ybGQiLCJ0cmltTnVtYmVyIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBK0IsR0FBTTtBQUNoRDtBQUNBO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsQ0FDM0IsV0FEMkIsRUFFM0IsUUFGMkIsRUFHM0IsT0FIMkIsRUFJM0Isa0JBSjJCLEVBSzNCLFFBTDJCLEVBTTNCLGFBTjJCLENBQTdCO0FBU0Esc0JBQ0U7QUFBSyxhQUFNLGVBQVg7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUEsNERBQ3dDLEdBRHhDLGVBRUU7QUFBRyxjQUFJLEVBQUMsaUNBQVI7QUFBMEMsbUJBQU0sZ0JBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0U7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdDLG1FQUFjLENBQUNDLEtBQWYsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQ7QUFBQSxnQ0FDeEI7QUFBQSx3QkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR3QjtBQUFBLFdBQXpCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBZUU7QUFBQSxtQkFDR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVMLG1FQUFjLENBQUMsYUFBRCxDQUE3QixFQUE4Q0UsR0FBOUMsQ0FBa0QsZ0JBQWlCO0FBQUE7QUFBQSxjQUFmSSxHQUFlO0FBQUEsY0FBVkMsSUFBVTs7QUFDbEUsY0FBSVIsb0JBQW9CLENBQUNTLFFBQXJCLENBQThCRixHQUE5QixDQUFKLEVBQXdDO0FBQ3RDLGdDQUNFO0FBQUEsc0NBQ0U7QUFBQSwwQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUdDLElBQUksQ0FBQ0wsR0FBTCxDQUFTLFVBQUNPLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3JCLG9CQUFNQyxPQUFPLEdBQUlGLElBQUksR0FBR1QsbUVBQWMsQ0FBQ1ksS0FBZixDQUFxQkYsQ0FBckIsQ0FBUixHQUFtQyxHQUFuRDtBQUVBLG9DQUNFO0FBQUEsNEJBQ0dELElBQUksZ0JBQ0g7QUFBQSw0Q0FDRTtBQUFBLGdDQUFPSSwwRUFBVSxDQUFDSixJQUFEO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFDa0MsR0FEbEMsZUFFRTtBQUFNLCtCQUFNLGNBQVo7QUFBQSxzQ0FDSUUsT0FBTyxDQUFDRyxPQUFSLENBQWdCLENBQWhCLENBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUEsa0NBREcsZ0JBUUg7QUFBTSw2QkFBTSxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQWNELGVBakJBLENBRkg7QUFBQSxlQUFTUixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUF1QkQsV0F4QkQsTUF3Qk87QUFDTCxtQkFBTyxJQUFQO0FBQ0Q7QUFDRixTQTVCQSxDQURILGVBOEJFO0FBQUksbUJBQU0sT0FBVjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdOLG1FQUFjLENBQUNZLEtBQWYsQ0FBcUJWLEdBQXJCLENBQXlCLFVBQUNPLElBQUQ7QUFBQTs7QUFBQSxnQ0FDeEI7QUFBQSx1Q0FBS0ksMEVBQVUsQ0FBQ0osSUFBRCxDQUFmLGtFQUF5QjtBQUFNLHlCQUFNLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEd0I7QUFBQSxXQUF6QixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeURELENBckVNO0tBQU1YLDRCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZmlnLWNvYmFsdC1wcm9kdWN0aW9uLWJ5LWNvdW50cnkuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJpbU51bWJlciB9IGZyb20gXCIuLi91dGlscy9udW1iZXItdG8tc2lnZmlnXCI7XG5pbXBvcnQgcHJvZHVjdGlvbkRhdGEgZnJvbSBcIi4uLy4uL3B1YmxpYy9jb2JhbHQtcHJvZHVjdGlvbi1ieS15ZWFyLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IEZpZ0NvYmFsdFByb2R1Y3Rpb25CeUNvdW50cnkgPSAoKSA9PiB7XG4gIC8vIFRPRE86IEZpbHRlciBsaXN0IHRvIHRvcCA1IGNvYmFsdCBwcm9kdWNlcnNcbiAgLy8gQWRkIHJlbWFpbmluZyBjb3VudHJpZXMgdG8gXCJPdGhlclwiXG4gIGNvbnN0IGhpZ2hsaWdodGVkQ291bnRyaWVzID0gW1xuICAgIFwiQXVzdHJhbGlhXCIsXG4gICAgXCJDYW5hZGFcIixcbiAgICBcIkNoaW5hXCIsXG4gICAgXCJDb25nbyAoS2luc2hhc2EpXCIsXG4gICAgXCJSdXNzaWFcIixcbiAgICBcIlBoaWxpcHBpbmVzXCIsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwidGFibGUtd3JhcHBlclwiPlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8Y2FwdGlvbj5cbiAgICAgICAgICBNaW5lIFByb2R1Y3Rpb24gYnkgQ291bnRyeSAoaW4gdG9ucykue1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCIvY29iYWx0LXByb2R1Y3Rpb24tYnkteWVhci5qc29uXCIgY2xhc3M9XCJsaW5rIHNlY29uZGFyeVwiPlxuICAgICAgICAgICAgVmlldyByYXcgZGF0YVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9jYXB0aW9uPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkNvdW50cnk8L3RoPlxuICAgICAgICAgICAge3Byb2R1Y3Rpb25EYXRhLnllYXJzLm1hcCgoeWVhcikgPT4gKFxuICAgICAgICAgICAgICA8dGg+e3llYXJ9PC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMocHJvZHVjdGlvbkRhdGFbXCJwZXItY291bnRyeVwiXSkubWFwKChba2V5LCBkYXRhXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodGVkQ291bnRyaWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgPHRkPntrZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gKGl0ZW0gLyBwcm9kdWN0aW9uRGF0YS53b3JsZFtpXSkgKiAxMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dHJpbU51bWJlcihpdGVtKX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjZW50IHNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe3BlcmNlbnQudG9GaXhlZCgwKX0lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjY2VudFwiPuKAlDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3RhbFwiPlxuICAgICAgICAgICAgPHRkPldvcmxkPC90ZD5cbiAgICAgICAgICAgIHtwcm9kdWN0aW9uRGF0YS53b3JsZC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPHRkPnt0cmltTnVtYmVyKGl0ZW0pID8/IDxzcGFuIGNsYXNzPVwiYWNjZW50XCI+4oCUPC9zcGFuPn08L3RkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/fig-cobalt-production-by-country.jsx\n");

/***/ })

})