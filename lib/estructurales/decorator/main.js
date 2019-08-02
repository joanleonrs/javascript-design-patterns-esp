'use strict';

var _PizzaGrande = require('./PizzaGrande');

var _PizzaGrande2 = _interopRequireDefault(_PizzaGrande);

var _CheeseDecorator = require('./decorators/CheeseDecorator');

var _CheeseDecorator2 = _interopRequireDefault(_CheeseDecorator);

var _JamonDecorator = require('./decorators/JamonDecorator');

var _JamonDecorator2 = _interopRequireDefault(_JamonDecorator);

var _PeperoniDecorator = require('./decorators/PeperoniDecorator');

var _PeperoniDecorator2 = _interopRequireDefault(_PeperoniDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var grande = new _PizzaGrande2.default();
    grande = new _CheeseDecorator2.default(grande);
    grande = new _JamonDecorator2.default(grande);
    grande = new _PeperoniDecorator2.default(grande);

    console.log(grande.getDescripcion());
    console.log(grande.calcularCosto());
}

Init();