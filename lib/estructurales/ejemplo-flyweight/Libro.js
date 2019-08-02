"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Libro = function () {
    function Libro(id, titulo, autor, genero, nroPaginas, ISBN, checkoutFecha, checkoutMiembro, fechaRetorno, disponibilidad) {
        _classCallCheck(this, Libro);

        this.id = id;
        this.autor = autor;
        this.genero = genero;
        this.nroPaginas = nroPaginas;
        this.ISBN = ISBN;
        this.checkoutFecha = checkoutFecha;
        this.checkoutMiembro = checkoutMiembro;
        this.fechaRetorno = fechaRetorno;
        this.disponibilidad = disponibilidad;
    }

    _createClass(Libro, [{
        key: "actualizarEstadoCheckout",
        value: function actualizarEstadoCheckout(id, nuevoEstado, checkoutFecha, checkoutMiembro, fechaRetorno) {
            this.id = id;
            this.disponibilidad = nuevoEstado;
            this.checkoutFecha = checkoutFecha;
            this.checkoutMiembro = checkoutMiembro;
            this.fechaRetorno = fechaRetorno;
        }
    }, {
        key: "extenderPeriodoCheckout",
        value: function extenderPeriodoCheckout(id, nuevaFechaRetorno) {
            this.id = id;
            this.fechaRetorno = nuevaFechaRetorno;
        }
    }]);

    return Libro;
}();

exports.default = Libro;