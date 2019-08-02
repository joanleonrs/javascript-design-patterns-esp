import BMWM3 from '../autos/BMW/BMWM3';
import BMW740i from '../autos/BMW/BMW740i';
import BMW328i from '../autos/BMW/BMW328i';
import AutoFactory from './AutoFactory';

class BMWFactory extends AutoFactory{
    constructor(){
        super();
    }

    crearAutoDeportivo(){
        return new BMWM3();
    }

    crearAutoLuxury(){
        return new BMW740i();
    }

    crearAutoEconomico(){
        return new BMW328i();
    }
}

export default BMWFactory;