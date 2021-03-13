webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navbar\", function() { return Navbar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_s_tuto_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_s_tuto_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/s/tuto/web/src/components/Navbar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Navbar = function Navbar(_ref) {\n  _s();\n\n  Object(_home_s_tuto_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"])({\n    pause: true\n  }),\n      _useMeQuery2 = Object(_home_s_tuto_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMeQuery, 1),\n      _useMeQuery2$ = _useMeQuery2[0],\n      data = _useMeQuery2$.data,\n      fetching = _useMeQuery2$.fetching;\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_home_s_tuto_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLogoutMutation, 2),\n      logoutFetching = _useLogoutMutation2[0].fetching,\n      logout = _useLogoutMutation2[1];\n\n  var body = null; // data is loading\n\n  if (fetching) {//user is not logged in\n  } else if (!(data !== null && data !== void 0 && data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          mr: 2,\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), \" \"]\n    }, void 0, true); // user is logged in\n  } else {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        mr: 2,\n        children: data.me.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n        color: \"black\",\n        variant: \"link\",\n        isLoading: logoutFetching,\n        onClick: function onClick() {\n          logout();\n        },\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    bg: \"grey\",\n    p: 4,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      ml: \"auto\",\n      children: body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"gFW3Bb1XevkRT0RtTSFhMPS0cNA=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"]];\n});\n\n_c = Navbar;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD84MDVmIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZU1lUXVlcnkiLCJwYXVzZSIsImRhdGEiLCJmZXRjaGluZyIsInVzZUxvZ291dE11dGF0aW9uIiwibG9nb3V0RmV0Y2hpbmciLCJsb2dvdXQiLCJib2R5IiwibWUiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ3RCQyxxRUFBVSxDQUFDO0FBQ3RDQyxTQUFLLEVBQUU7QUFEK0IsR0FBRCxDQURZO0FBQUE7QUFBQTtBQUFBLE1BQzFDQyxJQUQwQyxpQkFDMUNBLElBRDBDO0FBQUEsTUFDcENDLFFBRG9DLGlCQUNwQ0EsUUFEb0M7O0FBQUEsMkJBSUpDLDRFQUFpQixFQUpiO0FBQUE7QUFBQSxNQUloQ0MsY0FKZ0MsMEJBSTFDRixRQUowQztBQUFBLE1BSWRHLE1BSmM7O0FBS25ELE1BQUlDLElBQUksR0FBRyxJQUFYLENBTG1ELENBT25EOztBQUNBLE1BQUlKLFFBQUosRUFBYyxDQUNaO0FBQ0QsR0FGRCxNQUVPLElBQUksRUFBQ0QsSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FBRU0sRUFBUCxDQUFKLEVBQWU7QUFDcEJELFFBQUksZ0JBQ0Y7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFFLEVBQUUsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLGdEQUFEO0FBQVUsWUFBSSxFQUFDLFdBQWY7QUFBQSwrQkFDRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQU1jLEdBTmQ7QUFBQSxvQkFERixDQURvQixDQVdwQjtBQUNELEdBWk0sTUFZQTtBQUNMQSxRQUFJLGdCQUNGLHFFQUFDLHNEQUFEO0FBQUEsOEJBQ0UscUVBQUMscURBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFBLGtCQUFhTCxJQUFJLENBQUNNLEVBQUwsQ0FBUUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFDRSxhQUFLLEVBQUMsT0FEUjtBQUVFLGVBQU8sRUFBQyxNQUZWO0FBR0UsaUJBQVMsRUFBRUosY0FIYjtBQUlFLGVBQU8sRUFBRSxtQkFBTTtBQUNiQyxnQkFBTTtBQUNQLFNBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWVEOztBQUVELHNCQUNFLHFFQUFDLHNEQUFEO0FBQU0sTUFBRSxFQUFDLE1BQVQ7QUFBZ0IsS0FBQyxFQUFFLENBQW5CO0FBQUEsMkJBQ0UscUVBQUMscURBQUQ7QUFBSyxRQUFFLEVBQUUsTUFBVDtBQUFBLGdCQUFrQkM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBN0NNOztHQUFNUixNO1VBQ2tCQyw2RCxFQUdrQkksb0U7OztLQUpwQ0wsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIExpbmsgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VMb2dvdXRNdXRhdGlvbiwgdXNlTWVRdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvYnV0dG9uXCI7XG5cbmludGVyZmFjZSBOYXZiYXJQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgTmF2YmFyOiBSZWFjdC5GQzxOYXZiYXJQcm9wcz4gPSAoe30pID0+IHtcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VNZVF1ZXJ5KHtcbiAgICBwYXVzZTogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IFt7IGZldGNoaW5nOiBsb2dvdXRGZXRjaGluZyB9LCBsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcbiAgbGV0IGJvZHkgPSBudWxsO1xuXG4gIC8vIGRhdGEgaXMgbG9hZGluZ1xuICBpZiAoZmV0Y2hpbmcpIHtcbiAgICAvL3VzZXIgaXMgbm90IGxvZ2dlZCBpblxuICB9IGVsc2UgaWYgKCFkYXRhPy5tZSkge1xuICAgIGJvZHkgPSAoXG4gICAgICA8PlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgIDxMaW5rIG1yPXsyfT5Mb2dpbjwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICA8TGluaz5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz57XCIgXCJ9XG4gICAgICA8Lz5cbiAgICApO1xuICAgIC8vIHVzZXIgaXMgbG9nZ2VkIGluXG4gIH0gZWxzZSB7XG4gICAgYm9keSA9IChcbiAgICAgIDxGbGV4PlxuICAgICAgICA8Qm94IG1yPXsyfT57ZGF0YS5tZS51c2VybmFtZX08L0JveD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICBpc0xvYWRpbmc9e2xvZ291dEZldGNoaW5nfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBMb2dvdXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0ZsZXg+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZsZXggYmc9XCJncmV5XCIgcD17NH0+XG4gICAgICA8Qm94IG1sPXtcImF1dG9cIn0+e2JvZHl9PC9Cb3g+XG4gICAgPC9GbGV4PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ })

})