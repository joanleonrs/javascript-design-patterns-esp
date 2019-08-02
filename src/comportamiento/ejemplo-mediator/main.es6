import Participante from './Participante';

function Init(){
    let cesar = new Participante('Cesar');
    let ever = new Participante('Ever');
    cesar.enviar('hola a todos');
    ever.recibir('hola a todos');

    let juanjo = new Participante('Juanjo');
    cesar.enviar('hola otra vez');
    ever.recibir('hola otra vez');
    juanjo.recibir('hola otra vez');

}

Init();