'use strict';

var _MiSandwichBuilder = require('./MiSandwichBuilder');

var _MiSandwichBuilder2 = _interopRequireDefault(_MiSandwichBuilder);

var _ClubSandwichBuilder = require('./ClubSandwichBuilder');

var _ClubSandwichBuilder2 = _interopRequireDefault(_ClubSandwichBuilder);

var _SandwichMaker = require('./SandwichMaker');

var _SandwichMaker2 = _interopRequireDefault(_SandwichMaker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var maker = new _SandwichMaker2.default(new _MiSandwichBuilder2.default());
    maker.construirSandwich();

    var sandwich = maker.getSandwich();
    sandwich.mostrar();

    var maker2 = new _SandwichMaker2.default(new _ClubSandwichBuilder2.default());
    maker2.construirSandwich();

    var sandwich2 = maker2.getSandwich();
    sandwich2.mostrar();
}

Init();