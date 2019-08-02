import config from './config';

function Init(){
    let nombreCarro = process.argv[2];
    let factory = CargarFactory();
    factory.mostrarInstancia();

    let carro = factory.crearAutomovil();
    carro.prender();
    carro.apagar();
    
}

function CargarFactory(){
    let defaultFactory = config.factory;
    return new defaultFactory();
}

Init();