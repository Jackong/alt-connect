"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports["default"] = function () {
    for (var _len = arguments.length, stores = Array(_len), _key = 0; _key < _len; _key++) {
        stores[_key] = arguments[_key];
    }

    return function (base) {
        return (function (_base) {
            _inherits(Connect, _base);

            function Connect(props) {
                var _this = this;

                _classCallCheck(this, Connect);

                _get(Object.getPrototypeOf(Connect.prototype), "constructor", this).call(this, props);
                this.state = {};
                stores.map(function (store) {
                    var states = store.getState();
                    for (var key in states) {
                        if (!states.hasOwnProperty(key)) {
                            continue;
                        }
                        _this.state[key] = states[key];
                    }
                });
            }

            _createClass(Connect, [{
                key: "componentWillMount",
                value: function componentWillMount() {
                    var _this2 = this;

                    _get(Object.getPrototypeOf(Connect.prototype), "componentWillMount", this).call(this);
                    this.listeners = stores.map(function (store) {
                        return store.listen(_this2.setState.bind(_this2));
                    });
                }
            }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    this.listeners.map(function (unlisten) {
                        return unlisten();
                    });
                    _get(Object.getPrototypeOf(Connect.prototype), "componentWillUnmount", this).call(this);
                }
            }]);

            return Connect;
        })(base);
    };
};

module.exports = exports["default"];
