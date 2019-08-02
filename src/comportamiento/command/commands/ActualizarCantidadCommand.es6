import Command from './Command';

class ActualizarCantidadCommand extends Command{
    constructor(nuevaCantidad){
        super();

        this.nombreComando = 'ActualizarCantidad';
        this.descripcion = 'ActualizarCantidad [numero]';
        this.nuevaCantidad = nuevaCantidad;        
    }

    execute(){
        //simula actualizacion a BD
        const viejaCantidad = 5;
        console.log('DATABASE: Actualizado');
        
        //simula logging
        console.log(`LOG: Cantidad de la Orden Actualizada de ${viejaCantidad} a ${this.nuevaCantidad}`);        
    }

    makeCommand(args){
        return new ActualizarCantidadCommand(parseInt(args[3]));
    }

}

export default ActualizarCantidadCommand;