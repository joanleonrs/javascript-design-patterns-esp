'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Audi = function () {
    function Audi() {
        _classCallCheck(this, Audi);
    }

    _createClass(Audi, [{
        key: 'prender',
        value: function prender() {
            console.log('El Audi R8 esta prendido! El mejor auto deportivo');
        }
    }, {
        key: 'apagar',
        value: function apagar() {
            console.log('El Audio esta apagado');
        }
    }]);

    return Audi;
}();