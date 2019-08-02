"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instancia = null;

var usuarioEstado = function usuarioEstado() {
    _classCallCheck(this, usuarioEstado);

    if (!instancia) {
        instancia = this;
    }

    this.autenticado = false;

    return instancia;
};

exports.default = usuarioEstado;