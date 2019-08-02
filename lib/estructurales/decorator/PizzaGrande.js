'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pizza2 = require('./Pizza');

var _Pizza3 = _interopRequireDefault(_Pizza2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PizzaGrande = function (_Pizza) {
    _inherits(PizzaGrande, _Pizza);

    function PizzaGrande() {
        _classCallCheck(this, PizzaGrande);

        var _this = _possibleConstructorReturn(this, (PizzaGrande.__proto__ || Object.getPrototypeOf(PizzaGrande)).call(this));

        _this.descripcion = 'Pizza Grande';
        return _this;
    }

    _createClass(PizzaGrande, [{
        key: 'getDescripcion',
        value: function getDescripcion() {
            return this.descripcion;
        }
    }, {
        key: 'calcularCosto',
        value: function calcularCosto() {
            return 9.00;
        }
    }]);

    return PizzaGrande;
}(_Pizza3.default);

exports.default = PizzaGrande;