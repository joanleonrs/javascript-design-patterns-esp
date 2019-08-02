import Minicooper from '../Minicooper';
import AutoFactory from './AutoFactory';

class MinicooperFactory extends AutoFactory{
    constructor(){
        super();
    }

    crearAutomovil(){
        let mini = new Minicooper();
        mini.setNombre('Mini Cooper S');

        return mini;
    }
}

export default MinicooperFactory;