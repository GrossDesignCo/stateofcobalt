webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/global.css":
/*!*******************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./src/styles/global.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\n/* TODO: Revisit scrolling styles, test on mobile */\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  -ms-scroll-snap-type: y mandatory;\\n      scroll-snap-type: y mandatory;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\narticle {\\n  scroll-snap-align: start;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  -webkit-clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n          clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nhgroup {\\n  position: relative;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: clamp(2.827rem, 7vw, 5.653rem);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: clamp(1.999rem, 4.95vw, 3.998rem);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n}\\n\\na {\\n  color: var(--link-color);\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\n/* Tables */\\ntable {\\n  margin: 2rem 0;\\n  padding: 1rem 0;\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n}\\n\\nth,\\ntd {\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1rem;\\n\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/global.css\"],\"names\":[],\"mappings\":\"AAAA,aAAa;AACb;EACE,sBAAsB;EACtB,qCAAqC;EACrC,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA,mDAAmD;AACnD;;EAEE,eAAe;EACf,wBAAwB;EACxB,iCAAiC;EACjC,gBAAgB;EAChB,iCAA6B;MAA7B,6BAA6B;EAC7B,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,2EAAmE;UAAnE,mEAAmE;EACnE,iCAAiC;EACjC,eAAe;EACf,SAAS;EACT,QAAQ;EACR,oBAAoB;AACtB;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;;;;EAKE,qCAAqC;EACrC,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA,WAAW;AACX;EACE,cAAc;EACd,eAAe;EACf,yCAAyC;EACzC,4CAA4C;AAC9C;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,iBAAiB;;EAEjB,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT\",\"sourcesContent\":[\"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\n/* TODO: Revisit scrolling styles, test on mobile */\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-snap-type: y mandatory;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\narticle {\\n  scroll-snap-align: start;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nhgroup {\\n  position: relative;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: clamp(2.827rem, 7vw, 5.653rem);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: clamp(1.999rem, 4.95vw, 3.998rem);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n}\\n\\na {\\n  color: var(--link-color);\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\n/* Tables */\\ntable {\\n  margin: 2rem 0;\\n  padding: 1rem 0;\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n}\\n\\nth,\\ntd {\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1rem;\\n\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzPzg2MWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDa0c7QUFDbEcsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLHNCQUFzQiwyQkFBMkIsNENBQTRDLGNBQWMsZUFBZSxzQkFBc0IsR0FBRyx1RUFBdUUsb0JBQW9CLDZCQUE2QixzQ0FBc0MscUJBQXFCLHNDQUFzQyxzQ0FBc0MsNEJBQTRCLHNDQUFzQyxHQUFHLGFBQWEsNkJBQTZCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxZQUFZLGdGQUFnRixnRkFBZ0Ysc0NBQXNDLG9CQUFvQixjQUFjLGFBQWEseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyxZQUFZLHVCQUF1QixHQUFHLDRCQUE0Qiw0Q0FBNEMscUJBQXFCLG1CQUFtQix3QkFBd0IsZ0NBQWdDLEdBQUcsUUFBUSxrQkFBa0Isd0JBQXdCLDhDQUE4QyxHQUFHLFFBQVEsd0JBQXdCLGlEQUFpRCxHQUFHLFFBQVEsd0JBQXdCLEdBQUcsUUFBUSx3QkFBd0IsR0FBRyxRQUFRLHdCQUF3QixHQUFHLE9BQU8sNkJBQTZCLEdBQUcsU0FBUyw2QkFBNkIsNEJBQTRCLEdBQUcseUJBQXlCLG1CQUFtQixvQkFBb0IsOENBQThDLGlEQUFpRCxHQUFHLGFBQWEseUJBQXlCLEdBQUcscUNBQXFDLDRCQUE0QixHQUFHLG1DQUFtQywwQkFBMEIsR0FBRyxRQUFRLGdDQUFnQyxzQkFBc0IscUJBQXFCLEdBQUcsUUFBUSxnQ0FBZ0Msd0JBQXdCLHFCQUFxQixHQUFHLG9DQUFvQyxrQkFBa0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRCQUE0QixzQ0FBc0MsNkJBQTZCLEdBQUcsYUFBYSxtQ0FBbUMsdUJBQXVCLHVCQUF1QiwwQkFBMEIsR0FBRyxhQUFhLGtDQUFrQyx1QkFBdUIsdUJBQXVCLDBCQUEwQixHQUFHLGFBQWEsb0NBQW9DLHVCQUF1Qix1QkFBdUIsMEJBQTBCLEdBQUcsa0NBQWtDLHNCQUFzQix5QkFBeUIsY0FBYyxZQUFZLEdBQUcsU0FBUywyRkFBMkYsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxhQUFhLGFBQWEsV0FBVyxVQUFVLDRDQUE0QywyQkFBMkIsNENBQTRDLGNBQWMsZUFBZSxzQkFBc0IsR0FBRyx1RUFBdUUsb0JBQW9CLDZCQUE2QixzQ0FBc0MscUJBQXFCLGtDQUFrQyw0QkFBNEIsc0NBQXNDLEdBQUcsYUFBYSw2QkFBNkIsR0FBRyxhQUFhLDJCQUEyQixHQUFHLFlBQVksd0VBQXdFLHNDQUFzQyxvQkFBb0IsY0FBYyxhQUFhLHlCQUF5QixHQUFHLHlCQUF5Qix3QkFBd0Isb0JBQW9CLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyw0QkFBNEIsNENBQTRDLHFCQUFxQixtQkFBbUIsd0JBQXdCLGdDQUFnQyxHQUFHLFFBQVEsa0JBQWtCLHdCQUF3Qiw4Q0FBOEMsR0FBRyxRQUFRLHdCQUF3QixpREFBaUQsR0FBRyxRQUFRLHdCQUF3QixHQUFHLFFBQVEsd0JBQXdCLEdBQUcsUUFBUSx3QkFBd0IsR0FBRyxPQUFPLDZCQUE2QixHQUFHLFNBQVMsNkJBQTZCLDRCQUE0QixHQUFHLHlCQUF5QixtQkFBbUIsb0JBQW9CLDhDQUE4QyxpREFBaUQsR0FBRyxhQUFhLHlCQUF5QixHQUFHLHFDQUFxQyw0QkFBNEIsR0FBRyxtQ0FBbUMsMEJBQTBCLEdBQUcsUUFBUSxnQ0FBZ0Msc0JBQXNCLHFCQUFxQixHQUFHLFFBQVEsZ0NBQWdDLHdCQUF3QixxQkFBcUIsR0FBRyxvQ0FBb0Msa0JBQWtCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHVCQUF1Qiw0QkFBNEIsc0NBQXNDLDZCQUE2QixHQUFHLGFBQWEsbUNBQW1DLHVCQUF1Qix1QkFBdUIsMEJBQTBCLEdBQUcsYUFBYSxrQ0FBa0MsdUJBQXVCLHVCQUF1QiwwQkFBMEIsR0FBRyxhQUFhLG9DQUFvQyx1QkFBdUIsdUJBQXVCLDBCQUEwQixHQUFHLGtDQUFrQyxzQkFBc0IseUJBQXlCLGNBQWMsWUFBWSxHQUFHLHFCQUFxQjtBQUNuc047QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQmFzZWxpbmUgKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xcbn1cXG5cXG4vKiBUT0RPOiBSZXZpc2l0IHNjcm9sbGluZyBzdHlsZXMsIHRlc3Qgb24gbW9iaWxlICovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICAtbXMtc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxuICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAuNzVyZW0gMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwLjc1cmVtKTtcXG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAuNzVyZW0gMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwLjc1cmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbi8qIFR5cG9ncmFwaHkgKi9cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBtYXgtd2lkdGg6IDUwY2g7XFxufVxcblxcbmhncm91cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2hpcHBvcmkgTWluY2hvXFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiA1LjY1M3JlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi44MjdyZW0sIDd2dywgNS42NTNyZW0pO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDMuOTk4cmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjk5OXJlbSwgNC45NXZ3LCAzLjk5OHJlbSk7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMi44MjdyZW07XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS45OTlyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcbn1cXG5cXG5zdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxufVxcblxcbi8qIFRhYmxlcyAqL1xcbnRhYmxlIHtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxufVxcblxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG50aDpsYXN0LWNoaWxkLFxcbnRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xcbn1cXG5cXG50aCB7XFxuICBjb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbnRkIHtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuW2NsYXNzKj1cXFwiaGVyby1cXFwiXSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uaGVyby0xIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWNvYmFsdC1ibHVlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMiB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMyB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1tYW5nby1vcmFuZ2UpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBDb21wb25lbnRzICovXFxuLnBlcm1hbGluayB7XFxuICAtLWljb24tc2l6ZTogMXJlbTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFBYTtBQUNiO0VBQ0Usc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQSxtREFBbUQ7QUFDbkQ7O0VBRUUsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGlDQUE2QjtNQUE3Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJFQUFtRTtVQUFuRSxtRUFBbUU7RUFDbkUsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLG9CQUFvQjtBQUN0Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7RUFLRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlDQUF5QztFQUN6Qyw0Q0FBNEM7QUFDOUM7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsaUJBQWlCOztFQUVqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87QUFDVFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCYXNlbGluZSAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2hpcHBvcmkgTWluY2hvXFxcIiwgc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XFxufVxcblxcbi8qIFRPRE86IFJldmlzaXQgc2Nyb2xsaW5nIHN0eWxlcywgdGVzdCBvbiBtb2JpbGUgKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbmFydGljbGUge1xcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxufVxcblxcbmZvb3RlciB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMC43NXJlbSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAuNzVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLyogVHlwb2dyYXBoeSAqL1xcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuaGdyb3VwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXNpemU6IDUuNjUzcmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgyLjgyN3JlbSwgN3Z3LCA1LjY1M3JlbSk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMy45OThyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDEuOTk5cmVtLCA0Ljk1dncsIDMuOTk4cmVtKTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAyLjgyN3JlbTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjk5OXJlbTtcXG59XFxuXFxuaDUge1xcbiAgZm9udC1zaXplOiAxLjQxNHJlbTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxufVxcblxcbnN2ZyB7XFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXG59XFxuXFxuLyogVGFibGVzICovXFxudGFibGUge1xcbiAgbWFyZ2luOiAycmVtIDA7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG59XFxuXFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRoIHtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxudGQge1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjQxNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEhlcm8gKi9cXG5bY2xhc3MqPVxcXCJoZXJvLVxcXCJdIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5oZXJvLTEge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tY29iYWx0LWJsdWUpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVyby0yIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVyby0zIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLW1hbmdvLW9yYW5nZSk7XFxuICAtLXRleHQtY29sb3I6ICNlZWU7XFxuICAtLWxpbmstY29sb3I6ICNmZmY7XFxuICAtLWhlYWRpbmctY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIENvbXBvbmVudHMgKi9cXG4ucGVybWFsaW5rIHtcXG4gIC0taWNvbi1zaXplOiAxcmVtO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/global.css\n");

/***/ })

})