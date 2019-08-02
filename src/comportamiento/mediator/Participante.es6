import Log from './Log';

class Participante{
    constructor(nombre){
        this.nombre = nombre;
        this.salaChat = null;
        this.log = new Log();
    }

    enviar(mensaje, destinatario){
        this.salaChat.enviar(mensaje, this, destinatario);
    }

    recibir(mensaje, remitente){
        this.log.agregar(remitente.nombre + ' a ' + this.nombre + ': ' + mensaje);
    }
}

export default Participante;