import Pizza from './Pizza';

class PizzaGrande extends Pizza{
    constructor(){
        super();
        this.descripcion = 'Pizza Grande';
    }

    getDescripcion(){
        return this.descripcion;
    }

    calcularCosto(){
        return 9.00;
    }
}

export default PizzaGrande;