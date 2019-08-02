'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BMW328i = function () {
    function BMW328i() {
        _classCallCheck(this, BMW328i);
    }

    _createClass(BMW328i, [{
        key: 'prender',
        value: function prender() {
            console.log('El BMW328i esta prendido. Un carro de lujo al alcance de ti');
        }
    }, {
        key: 'apagar',
        value: function apagar() {
            console.log('El BMW328i esta apagado');
        }
    }]);

    return BMW328i;
}();

exports.default = BMW328i;