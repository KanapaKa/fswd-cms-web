"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/CardMedia/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/index.js\");\n/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardHeader */ \"./node_modules/@mui/material/CardHeader/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n\n\n// import parse from 'html-react-parser';\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar PostCard = function(param) {\n    var posts = param.posts, users = param.users;\n    var _this1 = _this;\n    {\n        posts.map(function(post, i) {\n            // console.log(post.title)\n            {\n                users.map(function(user, i) {\n                    if (user.id === post.author) {\n                        console.log(user.name);\n                    }\n                });\n            }\n        });\n    }\n    // let title = post.title.rendered\n    // let contentIndex = content.search(\"</p>\")+4;\n    // let result = content.slice(0, contentIndex);\n    // console.log(result)\n    // let pic = post.content.rendered\n    // let picIndex = pic.search(\"</p>\")+4;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: posts.map(function(post, i1) {\n            var _this2 = _this1;\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    maxWidth: 345,\n                    minHeight: 350\n                },\n                spacing: 0,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        component: \"img\",\n                        width: \"100%\",\n                        image: \"https://fswd-wp.devnss.com/wp-content/uploads/2022/02/a0e85189-0ebd-3e4b-a810-86dd04f7cda4.jpg\",\n                        alt: \"green iguana\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            height: 90,\n                            flexGrow: 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h6\",\n                            component: \"span\",\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this1),\n                    users.map(function(user, i) {\n                        if (user.id === post.author) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        bgcolor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__.red[500]\n                                    },\n                                    \"aria-label\": \"recipe\",\n                                    children: \"R\"\n                                }, void 0, false, void 0, void 0)\n                            }, i, false, {\n                                fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, _this2));\n                        }\n                    })\n                ]\n            }, i1, true, {\n                fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false));\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDeEMsRUFBeUM7QUFDSjtBQUNjO0FBQ0o7QUFDRTtBQUNSO0FBQ1E7QUFDQTtBQUNQOztBQUUxQyxHQUFLLENBQUNVLFFBQVEsR0FBRyxRQUFRLFFBQWMsQ0FBQztRQUFwQkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEtBQUssU0FBTEEsS0FBSzs7SUFDOUIsQ0FBQ0Q7UUFBQUEsS0FBSyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLENBQUMsRUFBSyxDQUFDO1lBQ3ZCLEVBQTBCO1lBQzFCLENBQUNIO2dCQUFBQSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBHLElBQUksRUFBRUQsQ0FBQyxFQUFLLENBQUM7b0JBQ3JCLEVBQUUsRUFBQ0MsSUFBSSxDQUFDQyxFQUFFLEtBQUtILElBQUksQ0FBQ0ksTUFBTSxFQUFFLENBQUM7d0JBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDSyxJQUFJO29CQUN6QixDQUFDO2dCQUNMLENBQUM7WUFBQyxDQUFDO1FBRUwsQ0FBQztJQUFDLENBQUM7SUFDSCxFQUFrQztJQUNsQyxFQUErQztJQUMvQyxFQUErQztJQUUvQyxFQUFzQjtJQUV0QixFQUFrQztJQUNsQyxFQUF1QztJQUV2QyxNQUFNO2tCQUVEVixLQUFLLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsRUFBQyxFQUFLLENBQUM7O3dGQUN0QmIsMERBQUk7Z0JBQVNvQixFQUFFLEVBQUUsQ0FBQztvQkFBQ0MsUUFBUSxFQUFFLEdBQUc7b0JBQUVDLFNBQVMsRUFBRSxHQUFHO2dCQUFDLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDOztnR0FDNURyQiwrREFBUzt3QkFDUnNCLFNBQVMsRUFBQyxDQUFLO3dCQUVmQyxLQUFLLEVBQUMsQ0FBTTt3QkFDWkMsS0FBSyxFQUFDLENBQWdHO3dCQUN0R0MsR0FBRyxFQUFDLENBQWM7Ozs7OztnR0FFbkIxQixpRUFBVzt3QkFBQ21CLEVBQUUsRUFBRSxDQUFDOzRCQUFDUSxNQUFNLEVBQUUsRUFBRTs0QkFBRUMsUUFBUSxFQUFFLENBQUM7d0JBQUMsQ0FBQzs4R0FDekMxQixnRUFBVTs0QkFBQzJCLFlBQVk7NEJBQUNDLE9BQU8sRUFBQyxDQUFJOzRCQUFDUCxTQUFTLEVBQUMsQ0FBTTtzQ0FFbkRaLElBQUksQ0FBQ29CLEtBQUs7Ozs7Ozs7Ozs7O29CQUdkdEIsS0FBSyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQRyxJQUFJLEVBQUVELENBQUMsRUFBSyxDQUFDO3dCQUMzQixFQUFFLEVBQUNDLElBQUksQ0FBQ0MsRUFBRSxLQUFLSCxJQUFJLENBQUNJLE1BQU0sRUFBRSxDQUFDOzRCQUN2QixNQUFNLDZFQUNIVixnRUFBVTtnQ0FFVDJCLE1BQU0sOEVBQ0g3Qiw0REFBTTtvQ0FBQ2dCLEVBQUUsRUFBRSxDQUFDO3dDQUFDYyxPQUFPLEVBQUUzQiwwREFBUTtvQ0FBQyxDQUFDO29DQUFFNEIsQ0FBVSxhQUFDLENBQVE7OENBQUMsQ0FFdkQ7OytCQUpHdEIsQ0FBQzs7Ozs7d0JBVVosQ0FBQztvQkFDSCxDQUFDOztlQTdCUUEsRUFBQzs7Ozs7UUErQnBCLENBQUM7O0FBR0QsQ0FBQztLQXhES0wsUUFBUTtBQTBEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdENhcmQuanM/YTE4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkSGVhZGVyXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0cywgdXNlcnMgfSkgPT4ge1xyXG4gIHtwb3N0cy5tYXAoKHBvc3QsIGkpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBvc3QudGl0bGUpXHJcbiAgICB7dXNlcnMubWFwKCh1c2VyLCBpKSA9PiB7XHJcbiAgICAgICAgaWYodXNlci5pZCA9PT0gcG9zdC5hdXRob3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlci5uYW1lKVxyXG4gICAgICAgIH1cclxuICAgIH0pfVxyXG4gICAgXHJcbiAgfSl9IFxyXG4gIC8vIGxldCB0aXRsZSA9IHBvc3QudGl0bGUucmVuZGVyZWRcclxuICAvLyBsZXQgY29udGVudEluZGV4ID0gY29udGVudC5zZWFyY2goXCI8L3A+XCIpKzQ7XHJcbiAgLy8gbGV0IHJlc3VsdCA9IGNvbnRlbnQuc2xpY2UoMCwgY29udGVudEluZGV4KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAvLyBsZXQgcGljID0gcG9zdC5jb250ZW50LnJlbmRlcmVkXHJcbiAgLy8gbGV0IHBpY0luZGV4ID0gcGljLnNlYXJjaChcIjwvcD5cIikrNDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGkpID0+IHtcclxuICAgICAgICA8Q2FyZCBrZXk9e2l9IHN4PXt7IG1heFdpZHRoOiAzNDUsIG1pbkhlaWdodDogMzUwIH19IHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG5cclxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2Zzd2Qtd3AuZGV2bnNzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMi9hMGU4NTE4OS0wZWJkLTNlNGItYTgxMC04NmRkMDRmN2NkYTQuanBnXCJcclxuICAgICAgICAgICAgYWx0PVwiZ3JlZW4gaWd1YW5hXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgaGVpZ2h0OiA5MCwgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcblxyXG4gICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAge3VzZXJzLm1hcCgodXNlciwgaSkgPT4ge1xyXG4gICAgICAgIGlmKHVzZXIuaWQgPT09IHBvc3QuYXV0aG9yKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHN4PXt7IGJnY29sb3I6IHJlZFs1MDBdIH19IGFyaWEtbGFiZWw9XCJyZWNpcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFJcclxuICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvLyB0aXRsZT17dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdWJoZWFkZXI9XCJTZXB0ZW1iZXIgMTQsIDIwMTZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0NhcmQ+XHJcbn0pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiSWNvbkJ1dHRvbiIsIkNhcmRIZWFkZXIiLCJyZWQiLCJQb3N0Q2FyZCIsInBvc3RzIiwidXNlcnMiLCJtYXAiLCJwb3N0IiwiaSIsInVzZXIiLCJpZCIsImF1dGhvciIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwic3giLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsInNwYWNpbmciLCJjb21wb25lbnQiLCJ3aWR0aCIsImltYWdlIiwiYWx0IiwiaGVpZ2h0IiwiZmxleEdyb3ciLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwidGl0bGUiLCJhdmF0YXIiLCJiZ2NvbG9yIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

});