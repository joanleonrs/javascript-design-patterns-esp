'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BMWM3 = function () {
    function BMWM3() {
        _classCallCheck(this, BMWM3);
    }

    _createClass(BMWM3, [{
        key: 'prender',
        value: function prender() {
            console.log('El BMWM3 esta prendido. El carro deportivo que necesitas');
        }
    }, {
        key: 'apagar',
        value: function apagar() {
            console.log('El BMWM3 esta apagado');
        }
    }]);

    return BMWM3;
}();

exports.default = BMWM3;