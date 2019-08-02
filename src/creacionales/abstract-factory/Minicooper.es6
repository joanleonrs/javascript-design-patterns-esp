class Minicooper{
    constructor(){

    }

    SetNombre(nombreCarro){
        this.nombreCarro = nombreCarro;
    }

    agregarPaqueteDeportivo(){
        console.log('Paquete Deportivo Agregado');
    }

    agregarPaqueteLuxury(){
        console.log('Paquete Luxury Agregado');
    }

    prender(){
        //console.log(`Su auto Mini Cooper es: ${this.nombreCarro}`);
        console.log('El Minicooper esta prendido. Un auto compacto y muy potente');
    }

    apagar(){
        console.log('El Minicooper esta apagado');
    }
}

export default Minicooper