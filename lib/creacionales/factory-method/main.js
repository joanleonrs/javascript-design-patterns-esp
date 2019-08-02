'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var nombreCarro = process.argv[2];
    var factory = CargarFactory();
    factory.mostrarInstancia();

    var carro = factory.crearAutomovil();
    carro.prender();
    carro.apagar();
}

function CargarFactory() {
    var defaultFactory = _config2.default.factory;
    return new defaultFactory();
}

Init();