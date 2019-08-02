'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instancia = null;

var Log = function () {
    function Log() {
        _classCallCheck(this, Log);

        if (!instancia) {
            instancia = this;
        }

        this.log = '';

        return instancia;
    }

    _createClass(Log, [{
        key: 'agregar',
        value: function agregar(msj) {
            this.log += msj + '\n';
        }
    }, {
        key: 'mostrar',
        value: function mostrar() {
            console.log(this.log);
            this.log = '';
        }
    }]);

    return Log;
}();

exports.default = Log;