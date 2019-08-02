import BMW from '../BMW';
import AutoFactory from './AutoFactory';

class BMWFactory extends AutoFactory{
    constructor(){
        super();
    }

    crearAutomovil(){
        let bmw = new BMW();
        bmw.setNombre('BMW x6');

        return bmw;
    }
}

export default BMWFactory;