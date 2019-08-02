class Sandwich{
    constructor(){
        this.tipoPan = '';
        this.tostado = false;
        this.tipoQueso = '';
        this.tipoCarne = '';
        this.tieneMayonesa = false;
        this.vegetales = []; 
    }

    mostrar(){
        console.log(`Sandwich con pan: ${this.tipoPan}`);
        if(this.tostado)
            console.log('Tostado');
        if(this.tieneMayonesa)
            console.log('Con Mayonsesa');
        console.log(`Carne: ${this.tipoCarne}`);
        console.log(`Queso: ${this.tipoQueso}`);
        console.log('Vegetales:');        
        for(let vegetal of this.vegetales){
            console.log(`   ${vegetal}`);
        } 
    }
}

export default Sandwich;