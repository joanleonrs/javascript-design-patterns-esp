'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BMW = require('./../BMW');

var _BMW2 = _interopRequireDefault(_BMW);

var _Minicooper = require('./../Minicooper');

var _Minicooper2 = _interopRequireDefault(_Minicooper);

var _Audi = require('./../Audi');

var _Audi2 = _interopRequireDefault(_Audi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CARROS = {
    BMW: _BMW2.default,
    Minicooper: _Minicooper2.default,
    Audi: _Audi2.default
};

var AutoFactory = function () {
    function AutoFactory() {
        _classCallCheck(this, AutoFactory);
    }

    _createClass(AutoFactory, [{
        key: 'crearInstancia',
        value: function crearInstancia(nombreCarro) {
            var carroConstructor = CARROS[nombreCarro];
            var carro = null;
            if (carroConstructor) {
                carro = new carroConstructor();
            }

            return carro;
        }
    }]);

    return AutoFactory;
}();

exports.default = AutoFactory;