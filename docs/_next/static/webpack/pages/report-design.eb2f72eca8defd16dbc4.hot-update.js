webpackHotUpdate_N_E("pages/report-design",{

/***/ "./src/components/fig-cobalt-production-by-country.jsx":
/*!*************************************************************!*\
  !*** ./src/components/fig-cobalt-production-by-country.jsx ***!
  \*************************************************************/
/*! exports provided: FigCobaltProductionByCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FigCobaltProductionByCountry\", function() { return FigCobaltProductionByCountry; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_magross_Documents_Repos_Nonwork_stateofcobalt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _utils_number_to_sigfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/number-to-sigfig */ \"./src/utils/number-to-sigfig.js\");\n/* harmony import */ var _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/cobalt-production-by-year.json */ \"./public/cobalt-production-by-year.json\");\nvar _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/cobalt-production-by-year.json */ \"./public/cobalt-production-by-year.json\", 1);\n\n\n\n\nvar _jsxFileName = \"/Users/magross/Documents/Repos-Nonwork/stateofcobalt/src/components/fig-cobalt-production-by-country.jsx\",\n    _this = undefined;\n\n\n\nvar FigCobaltProductionByCountry = function FigCobaltProductionByCountry() {\n  // TODO: Filter list to top 5 cobalt producers\n  // Add remaining countries to \"Other\"\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"table-wrapper\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"caption\", {\n        children: [\"Mine Production by Country (tons).\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/cobalt-production-by-year.json\",\n          \"class\": \"link secondary\",\n          children: \"View raw data\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Country\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, _this), _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__.years.map(function (year) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: year\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [Object.entries(_public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__[\"per-country\"]).map(function (_ref) {\n          var _ref2 = Object(_Users_magross_Documents_Repos_Nonwork_stateofcobalt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n              key = _ref2[0],\n              data = _ref2[1];\n\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: key\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 17\n            }, _this), data.map(function (item, i) {\n              var percent = item / _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__.world[i] * 100;\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: item ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    children: Object(_utils_number_to_sigfig__WEBPACK_IMPORTED_MODULE_2__[\"trimNumber\"])(item)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 37,\n                    columnNumber: 27\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    \"class\": \"accent small\",\n                    children: [percent.toFixed(2), \"%\"]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 38,\n                    columnNumber: 27\n                  }, _this)]\n                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  \"class\": \"accent\",\n                  children: \"\\u2014\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 21\n              }, _this);\n            })]\n          }, key, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          \"class\": \"total\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"World\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), _public_cobalt_production_by_year_json__WEBPACK_IMPORTED_MODULE_3__.world.map(function (item) {\n            var _trimNumber;\n\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: (_trimNumber = Object(_utils_number_to_sigfig__WEBPACK_IMPORTED_MODULE_2__[\"trimNumber\"])(item)) !== null && _trimNumber !== void 0 ? _trimNumber : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                \"class\": \"accent\",\n                children: \"\\u2014\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 40\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n_c = FigCobaltProductionByCountry;\n\nvar _c;\n\n$RefreshReg$(_c, \"FigCobaltProductionByCountry\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlnLWNvYmFsdC1wcm9kdWN0aW9uLWJ5LWNvdW50cnkuanN4PzM4MTciXSwibmFtZXMiOlsiRmlnQ29iYWx0UHJvZHVjdGlvbkJ5Q291bnRyeSIsInByb2R1Y3Rpb25EYXRhIiwieWVhcnMiLCJtYXAiLCJ5ZWFyIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsImRhdGEiLCJpdGVtIiwiaSIsInBlcmNlbnQiLCJ3b3JsZCIsInRyaW1OdW1iZXIiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixHQUFNO0FBQ2hEO0FBQ0E7QUFFQSxzQkFDRTtBQUFLLGFBQU0sZUFBWDtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBQSx5REFDcUMsR0FEckMsZUFFRTtBQUFHLGNBQUksRUFBQyxpQ0FBUjtBQUEwQyxtQkFBTSxnQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRTtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR0MsbUVBQWMsQ0FBQ0MsS0FBZixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsSUFBRDtBQUFBLGdDQUN4QjtBQUFBLHdCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHdCO0FBQUEsV0FBekIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFlRTtBQUFBLG1CQUNHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUwsbUVBQWMsQ0FBQyxhQUFELENBQTdCLEVBQThDRSxHQUE5QyxDQUFrRCxnQkFBaUI7QUFBQTtBQUFBLGNBQWZJLEdBQWU7QUFBQSxjQUFWQyxJQUFVOztBQUNsRSw4QkFDRTtBQUFBLG9DQUNFO0FBQUEsd0JBQUtEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHQyxJQUFJLENBQUNMLEdBQUwsQ0FBUyxVQUFDTSxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNyQixrQkFBTUMsT0FBTyxHQUFJRixJQUFJLEdBQUdSLG1FQUFjLENBQUNXLEtBQWYsQ0FBcUJGLENBQXJCLENBQVIsR0FBbUMsR0FBbkQ7QUFFQSxrQ0FDRTtBQUFBLDBCQUNHRCxJQUFJLGdCQUNIO0FBQUEsMENBQ0U7QUFBQSw4QkFBT0ksMEVBQVUsQ0FBQ0osSUFBRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBTSw2QkFBTSxjQUFaO0FBQUEsK0JBQ0dFLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixDQUFoQixDQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBLGdDQURHLGdCQVFIO0FBQU0sMkJBQU0sUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFjRCxhQWpCQSxDQUZIO0FBQUEsYUFBU1AsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBdUJELFNBeEJBLENBREgsZUEwQkU7QUFBSSxtQkFBTSxPQUFWO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR04sbUVBQWMsQ0FBQ1csS0FBZixDQUFxQlQsR0FBckIsQ0FBeUIsVUFBQ00sSUFBRDtBQUFBOztBQUFBLGdDQUN4QjtBQUFBLHVDQUFLSSwwRUFBVSxDQUFDSixJQUFELENBQWYsa0VBQXlCO0FBQU0seUJBQU0sUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR3QjtBQUFBLFdBQXpCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxREQsQ0F6RE07S0FBTVQsNEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9maWctY29iYWx0LXByb2R1Y3Rpb24tYnktY291bnRyeS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmltTnVtYmVyIH0gZnJvbSBcIi4uL3V0aWxzL251bWJlci10by1zaWdmaWdcIjtcbmltcG9ydCBwcm9kdWN0aW9uRGF0YSBmcm9tIFwiLi4vLi4vcHVibGljL2NvYmFsdC1wcm9kdWN0aW9uLWJ5LXllYXIuanNvblwiO1xuXG5leHBvcnQgY29uc3QgRmlnQ29iYWx0UHJvZHVjdGlvbkJ5Q291bnRyeSA9ICgpID0+IHtcbiAgLy8gVE9ETzogRmlsdGVyIGxpc3QgdG8gdG9wIDUgY29iYWx0IHByb2R1Y2Vyc1xuICAvLyBBZGQgcmVtYWluaW5nIGNvdW50cmllcyB0byBcIk90aGVyXCJcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDxjYXB0aW9uPlxuICAgICAgICAgIE1pbmUgUHJvZHVjdGlvbiBieSBDb3VudHJ5ICh0b25zKS57XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb2JhbHQtcHJvZHVjdGlvbi1ieS15ZWFyLmpzb25cIiBjbGFzcz1cImxpbmsgc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBWaWV3IHJhdyBkYXRhXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2NhcHRpb24+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q291bnRyeTwvdGg+XG4gICAgICAgICAgICB7cHJvZHVjdGlvbkRhdGEueWVhcnMubWFwKCh5ZWFyKSA9PiAoXG4gICAgICAgICAgICAgIDx0aD57eWVhcn08L3RoPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhwcm9kdWN0aW9uRGF0YVtcInBlci1jb3VudHJ5XCJdKS5tYXAoKFtrZXksIGRhdGFdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gKGl0ZW0gLyBwcm9kdWN0aW9uRGF0YS53b3JsZFtpXSkgKiAxMDA7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0cmltTnVtYmVyKGl0ZW0pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY2NlbnQgc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVyY2VudC50b0ZpeGVkKDIpfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjZW50XCI+4oCUPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3RhbFwiPlxuICAgICAgICAgICAgPHRkPldvcmxkPC90ZD5cbiAgICAgICAgICAgIHtwcm9kdWN0aW9uRGF0YS53b3JsZC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPHRkPnt0cmltTnVtYmVyKGl0ZW0pID8/IDxzcGFuIGNsYXNzPVwiYWNjZW50XCI+4oCUPC9zcGFuPn08L3RkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/fig-cobalt-production-by-country.jsx\n");

/***/ })

})