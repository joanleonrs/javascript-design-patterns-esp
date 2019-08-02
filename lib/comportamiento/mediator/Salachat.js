"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Salachat = function () {
    function Salachat() {
        _classCallCheck(this, Salachat);

        this.participantes = {};
    }

    _createClass(Salachat, [{
        key: "registrar",
        value: function registrar(participante) {
            this.participantes[participante.nombre] = participante;
            participante.salaChat = this;
        }
    }, {
        key: "enviar",
        value: function enviar(mensaje, remitente, destinatario) {
            if (destinatario) {
                // message simple 
                destinatario.recibir(mensaje, remitente);
            } else {
                // broadcast mensaje
                for (var key in this.participantes) {
                    if (this.participantes[key] !== remitente) {
                        this.participantes[key].recibir(mensaje, remitente);
                    }
                }
            }
        }
    }]);

    return Salachat;
}();

exports.default = Salachat;