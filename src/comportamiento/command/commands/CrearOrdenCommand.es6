import Command from './Command';

class CrearOrdenCommand extends Command{
    constructor(){
        super();

        this.nombreComando = 'CrearOrden';
        this.descripcion = 'CrearOrden';      
    }

    execute(){
        //simula accion de creacion a BD
        console.log('Orden Creada');
    }

    makeCommand(args){
        return new CrearOrdenCommand();
    }

}

export default CrearOrdenCommand;