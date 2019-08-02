class CommandExecutor{
    constructor(){

    }

    executeCommand(args){
        switch (args[2]) {
            case 'ActualizarCantidad':
                this.actualizarCantidad(parseInt(args[3]));
                break;
            case 'CrearOrden':
                this.crearOrden();
                break;
            case 'EnviarOrden':
                this.enviarOrden();
                break;    
            default:
                console.log('Comando no reconocido');                
                break;
        }
    }

    actualizarCantidad(nuevaCantidad){
        //simula una actualizacion a BD
        const viejaCantidad = 5;
        console.log('DATABASE: Actualizado');

        //simula un logueo
        console.log(`LOG: Cantidad de la Orden Actualizada de ${viejaCantidad} a ${nuevaCantidad}`);
        
    }
}

export default CommandExecutor;