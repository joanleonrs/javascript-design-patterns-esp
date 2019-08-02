import Pizza from './Pizza';

class PizzaMediana extends Pizza{
    constructor(){
        super();
        this.descripcion = 'Pizza Mediana';
    }

    getDescripcion(){
        return this.descripcion;
    }

    calcularCosto(){
        return 6.00;
    }
}

export default PizzaMediana;