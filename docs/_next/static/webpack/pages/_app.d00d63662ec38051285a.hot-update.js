webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/globals.css":
/*!********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./src/styles/globals.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  -webkit-clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n          clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: var(--font-size--h1);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: var(--font-size--h2);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n  font-size: var(--font-size--h3);\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n  font-size: var(--font-size--h4);\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n}\\n\\na,\\nbutton {\\n  display: inline-block;\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n  color: inherit;\\n  background-color: transparent;\\n  font-size: inherit;\\n  line-height: unset;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\nbutton {\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n  cursor: pointer;\\n  border: none;\\n}\\n\\nhr {\\n  border: none;\\n  height: 1px;\\n  background-color: var(--accent-color);\\n  margin: 2rem calc(var(--spacer) * -1);\\n}\\n\\n/* Tables */\\n.table-wrapper {\\n  margin: 2rem calc(var(--spacer) * -1);\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n  width: calc(100% + var(--spacer) * 2);\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\ntable {\\n  width: 100%;\\n  padding: 1rem var(--spacer);\\n}\\n\\nth,\\ntd {\\n  width: -webkit-max-content;\\n  width: -moz-max-content;\\n  width: max-content;\\n  white-space: nowrap;\\n  padding: 0.5rem 1.414rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n.hero {\\n  --caption-color: rgba(255, 255, 255, 0.6);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n#overview {\\n  --bg-color: var(--cobalt-blue);\\n}\\n\\n#automotive {\\n  --bg-color: var(--dark-slate);\\n}\\n\\n#consumer-tech {\\n  --bg-color: var(--mango-orange);\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  transform: translateY(-50%) translateX(0.25rem);\\n  opacity: 0;\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n:hover > .permalink,\\n:focus-within > .permalink {\\n  transform: translateY(-50%) translateX(0);\\n  opacity: 1;\\n}\\n\\n/* Links */\\n.link {\\n  box-shadow: inset 0 -1px 0 0 var(--underline-color),\\n    0 0 0 0 var(--underline-color);\\n  transition: 0.3s ease;\\n}\\n\\n.link:hover {\\n  box-shadow: inset 0 -1px 0 0 var(--link-color), 0 1px 0 0 var(--link-color);\\n}\\n\\n.link.primary {\\n  --underline-color: var(--caption-color);\\n  --link-color: var(--heading-color);\\n\\n  color: var(--link-color);\\n  font-weight: 700;\\n}\\n\\n.link.secondary {\\n  --underline-color: var(--accent-color);\\n  --link-color: var(--text-color);\\n}\\n\\n/* Buttons */\\n.button {\\n  padding: 0.707rem 1.414rem;\\n  border-radius: 5px;\\n  display: inline-flex;\\n  align-items: center;\\n  background: var(--bg-color);\\n  color: var(--link-color);\\n  transition: 0.3s ease;\\n}\\n\\n.button.primary {\\n  --link-color: #fff;\\n\\n  font-weight: 700;\\n  font-size: var(--font-size--h5);\\n  transform: scale(1);\\n  box-shadow: 0 0 0 0 #333;\\n  z-index: 10;\\n}\\n\\n.button.primary:hover {\\n  --bg-color: #333;\\n\\n  transform: scale(1.1);\\n  box-shadow: 0 0 5px 0 #333;\\n}\\n\\n.button.secondary {\\n  --bg-color: var(--accent-color);\\n}\\n\\n.button.secondary:hover {\\n  --bg-color: var(--caption-color);\\n}\\n\\n.button .icon:first-child {\\n  margin-inline-end: 0.707rem;\\n  margin-inline-start: -0.25em;\\n}\\n\\n.button .icon:last-child {\\n  margin-inline-start: 0.707rem;\\n  margin-inline-end: -0.25em;\\n}\\n\\n.button .icon:only-child {\\n  margin: 0 -0.707rem;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"/* Baseline */\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.65;\\n}\\n\\nhtml,\\nbody {\\n  font-size: 100%;\\n  color: var(--text-color);\\n  background-color: var(--bg-color);\\n  overflow-y: auto;\\n  scroll-behavior: smooth;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\nsection {\\n  padding: var(--spacer);\\n}\\n\\nfooter {\\n  clip-path: polygon(0.75rem 0, 100% 0, 100% 100%, 0 100%, 0 0.75rem);\\n  background-color: var(--bg-color);\\n  position: fixed;\\n  bottom: 0;\\n  right: 0;\\n  padding: 0.5rem 1rem;\\n}\\n\\n/* Typography */\\np {\\n  margin-bottom: 1rem;\\n  max-width: 50ch;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  position: relative;\\n  font-family: \\\"Shippori Mincho\\\", serif;\\n  font-weight: 700;\\n  line-height: 1em;\\n  margin-bottom: 1rem;\\n  color: var(--heading-color);\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 5.653rem;\\n  font-size: var(--font-size--h1);\\n}\\n\\nh2 {\\n  font-size: 3.998rem;\\n  font-size: var(--font-size--h2);\\n}\\n\\nh3 {\\n  font-size: 2.827rem;\\n  font-size: var(--font-size--h3);\\n}\\n\\nh4 {\\n  font-size: 1.999rem;\\n  font-size: var(--font-size--h4);\\n}\\n\\nh5 {\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n}\\n\\na,\\nbutton {\\n  display: inline-block;\\n  appearance: none;\\n  color: inherit;\\n  background-color: transparent;\\n  font-size: inherit;\\n  line-height: unset;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nsvg {\\n  height: var(--icon-size);\\n  width: var(--icon-size);\\n}\\n\\nbutton {\\n  appearance: none;\\n  cursor: pointer;\\n  border: none;\\n}\\n\\nhr {\\n  border: none;\\n  height: 1px;\\n  background-color: var(--accent-color);\\n  margin: 2rem calc(var(--spacer) * -1);\\n}\\n\\n/* Tables */\\n.table-wrapper {\\n  margin: 2rem calc(var(--spacer) * -1);\\n  border-top: 1px solid var(--accent-color);\\n  border-bottom: 1px solid var(--accent-color);\\n  width: calc(100% + var(--spacer) * 2);\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n\\ntable {\\n  width: 100%;\\n  padding: 1rem var(--spacer);\\n}\\n\\nth,\\ntd {\\n  width: max-content;\\n  white-space: nowrap;\\n  padding: 0.5rem 1.414rem;\\n}\\n\\nth:first-child,\\ntd:first-child {\\n  padding-inline-start: 0;\\n}\\n\\nth:last-child,\\ntd:last-child {\\n  padding-inline-end: 0;\\n}\\n\\nth {\\n  color: var(--caption-color);\\n  text-align: start;\\n  font-weight: 400;\\n}\\n\\ntd {\\n  color: var(--heading-color);\\n  font-size: 1.414rem;\\n  font-size: var(--font-size--h5);\\n  font-weight: 700;\\n}\\n\\n/* Hero */\\n.hero {\\n  --caption-color: rgba(255, 255, 255, 0.6);\\n  --text-color: #eee;\\n  --link-color: #fff;\\n  --heading-color: #fff;\\n\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: center;\\n  background-color: var(--bg-color);\\n  color: var(--text-color);\\n}\\n\\n#overview {\\n  --bg-color: var(--cobalt-blue);\\n}\\n\\n#automotive {\\n  --bg-color: var(--dark-slate);\\n}\\n\\n#consumer-tech {\\n  --bg-color: var(--mango-orange);\\n}\\n\\n/* Components */\\n.permalink {\\n  --icon-size: 1.5rem;\\n  --padding: 0.25rem;\\n\\n  position: absolute;\\n  top: 53%; /* Slight visual offset to account for font */\\n  left: calc((var(--icon-size) + var(--padding) * 3) * -1);\\n  display: inline-flex;\\n  padding: var(--padding);\\n  line-height: 0;\\n  background-color: rgba(150, 150, 150, 0.1);\\n  border-radius: 2rem;\\n  transform: translateY(-50%) translateX(0.25rem);\\n  opacity: 0;\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n:hover > .permalink,\\n:focus-within > .permalink {\\n  transform: translateY(-50%) translateX(0);\\n  opacity: 1;\\n}\\n\\n/* Links */\\n.link {\\n  box-shadow: inset 0 -1px 0 0 var(--underline-color),\\n    0 0 0 0 var(--underline-color);\\n  transition: 0.3s ease;\\n}\\n\\n.link:hover {\\n  box-shadow: inset 0 -1px 0 0 var(--link-color), 0 1px 0 0 var(--link-color);\\n}\\n\\n.link.primary {\\n  --underline-color: var(--caption-color);\\n  --link-color: var(--heading-color);\\n\\n  color: var(--link-color);\\n  font-weight: 700;\\n}\\n\\n.link.secondary {\\n  --underline-color: var(--accent-color);\\n  --link-color: var(--text-color);\\n}\\n\\n/* Buttons */\\n.button {\\n  padding: 0.707rem 1.414rem;\\n  border-radius: 5px;\\n  display: inline-flex;\\n  align-items: center;\\n  background: var(--bg-color);\\n  color: var(--link-color);\\n  transition: 0.3s ease;\\n}\\n\\n.button.primary {\\n  --link-color: #fff;\\n\\n  font-weight: 700;\\n  font-size: var(--font-size--h5);\\n  transform: scale(1);\\n  box-shadow: 0 0 0 0 #333;\\n  z-index: 10;\\n}\\n\\n.button.primary:hover {\\n  --bg-color: #333;\\n\\n  transform: scale(1.1);\\n  box-shadow: 0 0 5px 0 #333;\\n}\\n\\n.button.secondary {\\n  --bg-color: var(--accent-color);\\n}\\n\\n.button.secondary:hover {\\n  --bg-color: var(--caption-color);\\n}\\n\\n.button .icon:first-child {\\n  margin-inline-end: 0.707rem;\\n  margin-inline-start: -0.25em;\\n}\\n\\n.button .icon:last-child {\\n  margin-inline-start: 0.707rem;\\n  margin-inline-end: -0.25em;\\n}\\n\\n.button .icon:only-child {\\n  margin: 0 -0.707rem;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz8yYTQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2tHO0FBQ2xHLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxzQkFBc0IsMkJBQTJCLDRDQUE0QyxjQUFjLGVBQWUsc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsc0NBQXNDLHFCQUFxQiw0QkFBNEIsc0NBQXNDLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxZQUFZLGdGQUFnRixnRkFBZ0Ysc0NBQXNDLG9CQUFvQixjQUFjLGFBQWEseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyw0QkFBNEIsdUJBQXVCLDRDQUE0QyxxQkFBcUIscUJBQXFCLHdCQUF3QixnQ0FBZ0MsR0FBRyxRQUFRLGtCQUFrQix3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsUUFBUSx3QkFBd0Isb0NBQW9DLEdBQUcsZ0JBQWdCLDBCQUEwQiw2QkFBNkIsNkJBQTZCLDZCQUE2QixtQkFBbUIsa0NBQWtDLHVCQUF1Qix1QkFBdUIsR0FBRyxPQUFPLDBCQUEwQixHQUFHLFNBQVMsNkJBQTZCLDRCQUE0QixHQUFHLFlBQVksNkJBQTZCLDZCQUE2Qiw2QkFBNkIsb0JBQW9CLGlCQUFpQixHQUFHLFFBQVEsaUJBQWlCLGdCQUFnQiwwQ0FBMEMsMENBQTBDLEdBQUcsa0NBQWtDLDBDQUEwQyw4Q0FBOEMsaURBQWlELDBDQUEwQyxxQkFBcUIsc0NBQXNDLEdBQUcsV0FBVyxnQkFBZ0IsZ0NBQWdDLEdBQUcsYUFBYSwrQkFBK0IsNEJBQTRCLHVCQUF1Qix3QkFBd0IsNkJBQTZCLEdBQUcscUNBQXFDLDRCQUE0QixHQUFHLG1DQUFtQywwQkFBMEIsR0FBRyxRQUFRLGdDQUFnQyxzQkFBc0IscUJBQXFCLEdBQUcsUUFBUSxnQ0FBZ0Msd0JBQXdCLG9DQUFvQyxxQkFBcUIsR0FBRyx1QkFBdUIsOENBQThDLHVCQUF1Qix1QkFBdUIsMEJBQTBCLG9CQUFvQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix1QkFBdUIsNEJBQTRCLHNDQUFzQyw2QkFBNkIsR0FBRyxlQUFlLG1DQUFtQyxHQUFHLGlCQUFpQixrQ0FBa0MsR0FBRyxvQkFBb0Isb0NBQW9DLEdBQUcsa0NBQWtDLHdCQUF3Qix1QkFBdUIseUJBQXlCLGFBQWEsNEdBQTRHLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLCtDQUErQyx3QkFBd0Isb0RBQW9ELGVBQWUsdURBQXVELEdBQUcsc0RBQXNELDhDQUE4QyxlQUFlLEdBQUcsd0JBQXdCLDZGQUE2RiwwQkFBMEIsR0FBRyxpQkFBaUIsZ0ZBQWdGLEdBQUcsbUJBQW1CLDRDQUE0Qyx1Q0FBdUMsK0JBQStCLHFCQUFxQixHQUFHLHFCQUFxQiwyQ0FBMkMsb0NBQW9DLEdBQUcsNEJBQTRCLCtCQUErQix1QkFBdUIseUJBQXlCLHdCQUF3QixnQ0FBZ0MsNkJBQTZCLDBCQUEwQixHQUFHLHFCQUFxQix1QkFBdUIsdUJBQXVCLG9DQUFvQyx3QkFBd0IsNkJBQTZCLGdCQUFnQixHQUFHLDJCQUEyQixxQkFBcUIsNEJBQTRCLCtCQUErQixHQUFHLHVCQUF1QixvQ0FBb0MsR0FBRyw2QkFBNkIscUNBQXFDLEdBQUcsK0JBQStCLGdDQUFnQyxpQ0FBaUMsR0FBRyw4QkFBOEIsa0NBQWtDLCtCQUErQixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyxTQUFTLDRGQUE0RixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLE9BQU8sU0FBUyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksY0FBYyxhQUFhLHVCQUF1QixhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSw2Q0FBNkMsMkJBQTJCLDRDQUE0QyxjQUFjLGVBQWUsc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsc0NBQXNDLHFCQUFxQiw0QkFBNEIsc0NBQXNDLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxZQUFZLHdFQUF3RSxzQ0FBc0Msb0JBQW9CLGNBQWMsYUFBYSx5QkFBeUIsR0FBRyx5QkFBeUIsd0JBQXdCLG9CQUFvQixHQUFHLDRCQUE0Qix1QkFBdUIsNENBQTRDLHFCQUFxQixxQkFBcUIsd0JBQXdCLGdDQUFnQyxHQUFHLFFBQVEsa0JBQWtCLHdCQUF3QixvQ0FBb0MsR0FBRyxRQUFRLHdCQUF3QixvQ0FBb0MsR0FBRyxRQUFRLHdCQUF3QixvQ0FBb0MsR0FBRyxRQUFRLHdCQUF3QixvQ0FBb0MsR0FBRyxRQUFRLHdCQUF3QixvQ0FBb0MsR0FBRyxnQkFBZ0IsMEJBQTBCLHFCQUFxQixtQkFBbUIsa0NBQWtDLHVCQUF1Qix1QkFBdUIsR0FBRyxPQUFPLDBCQUEwQixHQUFHLFNBQVMsNkJBQTZCLDRCQUE0QixHQUFHLFlBQVkscUJBQXFCLG9CQUFvQixpQkFBaUIsR0FBRyxRQUFRLGlCQUFpQixnQkFBZ0IsMENBQTBDLDBDQUEwQyxHQUFHLGtDQUFrQywwQ0FBMEMsOENBQThDLGlEQUFpRCwwQ0FBMEMscUJBQXFCLHNDQUFzQyxHQUFHLFdBQVcsZ0JBQWdCLGdDQUFnQyxHQUFHLGFBQWEsdUJBQXVCLHdCQUF3Qiw2QkFBNkIsR0FBRyxxQ0FBcUMsNEJBQTRCLEdBQUcsbUNBQW1DLDBCQUEwQixHQUFHLFFBQVEsZ0NBQWdDLHNCQUFzQixxQkFBcUIsR0FBRyxRQUFRLGdDQUFnQyx3QkFBd0Isb0NBQW9DLHFCQUFxQixHQUFHLHVCQUF1Qiw4Q0FBOEMsdUJBQXVCLHVCQUF1QiwwQkFBMEIsb0JBQW9CLGdCQUFnQixrQkFBa0IsMkJBQTJCLHVCQUF1Qiw0QkFBNEIsc0NBQXNDLDZCQUE2QixHQUFHLGVBQWUsbUNBQW1DLEdBQUcsaUJBQWlCLGtDQUFrQyxHQUFHLG9CQUFvQixvQ0FBb0MsR0FBRyxrQ0FBa0Msd0JBQXdCLHVCQUF1Qix5QkFBeUIsYUFBYSw0R0FBNEcseUJBQXlCLDRCQUE0QixtQkFBbUIsK0NBQStDLHdCQUF3QixvREFBb0QsZUFBZSx1REFBdUQsR0FBRyxzREFBc0QsOENBQThDLGVBQWUsR0FBRyx3QkFBd0IsNkZBQTZGLDBCQUEwQixHQUFHLGlCQUFpQixnRkFBZ0YsR0FBRyxtQkFBbUIsNENBQTRDLHVDQUF1QywrQkFBK0IscUJBQXFCLEdBQUcscUJBQXFCLDJDQUEyQyxvQ0FBb0MsR0FBRyw0QkFBNEIsK0JBQStCLHVCQUF1Qix5QkFBeUIsd0JBQXdCLGdDQUFnQyw2QkFBNkIsMEJBQTBCLEdBQUcscUJBQXFCLHVCQUF1Qix1QkFBdUIsb0NBQW9DLHdCQUF3Qiw2QkFBNkIsZ0JBQWdCLEdBQUcsMkJBQTJCLHFCQUFxQiw0QkFBNEIsK0JBQStCLEdBQUcsdUJBQXVCLG9DQUFvQyxHQUFHLDZCQUE2QixxQ0FBcUMsR0FBRywrQkFBK0IsZ0NBQWdDLGlDQUFpQyxHQUFHLDhCQUE4QixrQ0FBa0MsK0JBQStCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHFCQUFxQjtBQUN0OFk7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEJhc2VsaW5lICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMS42NTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMC43NXJlbSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAuNzVyZW0pO1xcbiAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMC43NXJlbSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAuNzVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLyogVHlwb2dyYXBoeSAqL1xcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogNS42NTNyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDEpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDMuOTk4cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWgyKTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAyLjgyN3JlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oMyk7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS45OTlyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDQpO1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuNDE0cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWg1KTtcXG59XFxuXFxuYSxcXG5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnN2ZyB7XFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgbWFyZ2luOiAycmVtIGNhbGModmFyKC0tc3BhY2VyKSAqIC0xKTtcXG59XFxuXFxuLyogVGFibGVzICovXFxuLnRhYmxlLXdyYXBwZXIge1xcbiAgbWFyZ2luOiAycmVtIGNhbGModmFyKC0tc3BhY2VyKSAqIC0xKTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB3aWR0aDogY2FsYygxMDAlICsgdmFyKC0tc3BhY2VyKSAqIDIpO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxudGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIHZhcigtLXNwYWNlcik7XFxufVxcblxcbnRoLFxcbnRkIHtcXG4gIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcGFkZGluZzogMC41cmVtIDEuNDE0cmVtO1xcbn1cXG5cXG50aDpmaXJzdC1jaGlsZCxcXG50ZDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG59XFxuXFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcXG59XFxuXFxudGgge1xcbiAgY29sb3I6IHZhcigtLWNhcHRpb24tY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG50ZCB7XFxuICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XFxuICBmb250LXNpemU6IDEuNDE0cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWg1KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEhlcm8gKi9cXG4uaGVybyB7XFxuICAtLWNhcHRpb24tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gIC0tdGV4dC1jb2xvcjogI2VlZTtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGluZy1jb2xvcjogI2ZmZjtcXG5cXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbiNvdmVydmlldyB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1jb2JhbHQtYmx1ZSk7XFxufVxcblxcbiNhdXRvbW90aXZlIHtcXG4gIC0tYmctY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbn1cXG5cXG4jY29uc3VtZXItdGVjaCB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1tYW5nby1vcmFuZ2UpO1xcbn1cXG5cXG4vKiBDb21wb25lbnRzICovXFxuLnBlcm1hbGluayB7XFxuICAtLWljb24tc2l6ZTogMS41cmVtO1xcbiAgLS1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MyU7IC8qIFNsaWdodCB2aXN1YWwgb2Zmc2V0IHRvIGFjY291bnQgZm9yIGZvbnQgKi9cXG4gIGxlZnQ6IGNhbGMoKHZhcigtLWljb24tc2l6ZSkgKyB2YXIoLS1wYWRkaW5nKSAqIDMpICogLTEpO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDAuMjVyZW0pO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG46aG92ZXIgPiAucGVybWFsaW5rLFxcbjpmb2N1cy13aXRoaW4gPiAucGVybWFsaW5rIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogTGlua3MgKi9cXG4ubGluayB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwIHZhcigtLXVuZGVybGluZS1jb2xvciksXFxuICAgIDAgMCAwIDAgdmFyKC0tdW5kZXJsaW5lLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLmxpbms6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCB2YXIoLS1saW5rLWNvbG9yKSwgMCAxcHggMCAwIHZhcigtLWxpbmstY29sb3IpO1xcbn1cXG5cXG4ubGluay5wcmltYXJ5IHtcXG4gIC0tdW5kZXJsaW5lLWNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIC0tbGluay1jb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XFxuXFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubGluay5zZWNvbmRhcnkge1xcbiAgLS11bmRlcmxpbmUtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAtLWxpbmstY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4vKiBCdXR0b25zICovXFxuLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjcwN3JlbSAxLjQxNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLmJ1dHRvbi5wcmltYXJ5IHtcXG4gIC0tbGluay1jb2xvcjogI2ZmZjtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIzMzMztcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uYnV0dG9uLnByaW1hcnk6aG92ZXIge1xcbiAgLS1iZy1jb2xvcjogIzMzMztcXG5cXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCAjMzMzO1xcbn1cXG5cXG4uYnV0dG9uLnNlY29uZGFyeSB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4uYnV0dG9uLnNlY29uZGFyeTpob3ZlciB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbiAuaWNvbjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4taW5saW5lLWVuZDogMC43MDdyZW07XFxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAtMC4yNWVtO1xcbn1cXG5cXG4uYnV0dG9uIC5pY29uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMC43MDdyZW07XFxuICBtYXJnaW4taW5saW5lLWVuZDogLTAuMjVlbTtcXG59XFxuXFxuLmJ1dHRvbiAuaWNvbjpvbmx5LWNoaWxkIHtcXG4gIG1hcmdpbjogMCAtMC43MDdyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7QUFDYjtFQUNFLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyRUFBbUU7VUFBbkUsbUVBQW1FO0VBQ25FLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixvQkFBb0I7QUFDdEI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7Ozs7O0VBS0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMscUNBQXFDO0FBQ3ZDOztBQUVBLFdBQVc7QUFDWDtFQUNFLHFDQUFxQztFQUNyQyx5Q0FBeUM7RUFDekMsNENBQTRDO0VBQzVDLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7O0VBRXJCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLFFBQVEsRUFBRSw2Q0FBNkM7RUFDdkQsd0RBQXdEO0VBQ3hELG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLFVBQVU7RUFDVixrREFBa0Q7QUFDcEQ7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLFVBQVU7QUFDWjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRTtrQ0FDZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtDQUFrQzs7RUFFbEMsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QywrQkFBK0I7QUFDakM7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQmFzZWxpbmUgKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlNoaXBwb3JpIE1pbmNob1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxufVxcblxcbmZvb3RlciB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMC43NXJlbSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAuNzVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLyogVHlwb2dyYXBoeSAqL1xcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaGlwcG9yaSBNaW5jaG9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogNS42NTNyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDEpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDMuOTk4cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWgyKTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAyLjgyN3JlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oMyk7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS45OTlyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0taDQpO1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuNDE0cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWg1KTtcXG59XFxuXFxuYSxcXG5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogdW5zZXQ7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5zdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBtYXJnaW46IDJyZW0gY2FsYyh2YXIoLS1zcGFjZXIpICogLTEpO1xcbn1cXG5cXG4vKiBUYWJsZXMgKi9cXG4udGFibGUtd3JhcHBlciB7XFxuICBtYXJnaW46IDJyZW0gY2FsYyh2YXIoLS1zcGFjZXIpICogLTEpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyB2YXIoLS1zcGFjZXIpICogMik7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG50YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gdmFyKC0tc3BhY2VyKTtcXG59XFxuXFxudGgsXFxudGQge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjQxNHJlbTtcXG59XFxuXFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRoIHtcXG4gIGNvbG9yOiB2YXIoLS1jYXB0aW9uLWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxudGQge1xcbiAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjQxNHJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1oNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuLmhlcm8ge1xcbiAgLS1jYXB0aW9uLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAtLXRleHQtY29sb3I6ICNlZWU7XFxuICAtLWxpbmstY29sb3I6ICNmZmY7XFxuICAtLWhlYWRpbmctY29sb3I6ICNmZmY7XFxuXFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4jb3ZlcnZpZXcge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tY29iYWx0LWJsdWUpO1xcbn1cXG5cXG4jYXV0b21vdGl2ZSB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG59XFxuXFxuI2NvbnN1bWVyLXRlY2gge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tbWFuZ28tb3JhbmdlKTtcXG59XFxuXFxuLyogQ29tcG9uZW50cyAqL1xcbi5wZXJtYWxpbmsge1xcbiAgLS1pY29uLXNpemU6IDEuNXJlbTtcXG4gIC0tcGFkZGluZzogMC4yNXJlbTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTMlOyAvKiBTbGlnaHQgdmlzdWFsIG9mZnNldCB0byBhY2NvdW50IGZvciBmb250ICovXFxuICBsZWZ0OiBjYWxjKCh2YXIoLS1pY29uLXNpemUpICsgdmFyKC0tcGFkZGluZykgKiAzKSAqIC0xKTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgwLjI1cmVtKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuOmhvdmVyID4gLnBlcm1hbGluayxcXG46Zm9jdXMtd2l0aGluID4gLnBlcm1hbGluayB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIExpbmtzICovXFxuLmxpbmsge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCB2YXIoLS11bmRlcmxpbmUtY29sb3IpLFxcbiAgICAwIDAgMCAwIHZhcigtLXVuZGVybGluZS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgdmFyKC0tbGluay1jb2xvciksIDAgMXB4IDAgMCB2YXIoLS1saW5rLWNvbG9yKTtcXG59XFxuXFxuLmxpbmsucHJpbWFyeSB7XFxuICAtLXVuZGVybGluZS1jb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxuICAtLWxpbmstY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcblxcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmxpbmsuc2Vjb25kYXJ5IHtcXG4gIC0tdW5kZXJsaW5lLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgLS1saW5rLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLyogQnV0dG9ucyAqL1xcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMC43MDdyZW0gMS40MTRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcbi5idXR0b24ucHJpbWFyeSB7XFxuICAtLWxpbmstY29sb3I6ICNmZmY7XFxuXFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWg1KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwICMzMzM7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcXG4gIC0tYmctY29sb3I6ICMzMzM7XFxuXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgIzMzMztcXG59XFxuXFxuLmJ1dHRvbi5zZWNvbmRhcnkge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbi5zZWNvbmRhcnk6aG92ZXIge1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tY2FwdGlvbi1jb2xvcik7XFxufVxcblxcbi5idXR0b24gLmljb246Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDAuNzA3cmVtO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogLTAuMjVlbTtcXG59XFxuXFxuLmJ1dHRvbiAuaWNvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDAuNzA3cmVtO1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IC0wLjI1ZW07XFxufVxcblxcbi5idXR0b24gLmljb246b25seS1jaGlsZCB7XFxuICBtYXJnaW46IDAgLTAuNzA3cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/globals.css\n");

/***/ })

})