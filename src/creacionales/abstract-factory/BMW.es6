class BMW{
    constructor(){

    }

    SetNombre(nombreCarro){
        this.nombreCarro = nombreCarro;
    }

    prender(){
        console.log(`Su auto BMW es: ${this.nombreCarro}`);
        console.log('El BMW esta prendido. Un auto lujoso y elegante para un estilo de campeones');
    }

    apagar(){
        console.log('El BMW esta apagado');
    }
}

export default BMW