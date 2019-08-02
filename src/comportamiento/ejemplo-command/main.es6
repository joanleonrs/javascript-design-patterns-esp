import CommandExecutor from './CommandExecutor';

function Init(){
    let args = process.argv;

    if (args.length <= 2) {
        ImprimirUso();
        return;
    }

    let procesador = new CommandExecutor();
    procesador.executeCommand(args);
}

function ImprimirUso(){
    console.log('Uso: node main [Comando] [Argumentos]');
    console.log('Comandos:');
    console.log(' ActualizarCantidad numero');
    console.log(' CrearOrden');
    console.log(' EnviarOrden');    
}

Init();