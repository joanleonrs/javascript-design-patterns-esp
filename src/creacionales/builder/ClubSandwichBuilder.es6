import SandwichBuilder from './SandwichBuilder';

class ClubSandwichBuilder extends SandwichBuilder{
    constructor(){
        super();
    }

    prepararPan(){
        this.sandwich.tipoPan = 'frances';
        this.sandwich.tostado = true;
    }

    aplicarQuesoYCarne(){
        this.sandwich.tipoQueso = 'suizo';
        this.sandwich.tipoCarne = 'pollo';
    }

    aplicarCondimentos(){
        this.sandwich.tieneMayonesa = true;
    }

    aplicarVegetales(){
        this.sandwich.vegetales = ['tomate', 'cebolla','lechuga'];
    }
}

export default ClubSandwichBuilder;