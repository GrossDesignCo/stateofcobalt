webpackHotUpdate_N_E("pages/report-design",{

/***/ "./src/utils/number-to-sigfig.js":
/*!***************************************!*\
  !*** ./src/utils/number-to-sigfig.js ***!
  \***************************************/
/*! exports provided: trimNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trimNumber\", function() { return trimNumber; });\nvar trimNumber = function trimNumber(number) {\n  if (number) {\n    return new Intl.NumberFormat(\"en-US\", {\n      maximumSignificantDigits: 3,\n      notation: \"compact\"\n    }).format(number).toLocaleLowerCase();\n  } else {\n    return null;\n  }\n\n  return number ? new Intl.NumberFormat(\"en-US\", {\n    maximumSignificantDigits: 3,\n    notation: \"compact\"\n  }).format(number).toLocaleLowerCase() : null;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL251bWJlci10by1zaWdmaWcuanM/ZWRkYiJdLCJuYW1lcyI6WyJ0cmltTnVtYmVyIiwibnVtYmVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1heGltdW1TaWduaWZpY2FudERpZ2l0cyIsIm5vdGF0aW9uIiwiZm9ybWF0IiwidG9Mb2NhbGVMb3dlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDcEMsTUFBSUEsTUFBSixFQUFZO0FBQ1YsV0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLDhCQUF3QixFQUFFLENBRFU7QUFFcENDLGNBQVEsRUFBRTtBQUYwQixLQUEvQixFQUlKQyxNQUpJLENBSUdMLE1BSkgsRUFLSk0saUJBTEksRUFBUDtBQU1ELEdBUEQsTUFPTztBQUNMLFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQU9OLE1BQU0sR0FDVCxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDN0JDLDRCQUF3QixFQUFFLENBREc7QUFFN0JDLFlBQVEsRUFBRTtBQUZtQixHQUEvQixFQUlHQyxNQUpILENBSVVMLE1BSlYsRUFLR00saUJBTEgsRUFEUyxHQU9ULElBUEo7QUFRRCxDQXBCTSIsImZpbGUiOiIuL3NyYy91dGlscy9udW1iZXItdG8tc2lnZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRyaW1OdW1iZXIgPSAobnVtYmVyKSA9PiB7XG4gIGlmIChudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiAzLFxuICAgICAgbm90YXRpb246IFwiY29tcGFjdFwiLFxuICAgIH0pXG4gICAgICAuZm9ybWF0KG51bWJlcilcbiAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlclxuICAgID8gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgICBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHM6IDMsXG4gICAgICAgIG5vdGF0aW9uOiBcImNvbXBhY3RcIixcbiAgICAgIH0pXG4gICAgICAgIC5mb3JtYXQobnVtYmVyKVxuICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgIDogbnVsbDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/number-to-sigfig.js\n");

/***/ })

})