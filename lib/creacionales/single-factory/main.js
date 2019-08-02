'use strict';

var _AutoFactory = require('./factories/AutoFactory');

var _AutoFactory2 = _interopRequireDefault(_AutoFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var nombreCarro = process.argv[2];

    var factory = new _AutoFactory2.default();
    var carro = factory.crearInstancia(nombreCarro);
    carro.prender();
    carro.apagar();
}

Init();