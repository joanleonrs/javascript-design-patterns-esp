'use strict';

var _Participante = require('./Participante');

var _Participante2 = _interopRequireDefault(_Participante);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var cesar = new _Participante2.default('Cesar');
    var ever = new _Participante2.default('Ever');
    cesar.enviar('hola a todos');
    ever.recibir('hola a todos');

    var juanjo = new _Participante2.default('Juanjo');
    cesar.enviar('hola otra vez');
    ever.recibir('hola otra vez');
    juanjo.recibir('hola otra vez');
}

Init();