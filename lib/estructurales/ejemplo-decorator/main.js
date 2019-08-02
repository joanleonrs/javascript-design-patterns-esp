'use strict';

var _PizzaGrande = require('./PizzaGrande');

var _PizzaGrande2 = _interopRequireDefault(_PizzaGrande);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var grande = new _PizzaGrande2.default();
    console.log(grande.getDescripcion());
    console.log(grande.calcularCosto());
}

Init();