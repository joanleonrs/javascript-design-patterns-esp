class CommandParser {
    constructor(comandosDisponibles){
        this.comandosDisponibles = comandosDisponibles;
    }

    ParseCommand(args){
        let nombreComandoPedido = args[2];
        let comando = this.EncontrarComandoPedido(nombreComandoPedido);
        
        return comando.makeCommand(args);
    }

    EncontrarComandoPedido(nombreComando){
        return this.comandosDisponibles
                            .find(cmd => cmd.nombreComando == nombreComando);
    }


}

export default CommandParser;