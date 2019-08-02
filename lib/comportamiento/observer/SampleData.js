'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Stock = require('./subjects/Stock');

var _Stock2 = _interopRequireDefault(_Stock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SampleData = function () {
    function SampleData() {
        _classCallCheck(this, SampleData);

        this.samplePrecios = [10.0, 10.25, 555.5, 9.50, 9.03, 500.0, 499.99, 10.10];
        this.sampleStocks = ['MSFT', 'MSFT', 'GOOG', 'MSFT', 'MSFT', 'GOOG', 'GOOG', 'MSFT'];
    }

    _createClass(SampleData, [{
        key: 'obtenerProximo',
        value: function obtenerProximo() {
            var sampleArray = [];
            for (var i = 0; i < this.samplePrecios.length; i++) {
                var s = new _Stock2.default();
                s.simbolo = this.sampleStocks[i];
                s.precio = this.samplePrecios[i];
                sampleArray.push(s);
            }

            return sampleArray;
        }
    }]);

    return SampleData;
}();

exports.default = SampleData;