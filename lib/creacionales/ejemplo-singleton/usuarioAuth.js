'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _usuarioEstado = require('./usuarioEstado');

var _usuarioEstado2 = _interopRequireDefault(_usuarioEstado);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var usuarioAuth = function () {
    function usuarioAuth() {
        _classCallCheck(this, usuarioAuth);

        this.usuarioEstado = new _usuarioEstado2.default();
    }

    _createClass(usuarioAuth, [{
        key: 'iniciarSesion',
        value: function iniciarSesion() {
            console.log('Iniciando Sesion');
            this.usuarioEstado.autenticado = true;
        }
    }, {
        key: 'cerrarSesion',
        value: function cerrarSesion() {
            console.log('Cerrando Sesion');
            this.usuarioEstado.autenticado = false;
        }
    }]);

    return usuarioAuth;
}();

exports.default = usuarioAuth;