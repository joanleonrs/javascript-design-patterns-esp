'use strict';

var _BMW = require('./BMW');

var _BMW2 = _interopRequireDefault(_BMW);

var _Minicooper = require('./Minicooper');

var _Minicooper2 = _interopRequireDefault(_Minicooper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var nombreCarro = process.argv[2];
    var carro = ObtenerCarro(nombreCarro);
    carro.prender();
    carro.apagar();
}

function ObtenerCarro(nombreCarro) {
    switch (nombreCarro) {
        case 'BMW':
            return new _BMW2.default();
            break;
        case 'Minicooper':
            return new _Minicooper2.default();
            break;
        case 'Audi':
            return new Audi();
            break;
        default:
            return null;
            break;
    }
}

Init();

//SOLID