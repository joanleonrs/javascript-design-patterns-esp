class SandwichMaker{
    constructor(builder){
        this.builder = builder;
    }

    construirSandwich(){
        this.builder.crearSandwich();
        this.builder.prepararPan();
        this.builder.aplicarQuesoYCarne();
        this.builder.aplicarVegetales();
        this.builder.aplicarCondimentos();
    }

    getSandwich(){
        return this.builder.getSandwich();
    }
}

export default SandwichMaker;