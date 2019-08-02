let instancia = null;

class usuarioEstado{
    constructor(){
        if(!instancia){
            instancia = this;
        }

        this.autenticado = false;

        return instancia;
    }
    
}

export default usuarioEstado;