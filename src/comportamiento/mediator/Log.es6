let instancia = null;
class Log{
    constructor(){
        if(!instancia){
            instancia = this;
        }

        this.log = '';

        return instancia;
    }
    
    agregar(msj){
        this.log += msj + '\n';
    }

    mostrar(){
        console.log(this.log);
        this.log = '';
    }
}

export default Log;