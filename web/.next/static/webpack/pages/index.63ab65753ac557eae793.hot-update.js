webpackHotUpdate_N_E("pages/index",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrqlClient\", function() { return createUrqlClient; });\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _MyUpdateQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyUpdateQuery */ \"./src/utils/MyUpdateQuery.ts\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar errorExchange = function errorExchange(_ref) {\n  var _s = $RefreshSig$();\n\n  var forward = _ref.forward;\n  return _s(function (ops$) {\n    _s();\n\n    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n    return Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"tap\"])(function (_ref2) {\n      var error = _ref2.error;\n\n      if (error !== null && error !== void 0 && error.message.includes(\"Not authenticated\")) {\n        router.push(\"/login\");\n      }\n    }));\n  }, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n    return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n  });\n};\n\nvar createUrqlClient = function createUrqlClient(ssrExchange) {\n  return {\n    url: \"http://localhost:4000/graphql\",\n    fetchOptions: {\n      credentials: \"include\"\n    },\n    exchanges: [urql__WEBPACK_IMPORTED_MODULE_1__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__[\"cacheExchange\"])({\n      updates: {\n        Mutation: {\n          logout: function logout(_result, args, cache, info) {\n            Object(_MyUpdateQuery__WEBPACK_IMPORTED_MODULE_3__[\"MyUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__[\"MeDocument\"]\n            }, _result, function () {\n              return {\n                me: null\n              };\n            });\n          },\n          login: function login(_result, args, cache, info) {\n            Object(_MyUpdateQuery__WEBPACK_IMPORTED_MODULE_3__[\"MyUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.login.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.login.user\n                };\n              }\n            });\n          },\n          register: function register(_result, args, cache, info) {\n            Object(_MyUpdateQuery__WEBPACK_IMPORTED_MODULE_3__[\"MyUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.register.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.register.user\n                };\n              }\n            });\n          }\n        }\n      }\n    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__[\"fetchExchange\"]]\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHM/ZjRiNiJdLCJuYW1lcyI6WyJlcnJvckV4Y2hhbmdlIiwiZm9yd2FyZCIsIm9wcyQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaXBlIiwidGFwIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJwdXNoIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImxvZ291dCIsIl9yZXN1bHQiLCJhcmdzIiwiY2FjaGUiLCJpbmZvIiwiTXlVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIm1lIiwibG9naW4iLCJyZXN1bHQiLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQTs7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxZQUFpQixVQUFBQyxJQUFJLEVBQUk7QUFBQTs7QUFDdkQsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFdBQU9DLGtEQUFJLENBQ1RKLE9BQU8sQ0FBQ0MsSUFBRCxDQURFLEVBRVRJLGlEQUFHLENBQUMsaUJBQWU7QUFBQSxVQUFaQyxLQUFZLFNBQVpBLEtBQVk7O0FBQ2pCLFVBQUdBLEtBQUgsYUFBR0EsS0FBSCxlQUFHQSxLQUFLLENBQUVDLE9BQVAsQ0FBZUMsUUFBZixDQUF3QixtQkFBeEIsQ0FBSCxFQUFnRDtBQUM5Q04sY0FBTSxDQUFDTyxJQUFQLENBQVksUUFBWjtBQUNEO0FBQ0YsS0FKRSxDQUZNLENBQVg7QUFRRCxHQVYrQjtBQUFBLFlBQ2ZOLHFEQURlO0FBQUE7QUFBQSxDQUFoQzs7QUFZTyxJQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFdBQUQ7QUFBQSxTQUF1QjtBQUNyREMsT0FBRyxFQUFFLCtCQURnRDtBQUVyREMsZ0JBQVksRUFBRTtBQUNaQyxpQkFBVyxFQUFFO0FBREQsS0FGdUM7QUFLckRDLGFBQVMsRUFBRSxDQUNUQyxrREFEUyxFQUVUQywrRUFBYSxDQUFDO0FBQ1pDLGFBQU8sRUFBRTtBQUNQQyxnQkFBUSxFQUFFO0FBQ1JDLGdCQUFNLEVBQUUsZ0JBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3RDQyxnRkFBYSxDQUNYRixLQURXLEVBRVg7QUFBRUcsbUJBQUssRUFBRUMsNkRBQVVBO0FBQW5CLGFBRlcsRUFHWE4sT0FIVyxFQUlYO0FBQUEscUJBQU87QUFBRU8sa0JBQUUsRUFBRTtBQUFOLGVBQVA7QUFBQSxhQUpXLENBQWI7QUFNRCxXQVJPO0FBU1JDLGVBQUssRUFBRSxlQUFDUixPQUFELEVBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUNyQ0MsZ0ZBQWEsQ0FDWEYsS0FEVyxFQUVYO0FBQUVHLG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZXLEVBR1hOLE9BSFcsRUFJWCxVQUFDUyxNQUFELEVBQVNKLEtBQVQsRUFBbUI7QUFDakIsa0JBQUlJLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhRSxNQUFqQixFQUF5QjtBQUN2Qix1QkFBT0wsS0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPO0FBQ0xFLG9CQUFFLEVBQUVFLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhRztBQURaLGlCQUFQO0FBR0Q7QUFDRixhQVpVLENBQWI7QUFjRCxXQXhCTztBQXlCUkMsa0JBQVEsRUFBRSxrQkFBQ1osT0FBRCxFQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFDeENDLGdGQUFhLENBQ1hGLEtBRFcsRUFFWDtBQUFFRyxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGVyxFQUdYTixPQUhXLEVBSVgsVUFBQ1MsTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2pCLGtCQUFJSSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JGLE1BQXBCLEVBQTRCO0FBQzFCLHVCQUFPTCxLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEUsb0JBQUUsRUFBRUUsTUFBTSxDQUFDRyxRQUFQLENBQWdCRDtBQURmLGlCQUFQO0FBR0Q7QUFDRixhQVpVLENBQWI7QUFjRDtBQXhDTztBQURIO0FBREcsS0FBRCxDQUZKLEVBZ0RUakMsYUFoRFMsRUFpRFRZLFdBakRTLEVBa0RUdUIsa0RBbERTO0FBTDBDLEdBQXZCO0FBQUEsQ0FBekIiLCJmaWxlIjoiLi9zcmMvdXRpbHMvY3JlYXRlVXJxbENsaWVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhY2hlRXhjaGFuZ2UgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xuaW1wb3J0IHsgZGVkdXBFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSB9IGZyb20gXCJ1cnFsXCI7XG5pbXBvcnQge1xuICBMb2dpbk11dGF0aW9uLFxuICBSZWdpc3Rlck11dGF0aW9uLFxuICBNZURvY3VtZW50LFxuICBNZVF1ZXJ5LFxuICBMb2dvdXRNdXRhdGlvbixcbn0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBNeVVwZGF0ZVF1ZXJ5IH0gZnJvbSBcIi4vTXlVcGRhdGVRdWVyeVwiO1xuaW1wb3J0IHsgcGlwZSwgdGFwIH0gZnJvbSAnd29ua2EnO1xuaW1wb3J0IHsgRXhjaGFuZ2UgfSBmcm9tICd1cnFsJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBlcnJvckV4Y2hhbmdlOiBFeGNoYW5nZSA9ICh7IGZvcndhcmQgfSkgPT4gb3BzJCA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gcGlwZShcbiAgICBmb3J3YXJkKG9wcyQpLFxuICAgIHRhcCgoeyBlcnJvciB9KSA9PiB7XG4gICAgICBpZihlcnJvcj8ubWVzc2FnZS5pbmNsdWRlcyhcIk5vdCBhdXRoZW50aWNhdGVkXCIpKXtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICAgIH1cbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSkgPT4gKHtcbiAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gIGZldGNoT3B0aW9uczoge1xuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBhcyBjb25zdCxcbiAgfSxcbiAgZXhjaGFuZ2VzOiBbXG4gICAgZGVkdXBFeGNoYW5nZSxcbiAgICBjYWNoZUV4Y2hhbmdlKHtcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgTXlVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgICgpID0+ICh7IG1lOiBudWxsIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgTXlVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIE15VXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgZXJyb3JFeGNoYW5nZSxcbiAgICBzc3JFeGNoYW5nZSxcbiAgICBmZXRjaEV4Y2hhbmdlLFxuICBdLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

})