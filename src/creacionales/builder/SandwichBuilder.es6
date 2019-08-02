import Sandwich from './Sandwich';

class SandwichBuilder{
    constructor(){
        this.sandwich = null;
    }

    getSandwich(){
        return this.sandwich;
    }

    crearSandwich(){
        this.sandwich  = new Sandwich();
    }

            
    prepararPan(){

    }
    aplicarQuesoYCarne(){

    }
    aplicarCondimentos(){

    }
    aplicarVegetales(){

    }
}

export default SandwichBuilder;