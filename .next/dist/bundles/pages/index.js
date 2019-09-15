module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__ = __webpack_require__("react-simple-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_simple_maps__);
var _jsxFileName = "/Users/joona/git/scora-peli/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var cardInfo = [{
  info: "Ensimmäinen maa joka juridisesti hyväksyi homojen rekisteröidyn parisuhteen",
  country: "DNK"
}, {
  info: "Maailman suurin HIV/AIDS-osuus väestöstä",
  country: "SWZ"
}, {
  info: "Suurin äitiyskuolleisuus kehittyneissä maissa",
  country: "USA"
}, {
  info: "Lainsäädäntö kaikkein oikeudenmukaisin koskien LGBTQ+-vähemmistöä",
  country: "CAN"
}, {
  info: "Yksi niistä maista joissa e-pillerit ovat ilmaisia",
  country: "FRA"
}, {
  info: "Ensisynnyttäjän keski-ikä 18 vuotta",
  country: "NGA"
}, {
  info: "Pohjoismaa jossa saa valita passiinsa vapaasti kolmannen sukupuolen",
  country: "ISL"
}];

var wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

var bold = {
  fontWeight: "bold",
  paddingBottom: "1em"
};

var normal = {
  fontWeight: "normal",
  paddingBottom: "1em"
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      selected: "",
      questions: cardInfo
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "App", __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { style: wrapperStyles, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["ComposableMap"],
            {
              projectionConfig: {
                scale: 205,
                rotation: [-11, 0, 0]
              },
              width: 980,
              height: 551,
              style: {
                width: "100%",
                height: "auto"
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["ZoomableGroup"],
              { center: [0, 20], disablePanning: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Geographies"],
                { geography: "/static/world-50m.json", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                function (geographies, projection) {
                  return geographies.map(function (geography, i) {
                    return geography.id !== "ATA" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Geography"], {
                      key: i,
                      onClick: function onClick() {
                        if (geography.properties.ISO_A3 == _this2.state.selected) {
                          alert("CORRECT");
                          _this2.setState(function (prev) {
                            return {
                              questions: prev.questions.filter(function (x) {
                                return x.country !== prev.selected;
                              }),
                              selected: ""
                            };
                          });
                        }
                      },
                      geography: geography,
                      projection: projection,
                      style: {
                        default: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        hover: {
                          fill: "#607D8B",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        pressed: {
                          fill: "#FF5722",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        }
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      }
                    });
                  });
                }
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "cards", __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            }
          },
          this.state.questions.map(function (_ref) {
            var info = _ref.info,
                country = _ref.country;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              {
                className: "card",
                key: country,
                onClick: function onClick() {
                  return _this2.setState({ selected: country });
                },
                style: _this2.state.selected == country ? bold : normal,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "label",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                  }
                },
                info
              )
            );
          })
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-simple-maps":
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map