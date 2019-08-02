import PizzaDecorator from './PizzaDecorator';

class JamonDecorator extends PizzaDecorator{
    constructor(pizza){
        super(pizza);
        this._pizza = pizza;
        this.descripcion = 'Jamon';
    }

    getDescripcion(){
        return `${this._pizza.getDescripcion()} ${this.descripcion}`;
    }

    calcularCosto(){
        return this._pizza.calcularCosto() + 1.00; 
    }
    
}

export default JamonDecorator;