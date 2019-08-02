'use strict';

var _CommandExecutor = require('./CommandExecutor');

var _CommandExecutor2 = _interopRequireDefault(_CommandExecutor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var args = process.argv;

    if (args.length <= 2) {
        ImprimirUso();
        return;
    }

    var procesador = new _CommandExecutor2.default();
    procesador.executeCommand(args);
}

function ImprimirUso() {
    console.log('Uso: node main [Comando] [Argumentos]');
    console.log('Comandos:');
    console.log(' ActualizarCantidad numero');
    console.log(' CrearOrden');
    console.log(' EnviarOrden');
}

Init();