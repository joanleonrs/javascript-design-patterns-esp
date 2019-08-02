'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {

    var factory = CargarFactory();

    setCabecera('DEPORTIVO');
    var deportivo = factory.crearAutoDeportivo();
    deportivo.prender();
    deportivo.apagar();

    setCabecera('LUXURY');
    var luxury = factory.crearAutoLuxury();
    luxury.prender();
    luxury.apagar();

    setCabecera('ECONOMICO');
    var eco = factory.crearAutoEconomico();
    eco.prender();
    eco.apagar();
}

function CargarFactory() {
    var defaultFactory = _config2.default.factory;
    return new defaultFactory();
}

function setCabecera(nombreCabecera) {
    console.log('***************' + nombreCabecera + '*****************');
}

Init();