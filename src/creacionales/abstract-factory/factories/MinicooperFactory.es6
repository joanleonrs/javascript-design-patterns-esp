import Minicooper from '../Minicooper';
import AutoFactory from './AutoFactory';

class MinicooperFactory extends AutoFactory{
    constructor(){
        super();
    }

    crearAutoDeportivo(){
        let mini = new Minicooper();
        mini.agregarPaqueteDeportivo();

        return mini;
    }

    crearAutoLuxury(){
        let mini = new Minicooper();
        mini.agregarPaqueteLuxury();

        return mini;
    }

    crearAutoEconomico(){
        let mini = new Minicooper();

        return mini;
    }
}

export default MinicooperFactory;