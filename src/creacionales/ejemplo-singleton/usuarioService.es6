import usuarioEstado from './usuarioEstado';

class usuarioService{
    constructor(){
        this.usuarioEstado  =  new usuarioEstado();
    }

    getUsuarios(){
        if (this.usuarioEstado.autenticado){
            console.log('obteteniendo lista');
        }
        else{
            console.log('usuario no autenticado, por favor inicie sesion');            
        }
    }
}

export default usuarioService;