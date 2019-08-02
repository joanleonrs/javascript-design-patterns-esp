import SandwichBuilder from './SandwichBuilder';

class MiSandwichBuilder extends SandwichBuilder{
    constructor(){
        super();
    }
    

    prepararPan(){
        this.sandwich.tipoPan = 'frances';
        this.sandwich.tostado = true;
    }

    aplicarQuesoYCarne(){
        this.sandwich.tipoQueso = 'suizo';
        this.sandwich.tipoCarne = 'pavo';
    }

    aplicarCondimentos(){
        this.sandwich.tieneMayonesa = true;
    }

    aplicarVegetales(){
        this.sandwich.vegetales = ['tomate', 'cebolla'];
    }



}

export default MiSandwichBuilder;