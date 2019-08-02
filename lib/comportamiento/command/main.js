'use strict';

var _CommandParser = require('./CommandParser');

var _CommandParser2 = _interopRequireDefault(_CommandParser);

var _ActualizarCantidadCommand = require('./commands/ActualizarCantidadCommand');

var _ActualizarCantidadCommand2 = _interopRequireDefault(_ActualizarCantidadCommand);

var _CrearOrdenCommand = require('./commands/CrearOrdenCommand');

var _CrearOrdenCommand2 = _interopRequireDefault(_CrearOrdenCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var args = process.argv;

    var comandosDisponibles = ObtenerComandosDisponibles();

    if (args.length <= 2) {
        ImprimirUso(comandosDisponibles);
        return;
    }

    var parser = new _CommandParser2.default(comandosDisponibles);
    var comando = parser.ParseCommand(args);

    if (null != comando) comando.execute();
}

function ObtenerComandosDisponibles() {
    var comandos = [new _ActualizarCantidadCommand2.default(), new _CrearOrdenCommand2.default()];

    return comandos;
}

function ImprimirUso(comandosDisponibles) {
    console.log('Uso: node main [Comando] [Argumentos]');
    console.log('Comandos:');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = comandosDisponibles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var comando = _step.value;

            console.log(' ' + comando.descripcion);
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

Init();