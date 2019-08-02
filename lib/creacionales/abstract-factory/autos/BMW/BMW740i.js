'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BMW740i = function () {
    function BMW740i() {
        _classCallCheck(this, BMW740i);
    }

    _createClass(BMW740i, [{
        key: 'prender',
        value: function prender() {
            console.log('El BMW740i esta prendido. Es el carro de mas elegante y sofisticado');
        }
    }, {
        key: 'apagar',
        value: function apagar() {
            console.log('El BMW740i esta apagado');
        }
    }]);

    return BMW740i;
}();

exports.default = BMW740i;