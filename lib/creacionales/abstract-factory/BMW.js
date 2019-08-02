'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BMW = function () {
    function BMW() {
        _classCallCheck(this, BMW);
    }

    _createClass(BMW, [{
        key: 'SetNombre',
        value: function SetNombre(nombreCarro) {
            this.nombreCarro = nombreCarro;
        }
    }, {
        key: 'prender',
        value: function prender() {
            console.log('Su auto BMW es: ' + this.nombreCarro);
            console.log('El BMW esta prendido. Un auto lujoso y elegante para un estilo de campeones');
        }
    }, {
        key: 'apagar',
        value: function apagar() {
            console.log('El BMW esta apagado');
        }
    }]);

    return BMW;
}();

exports.default = BMW;