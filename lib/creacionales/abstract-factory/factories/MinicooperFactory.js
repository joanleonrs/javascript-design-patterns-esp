'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Minicooper = require('../Minicooper');

var _Minicooper2 = _interopRequireDefault(_Minicooper);

var _AutoFactory2 = require('./AutoFactory');

var _AutoFactory3 = _interopRequireDefault(_AutoFactory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinicooperFactory = function (_AutoFactory) {
    _inherits(MinicooperFactory, _AutoFactory);

    function MinicooperFactory() {
        _classCallCheck(this, MinicooperFactory);

        return _possibleConstructorReturn(this, (MinicooperFactory.__proto__ || Object.getPrototypeOf(MinicooperFactory)).call(this));
    }

    _createClass(MinicooperFactory, [{
        key: 'crearAutoDeportivo',
        value: function crearAutoDeportivo() {
            var mini = new _Minicooper2.default();
            mini.agregarPaqueteDeportivo();

            return mini;
        }
    }, {
        key: 'crearAutoLuxury',
        value: function crearAutoLuxury() {
            var mini = new _Minicooper2.default();
            mini.agregarPaqueteLuxury();

            return mini;
        }
    }, {
        key: 'crearAutoEconomico',
        value: function crearAutoEconomico() {
            var mini = new _Minicooper2.default();

            return mini;
        }
    }]);

    return MinicooperFactory;
}(_AutoFactory3.default);

exports.default = MinicooperFactory;