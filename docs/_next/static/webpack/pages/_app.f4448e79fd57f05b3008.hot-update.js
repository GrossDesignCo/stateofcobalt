webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/globals.css":
/*!********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./src/styles/globals.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  -webkit-clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n          clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: var(--font-size--h1);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: var(--font-size--h2);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n  font-size: var(--font-size--h3);\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n  font-size: var(--font-size--h4);\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  border: none;\\n}\\n\\n/* Tables */\\n.table-wrapper {\\n  margin: 2rem calc(var(--spacer) * -1);\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n  width: calc(100% + var(--spacer) * 2);\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\ntable {\\n  width: 100%;\\n  padding: 1rem var(--spacer);\\n}\\n\\nth,\\ntd {\\n  width: -webkit-max-content;\\n  width: -moz-max-content;\\n  width: max-content;\\n  white-space: nowrap;\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1,\\n.hero-2,\\n.hero-3 {\\n  --accent-color: rgba(255, 255, 255, 0.2);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  transform: translateY(-50%) translateX(0.25rem);\\n  opacity: 0;\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n:hover > .permalink,\\n:focus-within > .permalink {\\n  transform: translateY(-50%) translateX(0);\\n  opacity: 1;\\n}\\n\\n/* Links */\\n[class*=\\\"link-\\\"] {\\n  color: var(--link-color);\\n  box-shadow: inset 0 -1px 0 0 var(--caption-color);\\n}\\n\\n/* Buttons */\\n[class*=\\\"button-\\\"] {\\n  padding: 0.25rem 0.5rem;\\n}\\n\\n.button-primary {\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,aAAa;AACb;EACE,sBAAsB;EACtB,qCAAqC;EACrC,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA;;EAEE,eAAe;EACf,wBAAwB;EACxB,iCAAiC;EACjC,gBAAgB;EAChB,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,2EAAmE;UAAnE,mEAAmE;EACnE,iCAAiC;EACjC,eAAe;EACf,SAAS;EACT,QAAQ;EACR,oBAAoB;AACtB;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;;;;EAKE,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA,WAAW;AACX;EACE,qCAAqC;EACrC,yCAAyC;EACzC,4CAA4C;EAC5C,qCAAqC;EACrC,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;;EAEE,0BAAkB;EAAlB,uBAAkB;EAAlB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;;;EAGE,wCAAwC;EACxC,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;AACjC;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,kBAAkB;;EAElB,kBAAkB;EAClB,QAAQ,EAAE,6CAA6C;EACvD,wDAAwD;EACxD,oBAAoB;EACpB,uBAAuB;EACvB,cAAc;EACd,0CAA0C;EAC1C,mBAAmB;EACnB,+CAA+C;EAC/C,UAAU;EACV,kDAAkD;AACpD;;AAEA;;EAEE,yCAAyC;EACzC,UAAU;AACZ;;AAEA,UAAU;AACV;EACE,wBAAwB;EACxB,iDAAiD;AACnD;;AAEA,YAAY;AACZ;EACE,uBAAuB;AACzB;;AAEA;AACA\",\"sourcesContent\":[\"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: var(--font-size--h1);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: var(--font-size--h2);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n  font-size: var(--font-size--h3);\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n  font-size: var(--font-size--h4);\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  border: none;\\n}\\n\\n/* Tables */\\n.table-wrapper {\\n  margin: 2rem calc(var(--spacer) * -1);\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n  width: calc(100% + var(--spacer) * 2);\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\ntable {\\n  width: 100%;\\n  padding: 1rem var(--spacer);\\n}\\n\\nth,\\ntd {\\n  width: max-content;\\n  white-space: nowrap;\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1,\\n.hero-2,\\n.hero-3 {\\n  --accent-color: rgba(255, 255, 255, 0.2);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  transform: translateY(-50%) translateX(0.25rem);\\n  opacity: 0;\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n:hover > .permalink,\\n:focus-within > .permalink {\\n  transform: translateY(-50%) translateX(0);\\n  opacity: 1;\\n}\\n\\n/* Links */\\n[class*=\\\"link-\\\"] {\\n  color: var(--link-color);\\n  box-shadow: inset 0 -1px 0 0 var(--caption-color);\\n}\\n\\n/* Buttons */\\n[class*=\\\"button-\\\"] {\\n  padding: 0.25rem 0.5rem;\\n}\\n\\n.button-primary {\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz8yYTQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2tHO0FBQ2xHLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxzQkFBc0IsMkJBQTJCLDRDQUE0QyxjQUFjLGVBQWUsc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsc0NBQXNDLHFCQUFxQiw0QkFBNEIsc0NBQXNDLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxZQUFZLGdGQUFnRixnRkFBZ0Ysc0NBQXNDLG9CQUFvQixjQUFjLGFBQWEseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyw0QkFBNEIsdUJBQXVCLDRDQUE0QyxxQkFBcUIscUJBQXFCLHdCQUF3QixnQ0FBZ0MsR0FBRyxRQUFRLGtCQUFrQix3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsU0FBUyw2QkFBNkIsNEJBQTRCLEdBQUcsWUFBWSxvQkFBb0IsaUJBQWlCLEdBQUcsa0NBQWtDLDBDQUEwQyw4Q0FBOEMsaURBQWlELDBDQUEwQyxxQkFBcUIsc0NBQXNDLEdBQUcsV0FBVyxnQkFBZ0IsZ0NBQWdDLEdBQUcsYUFBYSwrQkFBK0IsNEJBQTRCLHVCQUF1Qix3QkFBd0IseUJBQXlCLEdBQUcscUNBQXFDLDRCQUE0QixHQUFHLG1DQUFtQywwQkFBMEIsR0FBRyxRQUFRLGdDQUFnQyxzQkFBc0IscUJBQXFCLEdBQUcsUUFBUSxnQ0FBZ0Msd0JBQXdCLG9DQUFvQyxxQkFBcUIsR0FBRyxvQ0FBb0Msa0JBQWtCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHVCQUF1Qiw0QkFBNEIsc0NBQXNDLDZC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Z0Isa0JBQWtCLDJCQUEyQix1QkFBdUIsNEJBQTRCLHNDQUFzQyw2QkFBNkIsR0FBRyxpQ0FBaUMsNkNBQTZDLHVCQUF1Qix1QkFBdUIsMEJBQTBCLEdBQUcsYUFBYSxtQ0FBbUMsR0FBRyxhQUFhLGtDQUFrQyxHQUFHLGFBQWEsb0NBQW9DLEdBQUcsa0NBQWtDLHdCQUF3Qix1QkFBdUIseUJBQXlCLGFBQWEsNEdBQTRHLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLCtDQUErQyx3QkFBd0Isb0RBQW9ELGVBQWUsdURBQXVELEdBQUcsc0RBQXNELDhDQUE4QyxlQUFlLEdBQUcscUNBQXFDLDZCQUE2QixzREFBc0QsR0FBRyx5Q0FBeUMsNEJBQTRCLEdBQUcscUJBQXFCLEdBQUcscUJBQXFCO0FBQ24yUjtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQmFzZWxpbmUgKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxufVxcblxcbmZvb3RlciB7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwLjc1cmVtIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMC43NXJlbSk7XFxuICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwLjc1cmVtIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMC43NXJlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBUeXBvZ3JhcGh5ICovXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiA1LjY1M3JlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oMSk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMy45OThyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDIpO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIuODI3cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWgzKTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjk5OXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oNCk7XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDUpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5zdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFRhYmxlcyAqL1xcbi50YWJsZS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMnJlbSBjYWxjKHZhcigtLXNwYWNlcikgKiAtMSk7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSArIHZhcigtLXNwYWNlcikgKiAyKTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1zcGFjZXIpO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbn1cXG5cXG50aDpmaXJzdC1jaGlsZCxcXG50ZDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG59XFxuXFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcXG59XFxuXFxudGgge1xcbiAgY29sb3I6IHZhcigtLWNhcHRpb24tY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG50ZCB7XFxuICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XFxuICBmb250LXNpemU6IDEuNDE0cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWg1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEhlcm8gKi9cXG5bY2xhc3MqPVxcXCJoZXJvLVxcXCJdIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5oZXJvLTEsXFxuLmhlcm8tMixcXG4uaGVyby0zIHtcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAtLXRleHQtY29sb3I6ICNlZWU7XFxuICAtLWxpbmstY29sb3I6ICNmZmY7XFxuICAtLWhlYWRpbmctY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZXJvLTEge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tY29iYWx0LWJsdWUpO1xcbn1cXG5cXG4uaGVyby0yIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbn1cXG5cXG4uaGVyby0zIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLW1hbmdvLW9yYW5nZSk7XFxufVxcblxcbi8qIENvbXBvbmVudHMgKi9cXG4ucGVybWFsaW5rIHtcXG4gIC0taWNvbi1zaXplOiAxLjVyZW07XFxuICAtLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUzJTsgLyogU2xpZ2h0IHZpc3VhbCBvZmZzZXQgdG8gYWNjb3VudCBmb3IgZm9udCAqL1xcbiAgbGVmdDogY2FsYygodmFyKC0taWNvbi1zaXplKSArIHZhcigtLXBhZGRpbmcpICogMykgKiAtMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoMC4yNXJlbSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbjpob3ZlciA+IC5wZXJtYWxpbmssXFxuOmZvY3VzLXdpdGhpbiA+IC5wZXJtYWxpbmsge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoMCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBMaW5rcyAqL1xcbltjbGFzcyo9XFxcImxpbmstXFxcIl0ge1xcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG59XFxuXFxuLyogQnV0dG9ucyAqL1xcbltjbGFzcyo9XFxcImJ1dHRvbi1cXFwiXSB7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmJ1dHRvbi1wcmltYXJ5IHtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFBYTtBQUNiO0VBQ0Usc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJFQUFtRTtVQUFuRSxtRUFBbUU7RUFDbkUsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLG9CQUFvQjtBQUN0Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7RUFLRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxxQ0FBcUM7RUFDckMseUNBQXlDO0VBQ3pDLDRDQUE0QztFQUM1QyxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBLGVBQWU7QUFDZjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7O0VBRWxCLGtCQUFrQjtFQUNsQixRQUFRLEVBQUUsNkNBQTZDO0VBQ3ZELHdEQUF3RDtFQUN4RCxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyxVQUFVO0VBQ1Ysa0RBQWtEO0FBQ3BEOztBQUVBOztFQUVFLHlDQUF5QztFQUN6QyxVQUFVO0FBQ1o7O0FBRUEsVUFBVTtBQUNWO0VBQ0Usd0JBQXdCO0VBQ3hCLGlEQUFpRDtBQUNuRDs7QUFFQSxZQUFZO0FBQ1o7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCYXNlbGluZSAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2hpcHBvcmkgTWluY2hvXFxcIiwgc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwLjc1cmVtIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMC43NXJlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBUeXBvZ3JhcGh5ICovXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiA1LjY1M3JlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oMSk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMy45OThyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDIpO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIuODI3cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWgzKTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjk5OXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oNCk7XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDUpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5zdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFRhYmxlcyAqL1xcbi50YWJsZS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMnJlbSBjYWxjKHZhcigtLXNwYWNlcikgKiAtMSk7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSArIHZhcigtLXNwYWNlcikgKiAyKTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1zcGFjZXIpO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxufVxcblxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG50aDpsYXN0LWNoaWxkLFxcbnRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xcbn1cXG5cXG50aCB7XFxuICBjb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbnRkIHtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogSGVybyAqL1xcbltjbGFzcyo9XFxcImhlcm8tXFxcIl0ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmhlcm8tMSxcXG4uaGVyby0yLFxcbi5oZXJvLTMge1xcbiAgLS1hY2NlbnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMSB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1jb2JhbHQtYmx1ZSk7XFxufVxcblxcbi5oZXJvLTIge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxufVxcblxcbi5oZXJvLTMge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tbWFuZ28tb3JhbmdlKTtcXG59XFxuXFxuLyogQ29tcG9uZW50cyAqL1xcbi5wZXJtYWxpbmsge1xcbiAgLS1pY29uLXNpemU6IDEuNXJlbTtcXG4gIC0tcGFkZGluZzogMC4yNXJlbTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTMlOyAvKiBTbGlnaHQgdmlzdWFsIG9mZnNldCB0byBhY2NvdW50IGZvciBmb250ICovXFxuICBsZWZ0OiBjYWxjKCh2YXIoLS1pY29uLXNpemUpICsgdmFyKC0tcGFkZGluZykgKiAzKSAqIC0xKTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgwLjI1cmVtKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuOmhvdmVyID4gLnBlcm1hbGluayxcXG46Zm9jdXMtd2l0aGluID4gLnBlcm1hbGluayB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIExpbmtzICovXFxuW2NsYXNzKj1cXFwibGluay1cXFwiXSB7XFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwIHZhcigtLWNhcHRpb24tY29sb3IpO1xcbn1cXG5cXG4vKiBCdXR0b25zICovXFxuW2NsYXNzKj1cXFwiYnV0dG9uLVxcXCJdIHtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbn1cXG5cXG4uYnV0dG9uLXByaW1hcnkge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/globals.css\n");

/***/ })

})