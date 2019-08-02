import AutoFactory from './factories/AutoFactory';

function Init(){
    let nombreCarro = process.argv[2];

    let factory = new AutoFactory();
    let carro  = factory.crearInstancia(nombreCarro);
    carro.prender();
    carro.apagar();
}

Init();
