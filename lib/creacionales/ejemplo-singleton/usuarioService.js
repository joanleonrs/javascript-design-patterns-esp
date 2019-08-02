'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _usuarioEstado = require('./usuarioEstado');

var _usuarioEstado2 = _interopRequireDefault(_usuarioEstado);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var usuarioService = function () {
    function usuarioService() {
        _classCallCheck(this, usuarioService);

        this.usuarioEstado = new _usuarioEstado2.default();
    }

    _createClass(usuarioService, [{
        key: 'getUsuarios',
        value: function getUsuarios() {
            if (this.usuarioEstado.autenticado) {
                console.log('obteteniendo lista');
            } else {
                console.log('usuario no autenticado, por favor inicie sesion');
            }
        }
    }]);

    return usuarioService;
}();

exports.default = usuarioService;