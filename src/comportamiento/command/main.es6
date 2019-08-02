import CommandParser from './CommandParser';
import ActualizarCantidadCommand from './commands/ActualizarCantidadCommand';
import CrearOrdenCommand from './commands/CrearOrdenCommand';

function Init(){
    let args = process.argv;

    let comandosDisponibles = ObtenerComandosDisponibles();

    if (args.length <= 2) {
        ImprimirUso(comandosDisponibles);
        return;
    }

    let parser = new CommandParser(comandosDisponibles);
    let comando = parser.ParseCommand(args);
    
    if (null != comando)
        comando.execute();
}

function ObtenerComandosDisponibles(){
    const comandos = [
        new ActualizarCantidadCommand(),
        new CrearOrdenCommand()
    ]

    return comandos;
}

function ImprimirUso(comandosDisponibles){
    console.log('Uso: node main [Comando] [Argumentos]');
    console.log('Comandos:');
    for (var comando of comandosDisponibles) {
        console.log(` ${comando.descripcion}`);        
    }
}

Init();