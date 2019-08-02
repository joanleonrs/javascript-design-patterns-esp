import Pizza from '../Pizza';

class PizzaDecorator extends Pizza{
    constructor(pizza){
        super();
        this._pizza = pizza;
    }

    getDescripcion(){
        return _pizza.getDescripcion();
    }

    calcularCosto(){    
        return _pizza.calcularCosto();
    }
}

export default PizzaDecorator