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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/CardMedia/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/index.js\");\n/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardHeader */ \"./node_modules/@mui/material/CardHeader/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n\n\n// import parse from 'html-react-parser';\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar PostCard = function(param) {\n    var posts = param.posts, users = param.users;\n    var _this1 = _this;\n    {\n        posts.map(function(post, i) {\n            // console.log(post.title)\n            {\n                users.map(function(user, i) {\n                    if (user.id === post.author) {\n                        console.log(user.name);\n                    }\n                });\n            }\n        });\n    }\n    // let title = post.title.rendered\n    // let contentIndex = content.search(\"</p>\")+4;\n    // let result = content.slice(0, contentIndex);\n    // console.log(result)\n    // let pic = post.content.rendered\n    // let picIndex = pic.search(\"</p>\")+4;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts.map(function(post, i) {\n            var _this2 = _this1;\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    maxWidth: 345,\n                    minHeight: 350\n                },\n                spacing: 0,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        component: \"img\",\n                        width: \"100%\",\n                        image: \"https://fswd-wp.devnss.com/wp-content/uploads/2022/02/a0e85189-0ebd-3e4b-a810-86dd04f7cda4.jpg\",\n                        alt: \"green iguana\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            height: 90,\n                            flexGrow: 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h6\",\n                            component: \"span\",\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this1),\n                    users.map(function(user, j) {\n                        if (user.id === post.author) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                // key={j}\n                                avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        bgcolor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__.red[500]\n                                    },\n                                    \"aria-label\": \"recipe\",\n                                    children: \"R\"\n                                }, void 0, false, void 0, void 0),\n                                title: user.name,\n                                subheader: \"September 14, 2016\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, _this2));\n                        }\n                    })\n                ]\n            }, i, true, {\n                fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\3_2\\\\fswd-midterm\\\\cms-app\\\\components\\\\PostCard.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this));\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDeEMsRUFBeUM7QUFDSjtBQUNjO0FBQ0o7QUFDRTtBQUNSO0FBQ1E7QUFDQTtBQUNQOztBQUUxQyxHQUFLLENBQUNVLFFBQVEsR0FBRyxRQUFRLFFBQWMsQ0FBQztRQUFwQkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEtBQUssU0FBTEEsS0FBSzs7SUFDOUIsQ0FBQ0Q7UUFBQUEsS0FBSyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLENBQUMsRUFBSyxDQUFDO1lBQ3ZCLEVBQTBCO1lBQzFCLENBQUNIO2dCQUFBQSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBHLElBQUksRUFBRUQsQ0FBQyxFQUFLLENBQUM7b0JBQ3JCLEVBQUUsRUFBQ0MsSUFBSSxDQUFDQyxFQUFFLEtBQUtILElBQUksQ0FBQ0ksTUFBTSxFQUFFLENBQUM7d0JBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDSyxJQUFJO29CQUN6QixDQUFDO2dCQUNMLENBQUM7WUFBQyxDQUFDO1FBRUwsQ0FBQztJQUFDLENBQUM7SUFDSCxFQUFrQztJQUNsQyxFQUErQztJQUMvQyxFQUErQztJQUUvQyxFQUFzQjtJQUV0QixFQUFrQztJQUNsQyxFQUF1QztJQUV2QyxNQUFNLDZFQUNIQyxDQUFHO2tCQUNEWCxLQUFLLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsQ0FBQyxFQUFLLENBQUM7O3dGQUN0QmIsMERBQUk7Z0JBQVNxQixFQUFFLEVBQUUsQ0FBQztvQkFBQ0MsUUFBUSxFQUFFLEdBQUc7b0JBQUVDLFNBQVMsRUFBRSxHQUFHO2dCQUFDLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDOztnR0FDNUR0QiwrREFBUzt3QkFDUnVCLFNBQVMsRUFBQyxDQUFLO3dCQUVmQyxLQUFLLEVBQUMsQ0FBTTt3QkFDWkMsS0FBSyxFQUFDLENBQWdHO3dCQUN0R0MsR0FBRyxFQUFDLENBQWM7Ozs7OztnR0FFbkIzQixpRUFBVzt3QkFBQ29CLEVBQUUsRUFBRSxDQUFDOzRCQUFDUSxNQUFNLEVBQUUsRUFBRTs0QkFBRUMsUUFBUSxFQUFFLENBQUM7d0JBQUMsQ0FBQzs4R0FDekMzQixnRUFBVTs0QkFBQzRCLFlBQVk7NEJBQUNDLE9BQU8sRUFBQyxDQUFJOzRCQUFDUCxTQUFTLEVBQUMsQ0FBTTtzQ0FFbkRiLElBQUksQ0FBQ3FCLEtBQUs7Ozs7Ozs7Ozs7O29CQUdkdkIsS0FBSyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQRyxJQUFJLEVBQUVvQixDQUFDLEVBQUssQ0FBQzt3QkFDM0IsRUFBRSxFQUFDcEIsSUFBSSxDQUFDQyxFQUFFLEtBQUtILElBQUksQ0FBQ0ksTUFBTSxFQUFFLENBQUM7NEJBQ3ZCLE1BQU0sNkVBQ0hWLGdFQUFVO2dDQUNULEVBQVU7Z0NBQ1Y2QixNQUFNLDhFQUNIL0IsNERBQU07b0NBQUNpQixFQUFFLEVBQUUsQ0FBQzt3Q0FBQ2UsT0FBTyxFQUFFN0IsMERBQVE7b0NBQUMsQ0FBQztvQ0FBRThCLENBQVUsYUFBQyxDQUFROzhDQUFDLENBRXZEOztnQ0FFRkosS0FBSyxFQUFFbkIsSUFBSSxDQUFDSyxJQUFJO2dDQUNoQm1CLFNBQVMsRUFBQyxDQUFvQjs7Ozs7O3dCQUdwQyxDQUFDO29CQUNILENBQUM7O2VBN0JRekIsQ0FBQzs7Ozs7UUErQnBCLENBQUM7Ozs7OztBQUdELENBQUM7S0F4REtMLFFBQVE7QUEwRGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzP2ExOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdHMsIHVzZXJzIH0pID0+IHtcclxuICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb3N0LnRpdGxlKVxyXG4gICAge3VzZXJzLm1hcCgodXNlciwgaSkgPT4ge1xyXG4gICAgICAgIGlmKHVzZXIuaWQgPT09IHBvc3QuYXV0aG9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIubmFtZSlcclxuICAgICAgICB9XHJcbiAgICB9KX1cclxuICAgIFxyXG4gIH0pfSBcclxuICAvLyBsZXQgdGl0bGUgPSBwb3N0LnRpdGxlLnJlbmRlcmVkXHJcbiAgLy8gbGV0IGNvbnRlbnRJbmRleCA9IGNvbnRlbnQuc2VhcmNoKFwiPC9wPlwiKSs0O1xyXG4gIC8vIGxldCByZXN1bHQgPSBjb250ZW50LnNsaWNlKDAsIGNvbnRlbnRJbmRleCk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgLy8gbGV0IHBpYyA9IHBvc3QuY29udGVudC5yZW5kZXJlZFxyXG4gIC8vIGxldCBwaWNJbmRleCA9IHBpYy5zZWFyY2goXCI8L3A+XCIpKzQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiB7XHJcbiAgICAgICAgPENhcmQga2V5PXtpfSBzeD17eyBtYXhXaWR0aDogMzQ1LCBtaW5IZWlnaHQ6IDM1MCB9fSBzcGFjaW5nPXswfT5cclxuICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9mc3dkLXdwLmRldm5zcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDIvYTBlODUxODktMGViZC0zZTRiLWE4MTAtODZkZDA0ZjdjZGE0LmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cImdyZWVuIGlndWFuYVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IGhlaWdodDogOTAsIGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG5cclxuICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGopID0+IHtcclxuICAgICAgICBpZih1c2VyLmlkID09PSBwb3N0LmF1dGhvcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAvLyBrZXk9e2p9XHJcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzeD17eyBiZ2NvbG9yOiByZWRbNTAwXSB9fSBhcmlhLWxhYmVsPVwicmVjaXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyPVwiU2VwdGVtYmVyIDE0LCAyMDE2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9DYXJkPlxyXG59KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiVHlwb2dyYXBoeSIsIkF2YXRhciIsIkljb25CdXR0b24iLCJDYXJkSGVhZGVyIiwicmVkIiwiUG9zdENhcmQiLCJwb3N0cyIsInVzZXJzIiwibWFwIiwicG9zdCIsImkiLCJ1c2VyIiwiaWQiLCJhdXRob3IiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImRpdiIsInN4IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJzcGFjaW5nIiwiY29tcG9uZW50Iiwid2lkdGgiLCJpbWFnZSIsImFsdCIsImhlaWdodCIsImZsZXhHcm93IiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsInRpdGxlIiwiaiIsImF2YXRhciIsImJnY29sb3IiLCJhcmlhLWxhYmVsIiwic3ViaGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

});