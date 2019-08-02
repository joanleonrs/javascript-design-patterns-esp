'use strict';

var _Sandwich = require('./Sandwich');

var _Sandwich2 = _interopRequireDefault(_Sandwich);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var sandwich = new _Sandwich2.default();
    sandwich.tipoPan = 'frances';
    sandwich.tipoQueso = 'suizo';
    sandwich.tipoCarne = 'pavo';
    sandwich.tieneMayonesa = true;
    sandwich.tostado = true;
    sandwich.vegetales = ['tomate', 'cebolla'];
    sandwich.mostrar();
}

Init();