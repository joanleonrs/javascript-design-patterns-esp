import Pizza from './Pizza';

class PizzaChica extends Pizza{
    constructor(){
        super();
        this.descripcion = 'Pizza Chica';
    }

    getDescripcion(){
        return this.descripcion;
    }

    calcularCosto(){
        return 3.00;
    }
}

export default PizzaChica;