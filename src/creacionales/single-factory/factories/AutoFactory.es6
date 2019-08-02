import BMW from './../BMW';
import Minicooper from './../Minicooper';
import Audi from './../Audi';

const CARROS = {
    BMW,
    Minicooper,
    Audi
}

class AutoFactory{
    constructor(){

    }

    crearInstancia(nombreCarro){
        let carroConstructor = CARROS[nombreCarro];
        let carro = null;
        if (carroConstructor){            
            carro = new carroConstructor();
        }

        return carro;
    }
}

export default AutoFactory;