'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActualizarCantidadCommand = function (_Command) {
    _inherits(ActualizarCantidadCommand, _Command);

    function ActualizarCantidadCommand(nuevaCantidad) {
        _classCallCheck(this, ActualizarCantidadCommand);

        var _this = _possibleConstructorReturn(this, (ActualizarCantidadCommand.__proto__ || Object.getPrototypeOf(ActualizarCantidadCommand)).call(this));

        _this.nombreComando = 'ActualizarCantidad';
        _this.descripcion = 'ActualizarCantidad [numero]';
        _this.nuevaCantidad = nuevaCantidad;
        return _this;
    }

    _createClass(ActualizarCantidadCommand, [{
        key: 'execute',
        value: function execute() {
            //simula actualizacion a BD
            var viejaCantidad = 5;
            console.log('DATABASE: Actualizado');

            //simula logging
            console.log('LOG: Cantidad de la Orden Actualizada de ' + viejaCantidad + ' a ' + this.nuevaCantidad);
        }
    }, {
        key: 'makeCommand',
        value: function makeCommand(args) {
            return new ActualizarCantidadCommand(parseInt(args[3]));
        }
    }]);

    return ActualizarCantidadCommand;
}(_Command3.default);

exports.default = ActualizarCantidadCommand;