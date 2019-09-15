webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__ = __webpack_require__("./node_modules/react-simple-maps/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_simple_maps__);
var _jsxFileName = "/Users/joona/git/scora-peli/pages/index.js";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

      var falseStyle = {
        default: {
          fill: geography.properties.ISO_A3 == this.state.selected ? "#2DFF22" : "#ECEFF1",
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
      };
      var correctStyle = _extends({}, falseStyle, {
        pressed: {
          fill: "#2DFF22",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none"
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "App", __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { style: wrapperStyles, __source: {
              fileName: _jsxFileName,
              lineNumber: 97
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
                lineNumber: 98
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["ZoomableGroup"],
              { center: [0, 20], disablePanning: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Geographies"],
                { geography: "/static/world-50m.json", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
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
                          fill: geography.properties.ISO_A3 == _this2.state.selected ? "#2DFF22" : "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        hover: {
                          fill: geography.properties.ISO_A3 == _this2.state.selected ? "#2DFF22" : "#607D8B",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        pressed: {
                          fill: geography.properties.ISO_A3 == _this2.state.selected ? "#2DFF22" : "#FF5722",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        }
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
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
              lineNumber: 152
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
                  lineNumber: 154
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "label",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                  }
                },
                info
              )
            );
          })
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = App;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cardInfo, "cardInfo", "/Users/joona/git/scora-peli/pages/index.js");
  reactHotLoader.register(wrapperStyles, "wrapperStyles", "/Users/joona/git/scora-peli/pages/index.js");
  reactHotLoader.register(bold, "bold", "/Users/joona/git/scora-peli/pages/index.js");
  reactHotLoader.register(normal, "normal", "/Users/joona/git/scora-peli/pages/index.js");
  reactHotLoader.register(App, "App", "/Users/joona/git/scora-peli/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/joona/git/scora-peli/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.652725b61da415bb9cf6.hot-update.js.map