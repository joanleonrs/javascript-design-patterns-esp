'use strict';

var _Participante = require('./Participante');

var _Participante2 = _interopRequireDefault(_Participante);

var _Salachat = require('./Salachat');

var _Salachat2 = _interopRequireDefault(_Salachat);

var _Log = require('./Log');

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
   var Cesar = new _Participante2.default("Cesar");
   var Ever = new _Participante2.default("Ever");
   var Juanjo = new _Participante2.default("Juanjo");
   var Julio = new _Participante2.default("Julio");

   var salaChat = new _Salachat2.default();
   salaChat.registrar(Cesar);
   salaChat.registrar(Ever);
   salaChat.registrar(Juanjo);
   salaChat.registrar(Julio);

   Ever.enviar("Hola César , ya terminaste el curso, han pasado 84 años...");
   Ever.enviar("Y sigo esperando...");
   Cesar.enviar("hey Ever, no hay necesidad de emitirlo a todos", Ever);
   Juanjo.enviar("Ja!, leí eso!");
   Julio.enviar("Juanjo, este curso esta genial, valió la pena la espera", Juanjo);

   var log = new _Log2.default();
   log.mostrar();
}

Init();