'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PizzaDecorator2 = require('./PizzaDecorator');

var _PizzaDecorator3 = _interopRequireDefault(_PizzaDecorator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheeseDecorator = function (_PizzaDecorator) {
    _inherits(CheeseDecorator, _PizzaDecorator);

    function CheeseDecorator(pizza) {
        _classCallCheck(this, CheeseDecorator);

        var _this = _possibleConstructorReturn(this, (CheeseDecorator.__proto__ || Object.getPrototypeOf(CheeseDecorator)).call(this, pizza));

        _this._pizza = pizza;
        _this.descripcion = 'Queso';
        return _this;
    }

    _createClass(CheeseDecorator, [{
        key: 'getDescripcion',
        value: function getDescripcion() {
            return this._pizza.getDescripcion() + ' ' + this.descripcion;
        }
    }, {
        key: 'calcularCosto',
        value: function calcularCosto() {
            return this._pizza.calcularCosto() + 1.25;
        }
    }]);

    return CheeseDecorator;
}(_PizzaDecorator3.default);

exports.default = CheeseDecorator;