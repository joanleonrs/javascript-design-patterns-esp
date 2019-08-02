'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = require('./Log');

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Participante = function () {
    function Participante(nombre) {
        _classCallCheck(this, Participante);

        this.nombre = nombre;
        this.salaChat = null;
        this.log = new _Log2.default();
    }

    _createClass(Participante, [{
        key: 'enviar',
        value: function enviar(mensaje, destinatario) {
            this.salaChat.enviar(mensaje, this, destinatario);
        }
    }, {
        key: 'recibir',
        value: function recibir(mensaje, remitente) {
            this.log.agregar(remitente.nombre + ' a ' + this.nombre + ': ' + mensaje);
        }
    }]);

    return Participante;
}();

exports.default = Participante;