'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Libro = require('./Libro');

var _Libro2 = _interopRequireDefault(_Libro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LibroFactory = function () {
    function LibroFactory() {
        _classCallCheck(this, LibroFactory);

        var librosExistentes = [];
    }

    _createClass(LibroFactory, [{
        key: 'crearLibro',
        value: function crearLibro(titulo, autor, genero, nroPaginas, ISBN) {
            var libroExistente = librosExistentes[ISBN];

            if (libroExistente) {
                return libroExistente;
            } else {
                var libro = new _Libro2.default(titulo, autor, genero, nroPaginas, ISBN);
                librosExistentes[ISBN] = libro;
                return libro;
            }
        }
    }]);

    return LibroFactory;
}();