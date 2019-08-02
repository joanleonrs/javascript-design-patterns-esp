"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandParser = function () {
    function CommandParser(comandosDisponibles) {
        _classCallCheck(this, CommandParser);

        this.comandosDisponibles = comandosDisponibles;
    }

    _createClass(CommandParser, [{
        key: "ParseCommand",
        value: function ParseCommand(args) {
            var nombreComandoPedido = args[2];
            var comando = this.EncontrarComandoPedido(nombreComandoPedido);

            return comando.makeCommand(args);
        }
    }, {
        key: "EncontrarComandoPedido",
        value: function EncontrarComandoPedido(nombreComando) {
            return this.comandosDisponibles.find(function (cmd) {
                return cmd.nombreComando == nombreComando;
            });
        }
    }]);

    return CommandParser;
}();

exports.default = CommandParser;