'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sandwich = require('./Sandwich');

var _Sandwich2 = _interopRequireDefault(_Sandwich);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SandwichBuilder = function () {
    function SandwichBuilder() {
        _classCallCheck(this, SandwichBuilder);

        this.sandwich = null;
    }

    _createClass(SandwichBuilder, [{
        key: 'getSandwich',
        value: function getSandwich() {
            return this.sandwich;
        }
    }, {
        key: 'crearSandwich',
        value: function crearSandwich() {
            this.sandwich = new _Sandwich2.default();
        }
    }, {
        key: 'prepararPan',
        value: function prepararPan() {}
    }, {
        key: 'aplicarQuesoYCarne',
        value: function aplicarQuesoYCarne() {}
    }, {
        key: 'aplicarCondimentos',
        value: function aplicarCondimentos() {}
    }, {
        key: 'aplicarVegetales',
        value: function aplicarVegetales() {}
    }]);

    return SandwichBuilder;
}();

exports.default = SandwichBuilder;