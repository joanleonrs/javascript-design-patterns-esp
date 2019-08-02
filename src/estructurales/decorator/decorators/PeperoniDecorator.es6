import PizzaDecorator from './PizzaDecorator';

class PeperoniDecorator extends PizzaDecorator{
    constructor(pizza){
        super(pizza);
        this._pizza = pizza;
        this.descripcion = 'Peperoni';
    }

    getDescripcion(){
        return `${this._pizza.getDescripcion()} ${this.descripcion}`;
    }

    calcularCosto(){
        return this._pizza.calcularCosto() + 2.50; 
    }
    
}

export default PeperoniDecorator;