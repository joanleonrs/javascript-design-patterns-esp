import PizzaDecorator from './PizzaDecorator';

class CheeseDecorator extends PizzaDecorator{
    constructor(pizza){
        super(pizza);
        this._pizza = pizza;
        this.descripcion = 'Queso';
    }

    getDescripcion(){
        return `${this._pizza.getDescripcion()} ${this.descripcion}`;
    }

    calcularCosto(){
        return this._pizza.calcularCosto() + 1.25; 
    }
    
}

export default CheeseDecorator;