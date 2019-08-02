'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SandwichBuilder2 = require('./SandwichBuilder');

var _SandwichBuilder3 = _interopRequireDefault(_SandwichBuilder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiSandwichBuilder = function (_SandwichBuilder) {
    _inherits(MiSandwichBuilder, _SandwichBuilder);

    function MiSandwichBuilder() {
        _classCallCheck(this, MiSandwichBuilder);

        return _possibleConstructorReturn(this, (MiSandwichBuilder.__proto__ || Object.getPrototypeOf(MiSandwichBuilder)).call(this));
    }

    _createClass(MiSandwichBuilder, [{
        key: 'prepararPan',
        value: function prepararPan() {
            this.sandwich.tipoPan = 'frances';
            this.sandwich.tostado = true;
        }
    }, {
        key: 'aplicarQuesoYCarne',
        value: function aplicarQuesoYCarne() {
            this.sandwich.tipoQueso = 'suizo';
            this.sandwich.tipoCarne = 'pavo';
        }
    }, {
        key: 'aplicarCondimentos',
        value: function aplicarCondimentos() {
            this.sandwich.tieneMayonesa = true;
        }
    }, {
        key: 'aplicarVegetales',
        value: function aplicarVegetales() {
            this.sandwich.vegetales = ['tomate', 'cebolla'];
        }
    }]);

    return MiSandwichBuilder;
}(_SandwichBuilder3.default);

exports.default = MiSandwichBuilder;