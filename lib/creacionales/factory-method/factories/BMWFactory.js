'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BMW = require('../BMW');

var _BMW2 = _interopRequireDefault(_BMW);

var _AutoFactory2 = require('./AutoFactory');

var _AutoFactory3 = _interopRequireDefault(_AutoFactory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BMWFactory = function (_AutoFactory) {
    _inherits(BMWFactory, _AutoFactory);

    function BMWFactory() {
        _classCallCheck(this, BMWFactory);

        return _possibleConstructorReturn(this, (BMWFactory.__proto__ || Object.getPrototypeOf(BMWFactory)).call(this));
    }

    _createClass(BMWFactory, [{
        key: 'crearAutomovil',
        value: function crearAutomovil() {
            var bmw = new _BMW2.default();
            bmw.setNombre('BMW x6');

            return bmw;
        }
    }]);

    return BMWFactory;
}(_AutoFactory3.default);

exports.default = BMWFactory;