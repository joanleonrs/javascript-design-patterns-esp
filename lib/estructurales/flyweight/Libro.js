"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Libro = function Libro(id, titulo, autor, genero, nroPaginas, ISBN) {
    _classCallCheck(this, Libro);

    this.id = id;
    this.autor = autor;
    this.genero = genero;
    this.nroPaginas = nroPaginas;
    this.ISBN = ISBN;
};

exports.default = Libro;