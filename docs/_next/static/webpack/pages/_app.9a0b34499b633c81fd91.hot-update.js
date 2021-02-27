webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/globals.css":
/*!********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./src/styles/globals.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  -webkit-clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n          clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: var(--font-size--h1);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: var(--font-size--h2);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n  font-size: var(--font-size--h3);\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n  font-size: var(--font-size--h4);\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  border: none;\\n}\\n\\n/* Tables */\\n.table-wrapper {\\n  margin: 2rem calc(var(--spacer) * -1);\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n  width: calc(100% + var(--spacer) * 2);\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\ntable {\\n  width: 100%;\\n  padding: 1rem var(--spacer);\\n}\\n\\nth,\\ntd {\\n  width: -webkit-max-content;\\n  width: -moz-max-content;\\n  width: max-content;\\n  white-space: nowrap;\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  transform: translateY(-50%) translateX(0.25rem);\\n  opacity: 0;\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n:hover > .permalink,\\n:focus-within > .permalink {\\n  transform: translateY(-50%) translateX(0);\\n  opacity: 1;\\n}\\n\\n/* Links */\\n[class*=\\\"link-\\\"] {\\n  color: var(--link-color);\\n  box-shadow: inset 0 -1px 0 0 var(--caption-color);\\n}\\n\\n/* Buttons */\\n[class*=\\\"button-\\\"] {\\n  padding: 0.25rem 0.5rem;\\n}\\n\\n.button-primary {\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,aAAa;AACb;EACE,sBAAsB;EACtB,qCAAqC;EACrC,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA;;EAEE,eAAe;EACf,wBAAwB;EACxB,iCAAiC;EACjC,gBAAgB;EAChB,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,2EAAmE;UAAnE,mEAAmE;EACnE,iCAAiC;EACjC,eAAe;EACf,SAAS;EACT,QAAQ;EACR,oBAAoB;AACtB;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;;;;EAKE,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA,WAAW;AACX;EACE,qCAAqC;EACrC,yCAAyC;EACzC,4CAA4C;EAC5C,qCAAqC;EACrC,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;;EAEE,0BAAkB;EAAlB,uBAAkB;EAAlB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,kBAAkB;;EAElB,kBAAkB;EAClB,QAAQ,EAAE,6CAA6C;EACvD,wDAAwD;EACxD,oBAAoB;EACpB,uBAAuB;EACvB,cAAc;EACd,0CAA0C;EAC1C,mBAAmB;EACnB,+CAA+C;EAC/C,UAAU;EACV,kDAAkD;AACpD;;AAEA;;EAEE,yCAAyC;EACzC,UAAU;AACZ;;AAEA,UAAU;AACV;EACE,wBAAwB;EACxB,iDAAiD;AACnD;;AAEA,YAAY;AACZ;EACE,uBAAuB;AACzB;;AAEA;AACA\",\"sourcesContent\":[\"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: var(--font-size--h1);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: var(--font-size--h2);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n  font-size: var(--font-size--h3);\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n  font-size: var(--font-size--h4);\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  border: none;\\n}\\n\\n/* Tables */\\n.table-wrapper {\\n  margin: 2rem calc(var(--spacer) * -1);\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n  width: calc(100% + var(--spacer) * 2);\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\ntable {\\n  width: 100%;\\n  padding: 1rem var(--spacer);\\n}\\n\\nth,\\ntd {\\n  width: max-content;\\n  white-space: nowrap;\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  transform: translateY(-50%) translateX(0.25rem);\\n  opacity: 0;\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n:hover > .permalink,\\n:focus-within > .permalink {\\n  transform: translateY(-50%) translateX(0);\\n  opacity: 1;\\n}\\n\\n/* Links */\\n[class*=\\\"link-\\\"] {\\n  color: var(--link-color);\\n  box-shadow: inset 0 -1px 0 0 var(--caption-color);\\n}\\n\\n/* Buttons */\\n[class*=\\\"button-\\\"] {\\n  padding: 0.25rem 0.5rem;\\n}\\n\\n.button-primary {\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz8yYTQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2tHO0FBQ2xHLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxzQkFBc0IsMkJBQTJCLDRDQUE0QyxjQUFjLGVBQWUsc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsc0NBQXNDLHFCQUFxQiw0QkFBNEIsc0NBQXNDLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxZQUFZLGdGQUFnRixnRkFBZ0Ysc0NBQXNDLG9CQUFvQixjQUFjLGFBQWEseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyw0QkFBNEIsdUJBQXVCLDRDQUE0QyxxQkFBcUIscUJBQXFCLHdCQUF3QixnQ0FBZ0MsR0FBRyxRQUFRLGtCQUFrQix3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsT0FBTywwQkFBMEIsR0FBRyxTQUFTLDZCQUE2Qiw0QkFBNEIsR0FBRyxZQUFZLG9CQUFvQixpQkFBaUIsR0FBRyxrQ0FBa0MsMENBQTBDLDhDQUE4QyxpREFBaUQsMENBQTBDLHFCQUFxQixzQ0FBc0MsR0FBRyxXQUFXLGdCQUFnQixnQ0FBZ0MsR0FBRyxhQUFhLCtCQUErQiw0QkFBNEIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsR0FBRyxxQ0FBcUMsNEJBQTRCLEdBQUcsbUNBQW1DLDBCQUEwQixHQUFHLFFBQVEsZ0NBQWdDLHNCQUFzQixxQkFBcUIsR0FBRyxRQUFRLGdDQUFnQyx3QkFBd0Isb0NBQW9DLHFCQUFxQixHQUFHLG9DQUFvQyxrQkFBa0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRCQUE0QixzQ0FBc0MsNkJBQTZCLEdB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LG9DQUFvQyxrQkFBa0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRCQUE0QixzQ0FBc0MsNkJBQTZCLEdBQUcsYUFBYSxtQ0FBbUMsdUJBQXVCLHVCQUF1QiwwQkFBMEIsR0FBRyxhQUFhLGtDQUFrQyx1QkFBdUIsdUJBQXVCLDBCQUEwQixHQUFHLGFBQWEsb0NBQW9DLHVCQUF1Qix1QkFBdUIsMEJBQTBCLEdBQUcsa0NBQWtDLHdCQUF3Qix1QkFBdUIseUJBQXlCLGFBQWEsNEdBQTRHLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLCtDQUErQyx3QkFBd0Isb0RBQW9ELGVBQWUsdURBQXVELEdBQUcsc0RBQXNELDhDQUE4QyxlQUFlLEdBQUcscUNBQXFDLDZCQUE2QixzREFBc0QsR0FBRyx5Q0FBeUMsNEJBQTRCLEdBQUcscUJBQXFCLEdBQUcscUJBQXFCO0FBQ3IrUjtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQmFzZWxpbmUgKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxufVxcblxcbmZvb3RlciB7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwLjc1cmVtIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMC43NXJlbSk7XFxuICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwLjc1cmVtIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMC43NXJlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBUeXBvZ3JhcGh5ICovXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiA1LjY1M3JlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oMSk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMy45OThyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDIpO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIuODI3cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWgzKTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjk5OXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oNCk7XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDUpO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuc3ZnIHtcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBUYWJsZXMgKi9cXG4udGFibGUtd3JhcHBlciB7XFxuICBtYXJnaW46IDJyZW0gY2FsYyh2YXIoLS1zcGFjZXIpICogLTEpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyB2YXIoLS1zcGFjZXIpICogMik7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG50YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gdmFyKC0tc3BhY2VyKTtcXG59XFxuXFxudGgsXFxudGQge1xcbiAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG59XFxuXFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRoIHtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxudGQge1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjQxNHJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuW2NsYXNzKj1cXFwiaGVyby1cXFwiXSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uaGVyby0xIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWNvYmFsdC1ibHVlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMiB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMyB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1tYW5nby1vcmFuZ2UpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBDb21wb25lbnRzICovXFxuLnBlcm1hbGluayB7XFxuICAtLWljb24tc2l6ZTogMS41cmVtO1xcbiAgLS1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MyU7IC8qIFNsaWdodCB2aXN1YWwgb2Zmc2V0IHRvIGFjY291bnQgZm9yIGZvbnQgKi9cXG4gIGxlZnQ6IGNhbGMoKHZhcigtLWljb24tc2l6ZSkgKyB2YXIoLS1wYWRkaW5nKSAqIDMpICogLTEpO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDAuMjVyZW0pO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG46aG92ZXIgPiAucGVybWFsaW5rLFxcbjpmb2N1cy13aXRoaW4gPiAucGVybWFsaW5rIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogTGlua3MgKi9cXG5bY2xhc3MqPVxcXCJsaW5rLVxcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG5bY2xhc3MqPVxcXCJidXR0b24tXFxcIl0ge1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxufVxcblxcbi5idXR0b24tcHJpbWFyeSB7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7QUFDYjtFQUNFLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyRUFBbUU7VUFBbkUsbUVBQW1FO0VBQ25FLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixvQkFBb0I7QUFDdEI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7Ozs7O0VBS0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxxQ0FBcUM7RUFDckMseUNBQXlDO0VBQ3pDLDRDQUE0QztFQUM1QyxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsUUFBUSxFQUFFLDZDQUE2QztFQUN2RCx3REFBd0Q7RUFDeEQsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0MsVUFBVTtFQUNWLGtEQUFrRDtBQUNwRDs7QUFFQTs7RUFFRSx5Q0FBeUM7RUFDekMsVUFBVTtBQUNaOztBQUVBLFVBQVU7QUFDVjtFQUNFLHdCQUF3QjtFQUN4QixpREFBaUQ7QUFDbkQ7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQmFzZWxpbmUgKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxufVxcblxcbmZvb3RlciB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMC43NXJlbSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAuNzVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLyogVHlwb2dyYXBoeSAqL1xcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogNS42NTNyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDEpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDMuOTk4cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWgyKTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAyLjgyN3JlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oMyk7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS45OTlyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDQpO1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuNDE0cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWg1KTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnN2ZyB7XFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVGFibGVzICovXFxuLnRhYmxlLXdyYXBwZXIge1xcbiAgbWFyZ2luOiAycmVtIGNhbGModmFyKC0tc3BhY2VyKSAqIC0xKTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB3aWR0aDogY2FsYygxMDAlICsgdmFyKC0tc3BhY2VyKSAqIDIpO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxudGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIHZhcigtLXNwYWNlcik7XFxufVxcblxcbnRoLFxcbnRkIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG59XFxuXFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRoIHtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxudGQge1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjQxNHJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuW2NsYXNzKj1cXFwiaGVyby1cXFwiXSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uaGVyby0xIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWNvYmFsdC1ibHVlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMiB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMyB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1tYW5nby1vcmFuZ2UpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBDb21wb25lbnRzICovXFxuLnBlcm1hbGluayB7XFxuICAtLWljb24tc2l6ZTogMS41cmVtO1xcbiAgLS1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MyU7IC8qIFNsaWdodCB2aXN1YWwgb2Zmc2V0IHRvIGFjY291bnQgZm9yIGZvbnQgKi9cXG4gIGxlZnQ6IGNhbGMoKHZhcigtLWljb24tc2l6ZSkgKyB2YXIoLS1wYWRkaW5nKSAqIDMpICogLTEpO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDAuMjVyZW0pO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG46aG92ZXIgPiAucGVybWFsaW5rLFxcbjpmb2N1cy13aXRoaW4gPiAucGVybWFsaW5rIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogTGlua3MgKi9cXG5bY2xhc3MqPVxcXCJsaW5rLVxcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG5bY2xhc3MqPVxcXCJidXR0b24tXFxcIl0ge1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxufVxcblxcbi5idXR0b24tcHJpbWFyeSB7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/globals.css\n");

/***/ })

})