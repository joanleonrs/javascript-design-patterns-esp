'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LibroFactory = require('./LibroFactory');

var _LibroFactory2 = _interopRequireDefault(_LibroFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegistroLibroManager = function () {
    function RegistroLibroManager() {
        _classCallCheck(this, RegistroLibroManager);

        this.libroFactory = new _LibroFactory2.default();
        var registroLibrosDatabase = {};
    }

    _createClass(RegistroLibroManager, [{
        key: 'agregarRegistroLibro',
        value: function agregarRegistroLibro(id, titulo, autor, genero, nroPaginas, ISBN, nuevoEstado, checkoutFecha, checkoutMiembro, fechaRetorno) {

            var libro = libroFactory.crearLibro(titulo, autor, genero, nroPaginas, ISBN);
            registroLibrosDatabase[id] = {
                checkoutMiembro: checkoutMiembro,
                checkoutFecha: checkoutFecha,
                fechaRetorno: fechaRetorno,
                disponibilidad: disponibilidad,
                libro: libro
            };
        }
    }, {
        key: 'actualizarEstadoCheckout',
        value: function actualizarEstadoCheckout(id, nuevoEstado, checkoutFecha, checkoutMiembro, fechaRetorno) {

            var registro = registroLibrosDatabase[id];
            registro.disponibilidad = nuevoEstado;
            registro.checkoutFecha = checkoutFecha;
            registro.checkoutMiembro = checkoutMiembro;
            registro.fechaRetorno = fechaRetorno;
        }
    }, {
        key: 'extenderPeriodoCheckout',
        value: function extenderPeriodoCheckout(id, nuevaFechaRetorno) {
            registroLibrosDatabase[id].fechaRetorno = nuevaFechaRetorno;
        }
    }]);

    return RegistroLibroManager;
}();