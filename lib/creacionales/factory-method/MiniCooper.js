'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Minicooper = function () {
    function Minicooper() {
        _classCallCheck(this, Minicooper);
    }

    _createClass(Minicooper, [{
        key: 'setNombre',
        value: function setNombre(nombreCarro) {
            this.nombreCarro = nombreCarro;
        }
    }, {
        key: 'prender',
        value: function prender() {
            console.log('Tu Auto Mini: ' + this.nombreCarro);
            console.log('El Mini cooper esta prendido y corriendo');
        }
    }, {
        key: 'apagar',
        value: function apagar() {
            console.log('Minicooper apagado');
        }
    }]);

    return Minicooper;
}();

exports.default = Minicooper;