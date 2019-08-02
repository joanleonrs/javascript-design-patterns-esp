class BMW{
    constructor(){
        this.nombreCarro = '';
    }

    setNombre(nombreCarro){
        this.nombreCarro = nombreCarro;
    }

    prender(){
        console.log(`Tu Auto BMW: ${this.nombreCarro}`);
        console.log('El BMW se ha prendido! Listo para empezar');
    }

    apagar(){
        console.log('BMW apagado');
    }
}

export default BMW
