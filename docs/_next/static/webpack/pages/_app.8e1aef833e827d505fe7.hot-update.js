webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/global.css":
/*!*******************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./src/styles/global.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\n/* TODO: Revisit scrolling styles, test on mobile */\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  -ms-scroll-snap-type: y mandatory;\\n      scroll-snap-type: y mandatory;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\narticle {\\n  scroll-snap-align: start;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  -webkit-clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n          clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: clamp(2.827rem, 7vw, 5.653rem);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: clamp(1.999rem, 4.95vw, 3.998rem);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n}\\n\\na {\\n  color: var(--link-color);\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\n/* Tables */\\n.table-wrapper {\\n  width: 100%;\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\ntable {\\n  margin: 2rem 0;\\n  padding: 1rem 0;\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n}\\n\\nth,\\ntd {\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  border: none;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  transform: translateY(-50%) translateX(0.25rem);\\n  opacity: 0;\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n:hover > .permalink {\\n  transform: translateY(-50%) translateX(0);\\n  opacity: 1;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/global.css\"],\"names\":[],\"mappings\":\"AAAA,aAAa;AACb;EACE,sBAAsB;EACtB,qCAAqC;EACrC,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA,mDAAmD;AACnD;;EAEE,eAAe;EACf,wBAAwB;EACxB,iCAAiC;EACjC,gBAAgB;EAChB,iCAA6B;MAA7B,6BAA6B;EAC7B,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,2EAAmE;UAAnE,mEAAmE;EACnE,iCAAiC;EACjC,eAAe;EACf,SAAS;EACT,QAAQ;EACR,oBAAoB;AACtB;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;;;;EAKE,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA,WAAW;AACX;EACE,WAAW;EACX,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,cAAc;EACd,eAAe;EACf,yCAAyC;EACzC,4CAA4C;AAC9C;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,mBAAmB;EACnB,kBAAkB;;EAElB,kBAAkB;EAClB,QAAQ,EAAE,6CAA6C;EACvD,wDAAwD;EACxD,oBAAoB;EACpB,uBAAuB;EACvB,cAAc;EACd,YAAY;EACZ,0CAA0C;EAC1C,mBAAmB;EACnB,+CAA+C;EAC/C,UAAU;EACV,kDAAkD;AACpD;;AAEA;EACE,yCAAyC;EACzC,UAAU;AACZ\",\"sourcesContent\":[\"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\n/* TODO: Revisit scrolling styles, test on mobile */\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-snap-type: y mandatory;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\narticle {\\n  scroll-snap-align: start;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: clamp(2.827rem, 7vw, 5.653rem);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: clamp(1.999rem, 4.95vw, 3.998rem);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n}\\n\\na {\\n  color: var(--link-color);\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\n/* Tables */\\n.table-wrapper {\\n  width: 100%;\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\ntable {\\n  margin: 2rem 0;\\n  padding: 1rem 0;\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n}\\n\\nth,\\ntd {\\n  padding: 0.5rem 2rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n[class*=\\\"hero-\\\"] {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n.hero-1 {\\n  --bg-color: var(--cobalt-blue);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-2 {\\n  --bg-color: var(--dark-slate);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n.hero-3 {\\n  --bg-color: var(--mango-orange);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  border: none;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  transform: translateY(-50%) translateX(0.25rem);\\n  opacity: 0;\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n:hover > .permalink {\\n  transform: translateY(-50%) translateX(0);\\n  opacity: 1;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzPzg2MWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDa0c7QUFDbEcsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLHNCQUFzQiwyQkFBMkIsNENBQTRDLGNBQWMsZUFBZSxzQkFBc0IsR0FBRyx1RUFBdUUsb0JBQW9CLDZCQUE2QixzQ0FBc0MscUJBQXFCLHNDQUFzQyxzQ0FBc0MsNEJBQTRCLHNDQUFzQyxHQUFHLGFBQWEsNkJBQTZCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxZQUFZLGdGQUFnRixnRkFBZ0Ysc0NBQXNDLG9CQUFvQixjQUFjLGFBQWEseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyw0QkFBNEIsdUJBQXVCLDRDQUE0QyxxQkFBcUIscUJBQXFCLHdCQUF3QixnQ0FBZ0MsR0FBRyxRQUFRLGtCQUFrQix3QkFBd0IsOENBQThDLEdBQUcsUUFBUSx3QkFBd0IsaURBQWlELEdBQUcsUUFBUSx3QkFBd0IsR0FBRyxRQUFRLHdCQUF3QixHQUFHLFFBQVEsd0JBQXdCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxTQUFTLDZCQUE2Qiw0QkFBNEIsR0FBRyxrQ0FBa0MsZ0JBQWdCLHFCQUFxQixzQ0FBc0MsR0FBRyxXQUFXLG1CQUFtQixvQkFBb0IsOENBQThDLGlEQUFpRCxHQUFHLGFBQWEseUJBQXlCLEdBQUcscUNBQXFDLDRCQUE0QixHQUFHLG1DQUFtQywwQkFBMEIsR0FBRyxRQUFRLGdDQUFnQyxzQkFBc0IscUJBQXFCLEdBQUcsUUFBUSxnQ0FBZ0Msd0JBQXdCLHFCQUFxQixHQUFHLG9DQUFvQyxrQkFBa0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRCQUE0QixzQ0FBc0MsNkJBQTZCLEdBQUcsYUFBYSxtQ0FBbUMsdUJBQXVCLHVCQUF1QiwwQkFBMEIsR0FBRyxhQUFhLGtDQUFrQyx1QkFB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bUIsaUJBQWlCLCtDQUErQyx3QkFBd0Isb0RBQW9ELGVBQWUsdURBQXVELEdBQUcseUJBQXlCLDhDQUE4QyxlQUFlLEdBQUcscUJBQXFCO0FBQ3JoUTtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCYXNlbGluZSAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2hpcHBvcmkgTWluY2hvXFxcIiwgc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XFxufVxcblxcbi8qIFRPRE86IFJldmlzaXQgc2Nyb2xsaW5nIHN0eWxlcywgdGVzdCBvbiBtb2JpbGUgKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIC1tcy1zY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG4gICAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMC43NXJlbSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAuNzVyZW0pO1xcbiAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMC43NXJlbSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAuNzVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLyogVHlwb2dyYXBoeSAqL1xcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogNS42NTNyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDIuODI3cmVtLCA3dncsIDUuNjUzcmVtKTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjk5OHJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS45OTlyZW0sIDQuOTV2dywgMy45OThyZW0pO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIuODI3cmVtO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDEuOTk5cmVtO1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuNDE0cmVtO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXG59XFxuXFxuc3ZnIHtcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcbn1cXG5cXG4vKiBUYWJsZXMgKi9cXG4udGFibGUtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbnRhYmxlIHtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxufVxcblxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG50aDpsYXN0LWNoaWxkLFxcbnRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xcbn1cXG5cXG50aCB7XFxuICBjb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbnRkIHtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuW2NsYXNzKj1cXFwiaGVyby1cXFwiXSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uaGVyby0xIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWNvYmFsdC1ibHVlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMiB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlcm8tMyB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1tYW5nby1vcmFuZ2UpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBDb21wb25lbnRzICovXFxuLnBlcm1hbGluayB7XFxuICAtLWljb24tc2l6ZTogMS41cmVtO1xcbiAgLS1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MyU7IC8qIFNsaWdodCB2aXN1YWwgb2Zmc2V0IHRvIGFjY291bnQgZm9yIGZvbnQgKi9cXG4gIGxlZnQ6IGNhbGMoKHZhcigtLWljb24tc2l6ZSkgKyB2YXIoLS1wYWRkaW5nKSAqIDMpICogLTEpO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDAuMjVyZW0pO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG46aG92ZXIgPiAucGVybWFsaW5rIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhO0FBQ2I7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBLG1EQUFtRDtBQUNuRDs7RUFFRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsaUNBQTZCO01BQTdCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkVBQW1FO1VBQW5FLG1FQUFtRTtFQUNuRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1Isb0JBQW9CO0FBQ3RCOztBQUVBLGVBQWU7QUFDZjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOzs7OztFQUtFLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLDRDQUE0QztBQUM5Qzs7QUFFQTs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsUUFBUSxFQUFFLDZDQUE2QztFQUN2RCx3REFBd0Q7RUFDeEQsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLFVBQVU7RUFDVixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJhc2VsaW5lICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMS42NTtcXG59XFxuXFxuLyogVE9ETzogUmV2aXNpdCBzY3JvbGxpbmcgc3R5bGVzLCB0ZXN0IG9uIG1vYmlsZSAqL1xcbmh0bWwsXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwLjc1cmVtIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMC43NXJlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBUeXBvZ3JhcGh5ICovXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiA1LjY1M3JlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi44MjdyZW0sIDd2dywgNS42NTNyZW0pO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDMuOTk4cmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjk5OXJlbSwgNC45NXZ3LCAzLjk5OHJlbSk7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMi44MjdyZW07XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS45OTlyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS40MTRyZW07XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcbn1cXG5cXG5zdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxufVxcblxcbi8qIFRhYmxlcyAqL1xcbi50YWJsZS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxudGFibGUge1xcbiAgbWFyZ2luOiAycmVtIDA7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG59XFxuXFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRoIHtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxudGQge1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjQxNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEhlcm8gKi9cXG5bY2xhc3MqPVxcXCJoZXJvLVxcXCJdIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5oZXJvLTEge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tY29iYWx0LWJsdWUpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVyby0yIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbiAgLS10ZXh0LWNvbG9yOiAjZWVlO1xcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xcbiAgLS1oZWFkaW5nLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVyby0zIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLW1hbmdvLW9yYW5nZSk7XFxuICAtLXRleHQtY29sb3I6ICNlZWU7XFxuICAtLWxpbmstY29sb3I6ICNmZmY7XFxuICAtLWhlYWRpbmctY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIENvbXBvbmVudHMgKi9cXG4ucGVybWFsaW5rIHtcXG4gIC0taWNvbi1zaXplOiAxLjVyZW07XFxuICAtLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUzJTsgLyogU2xpZ2h0IHZpc3VhbCBvZmZzZXQgdG8gYWNjb3VudCBmb3IgZm9udCAqL1xcbiAgbGVmdDogY2FsYygodmFyKC0taWNvbi1zaXplKSArIHZhcigtLXBhZGRpbmcpICogMykgKiAtMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoMC4yNXJlbSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbjpob3ZlciA+IC5wZXJtYWxpbmsge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoMCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/global.css\n");

/***/ })

})