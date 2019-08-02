import usuarioService from './usuarioService';
import usuarioAuth from './usuarioAuth';

function Init(){
    let serv = new usuarioService();
    let auth = new usuarioAuth();

    auth.iniciarSesion();
    serv.getUsuarios();
}

Init();