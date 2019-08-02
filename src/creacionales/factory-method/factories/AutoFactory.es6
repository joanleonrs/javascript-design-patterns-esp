
class AutoFactory{
    constructor(){

    }

    crearAutomovil(){

    }

    mostrarInstancia(){
        let instancia = this.crearAutomovil();
        console.log(`Se ha creado una instancia de : ${instancia.constructor.name}`);        
    }
}

export default AutoFactory;