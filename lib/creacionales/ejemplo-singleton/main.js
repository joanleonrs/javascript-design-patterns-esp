'use strict';

var _usuarioService = require('./usuarioService');

var _usuarioService2 = _interopRequireDefault(_usuarioService);

var _usuarioAuth = require('./usuarioAuth');

var _usuarioAuth2 = _interopRequireDefault(_usuarioAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var serv = new _usuarioService2.default();
    var auth = new _usuarioAuth2.default();

    auth.iniciarSesion();
    serv.getUsuarios();
}

Init();