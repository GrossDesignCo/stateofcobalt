webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/global.css":
/*!*******************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./src/styles/global.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\n/* TODO: Revisit scrolling styles, test on mobile */\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  -ms-scroll-snap-type: y mandatory;\\n      scroll-snap-type: y mandatory;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\narticle {\\n  scroll-snap-align: start;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  -webkit-clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n          clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: clamp(2.827rem, 7vw, 5.653rem);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: clamp(1.999rem, 4.95vw, 3.998rem);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n}\\n\\na {\\n  color: var(--link-color);\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\n/* Tables */\\ntable {\\n  margin: 2rem 0;\\n  padding: 1rem 0;\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n  max-width: 100%;\\n  overflow-x: auto;\\n}\\n\\nth,\\ntd {\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  transform: translateY(-50%);\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  opacity: 0;\\n}\\n\\n:hover > .permalink {\\n  opacity: 1;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/global.css\"],\"names\":[],\"mappings\":\"AAAA,aAAa;AACb;EACE,sBAAsB;EACtB,qCAAqC;EACrC,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA,mDAAmD;AACnD;;EAEE,eAAe;EACf,wBAAwB;EACxB,iCAAiC;EACjC,gBAAgB;EAChB,iCAA6B;MAA7B,6BAA6B;EAC7B,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,2EAAmE;UAAnE,mEAAmE;EACnE,iCAAiC;EACjC,eAAe;EACf,SAAS;EACT,QAAQ;EACR,oBAAoB;AACtB;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;;;;EAKE,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA,WAAW;AACX;EACE,cAAc;EACd,eAAe;EACf,yCAAyC;EACzC,4CAA4C;EAC5C,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,kBAAkB;;EAElB,kBAAkB;EAClB,QAAQ,EAAE,6CAA6C;EACvD,2BAA2B;EAC3B,wDAAwD;EACxD,oBAAoB;EACpB,uBAAuB;EACvB,cAAc;EACd,0CAA0C;EAC1C,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ\",\"sourcesContent\":[\"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\n/* TODO: Revisit scrolling styles, test on mobile */\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-snap-type: y mandatory;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\narticle {\\n  scroll-snap-align: start;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: clamp(2.827rem, 7vw, 5.653rem);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: clamp(1.999rem, 4.95vw, 3.998rem);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n}\\n\\na {\\n  color: var(--link-color);\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\n/* Tables */\\ntable {\\n  margin: 2rem 0;\\n  padding: 1rem 0;\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n  max-width: 100%;\\n  overflow-x: auto;\\n}\\n\\nth,\\ntd {\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  transform: translateY(-50%);\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  opacity: 0;\\n}\\n\\n:hover > .permalink {\\n  opacity: 1;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzPzg2MWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDa0c7QUFDbEcsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLHNCQUFzQiwyQkFBMkIsNENBQTRDLGNBQWMsZUFBZSxzQkFBc0IsR0FBRyx1RUFBdUUsb0JBQW9CLDZCQUE2QixzQ0FBc0MscUJBQXFCLHNDQUFzQyxzQ0FBc0MsNEJBQTRCLHNDQUFzQyxHQUFHLGFBQWEsNkJBQTZCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxZQUFZLGdGQUFnRixnRkFBZ0Ysc0NBQXNDLG9CQUFvQixjQUFjLGFBQWEseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyw0QkFBNEIsdUJBQXVCLDRDQUE0QyxxQkFBcUIscUJBQXFCLHdCQUF3QixnQ0FBZ0MsR0FBRyxRQUFRLGtCQUFrQix3QkFBd0IsOENBQThDLEdBQUcsUUFBUSx3QkFBd0IsaURBQWlELEdBQUcsUUFBUSx3QkFBd0IsR0FBRyxRQUFRLHdCQUF3QixHQUFHLFFBQVEsd0JBQXdCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxTQUFTLDZCQUE2Qiw0QkFBNEIsR0FBRyx5QkFBeUIsbUJBQW1CLG9CQUFvQiw4Q0FBOEMsaURBQWlELG9CQUFvQixxQkFBcUIsR0FBRyxhQUFhLHlCQUF5QixHQUFHLHFDQUFxQyw0QkFBNEIsR0FBRyxtQ0FBbUMsMEJBQTBCLEdBQUcsUUFBUSxnQ0FBZ0Msc0JBQXNCLHFCQUFxQixHQUFHLFFBQVEsZ0NBQWdDLHdCQUF3QixxQkFBcUIsR0FBRyxvQ0FBb0Msa0JBQWtCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHVCQUF1Qiw0QkFBNEIsc0NBQXNDLDZCQUE2QixHQUFHLGFBQWEsbUNBQW1DLHVCQUF1Qix1QkFBdUIsMEJBQTBCLEdBQUcsYUFBYSxrQ0FBa0MsdUJBQXVCLHVCQUF1QiwwQkFBMEIs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aWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEJhc2VsaW5lICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMS42NTtcXG59XFxuXFxuLyogVE9ETzogUmV2aXNpdCBzY3JvbGxpbmcgc3R5bGVzLCB0ZXN0IG9uIG1vYmlsZSAqL1xcbmh0bWwsXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgLW1zLXNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xcbiAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbmFydGljbGUge1xcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxufVxcblxcbmZvb3RlciB7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwLjc1cmVtIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMC43NXJlbSk7XFxuICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwLjc1cmVtIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMC43NXJlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBUeXBvZ3JhcGh5ICovXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiA1LjY1M3JlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi44MjdyZW0sIDd2dywgNS42NTNyZW0pO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDMuOTk4cmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjk5OXJlbSwgNC45NXZ3LCAzLjk5OHJlbSk7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMi44MjdyZW07XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS45OTlyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcbn1cXG5cXG5zdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxufVxcblxcbi8qIFRhYmxlcyAqL1xcbnRhYmxlIHtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcbnRoLFxcbnRkIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbn1cXG5cXG50aDpmaXJzdC1jaGlsZCxcXG50ZDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG59XFxuXFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcXG59XFxuXFxudGgge1xcbiAgY29sb3I6IHZhcigtLWNhcHRpb24tY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG50ZCB7XFxuICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XFxuICBmb250LXNpemU6IDEuNDE0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogSGVybyAqL1xcbltjbGFzcyo9XFxcImhlcm8tXFxcIl0ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmhlcm8tMSB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1jb2JhbHQtYmx1ZSk7XFxuICAtLXRleHQtY29sb3I6ICNlZWU7XFxuICAtLWxpbmstY29sb3I6ICNmZmY7XFxuICAtLWhlYWRpbmctY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZXJvLTIge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxuICAtLXRleHQtY29sb3I6ICNlZWU7XFxuICAtLWxpbmstY29sb3I6ICNmZmY7XFxuICAtLWhlYWRpbmctY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZXJvLTMge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tbWFuZ28tb3JhbmdlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogQ29tcG9uZW50cyAqL1xcbi5wZXJtYWxpbmsge1xcbiAgLS1pY29uLXNpemU6IDEuNXJlbTtcXG4gIC0tcGFkZGluZzogMC4yNXJlbTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTMlOyAvKiBTbGlnaHQgdmlzdWFsIG9mZnNldCB0byBhY2NvdW50IGZvciBmb250ICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBsZWZ0OiBjYWxjKCh2YXIoLS1pY29uLXNpemUpICsgdmFyKC0tcGFkZGluZykgKiAzKSAqIC0xKTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG46aG92ZXIgPiAucGVybWFsaW5rIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFBYTtBQUNiO0VBQ0Usc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQSxtREFBbUQ7QUFDbkQ7O0VBRUUsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGlDQUE2QjtNQUE3Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJFQUFtRTtVQUFuRSxtRUFBbUU7RUFDbkUsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLG9CQUFvQjtBQUN0Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7RUFLRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLFFBQVEsRUFBRSw2Q0FBNkM7RUFDdkQsMkJBQTJCO0VBQzNCLHdEQUF3RDtFQUN4RCxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCYXNlbGluZSAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2hpcHBvcmkgTWluY2hvXFxcIiwgc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XFxufVxcblxcbi8qIFRPRE86IFJldmlzaXQgc2Nyb2xsaW5nIHN0eWxlcywgdGVzdCBvbiBtb2JpbGUgKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbmFydGljbGUge1xcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxufVxcblxcbmZvb3RlciB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMC43NXJlbSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAuNzVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLyogVHlwb2dyYXBoeSAqL1xcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogNS42NTNyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDIuODI3cmVtLCA3dncsIDUuNjUzcmVtKTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjk5OHJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS45OTlyZW0sIDQuOTV2dywgMy45OThyZW0pO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIuODI3cmVtO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDEuOTk5cmVtO1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuNDE0cmVtO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXG59XFxuXFxuc3ZnIHtcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcbn1cXG5cXG4vKiBUYWJsZXMgKi9cXG50YWJsZSB7XFxuICBtYXJnaW46IDJyZW0gMDtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG59XFxuXFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRoIHtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxudGQge1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjQxNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEhlcm8gKi9cXG5bY2xhc3MqPVxcXCJoZXJvLVxcXCJdIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5oZXJvLTEge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tY29iYWx0LWJsdWUpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVyby0yIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVyby0zIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLW1hbmdvLW9yYW5nZSk7XFxuICAtLXRleHQtY29sb3I6ICNlZWU7XFxuICAtLWxpbmstY29sb3I6ICNmZmY7XFxuICAtLWhlYWRpbmctY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIENvbXBvbmVudHMgKi9cXG4ucGVybWFsaW5rIHtcXG4gIC0taWNvbi1zaXplOiAxLjVyZW07XFxuICAtLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUzJTsgLyogU2xpZ2h0IHZpc3VhbCBvZmZzZXQgdG8gYWNjb3VudCBmb3IgZm9udCAqL1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgbGVmdDogY2FsYygodmFyKC0taWNvbi1zaXplKSArIHZhcigtLXBhZGRpbmcpICogMykgKiAtMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuOmhvdmVyID4gLnBlcm1hbGluayB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/global.css\n");

/***/ })

})