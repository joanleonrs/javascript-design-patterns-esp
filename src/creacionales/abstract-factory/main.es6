import config from './config';

function Init(){
  
    let factory = CargarFactory();

    setCabecera('DEPORTIVO')
    let deportivo  = factory.crearAutoDeportivo();
    deportivo.prender();
    deportivo.apagar();

    setCabecera('LUXURY')
    let luxury = factory.crearAutoLuxury();
    luxury.prender();
    luxury.apagar();

    setCabecera('ECONOMICO')
    let eco = factory.crearAutoEconomico();
    eco.prender();
    eco.apagar();
}

function CargarFactory(){
    let defaultFactory = config.factory;
    return new defaultFactory();
}

function setCabecera(nombreCabecera){
    console.log(`***************${nombreCabecera}*****************`);
}


Init();
