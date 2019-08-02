class Minicooper{
    constructor(){

    }

    setNombre(nombreCarro){
        this.nombreCarro = nombreCarro;
    }

    prender(){
        console.log(`Tu Auto Mini: ${this.nombreCarro}`);
        console.log('El Mini cooper esta prendido y corriendo');
    }

    apagar(){
        console.log('Minicooper apagado');
    }
}

export default Minicooper
