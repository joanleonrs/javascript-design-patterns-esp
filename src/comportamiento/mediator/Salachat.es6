class Salachat{
    constructor(){
        this.participantes = {};
    }
    
    registrar(participante) {
        this.participantes[participante.nombre] = participante;
        participante.salaChat = this;
    }

    enviar(mensaje, remitente, destinatario) {
        if (destinatario) {                      // message simple 
            destinatario.recibir(mensaje, remitente);    
        } else {                                // broadcast mensaje
            for (let key in this.participantes) {   
                if (this.participantes[key] !== remitente) {
                    this.participantes[key].recibir(mensaje, remitente);
                }
            }
        }
    }
}

export default Salachat;