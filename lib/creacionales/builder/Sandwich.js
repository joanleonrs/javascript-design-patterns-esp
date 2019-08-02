'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sandwich = function () {
    function Sandwich() {
        _classCallCheck(this, Sandwich);

        this.tipoPan = '';
        this.tostado = false;
        this.tipoQueso = '';
        this.tipoCarne = '';
        this.tieneMayonesa = false;
        this.vegetales = [];
    }

    _createClass(Sandwich, [{
        key: 'mostrar',
        value: function mostrar() {
            console.log('Sandwich con pan: ' + this.tipoPan);
            if (this.tostado) console.log('Tostado');
            if (this.tieneMayonesa) console.log('Con Mayonsesa');
            console.log('Carne: ' + this.tipoCarne);
            console.log('Queso: ' + this.tipoQueso);
            console.log('Vegetales:');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.vegetales[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var vegetal = _step.value;

                    console.log('   ' + vegetal);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Sandwich;
}();

exports.default = Sandwich;