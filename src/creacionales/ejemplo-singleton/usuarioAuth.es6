import usuarioEstado from './usuarioEstado';

class usuarioAuth{
    constructor(){
        this.usuarioEstado = new usuarioEstado();

    }

    iniciarSesion(){
        console.log('Iniciando Sesion');
        this.usuarioEstado.autenticado = true;

    }

    cerrarSesion(){
        console.log('Cerrando Sesion');
        this.usuarioEstado.autenticado = false;

    }
}

export default usuarioAuth;