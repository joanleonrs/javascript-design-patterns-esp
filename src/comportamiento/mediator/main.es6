import Participante from './Participante';
import Salachat from './Salachat';
import Log from './Log';

function Init(){
    var Cesar = new Participante("Cesar");
    var Ever = new Participante("Ever");
    var Juanjo = new Participante("Juanjo");
    var Julio = new Participante("Julio");
 
    var salaChat = new Salachat();
    salaChat.registrar(Cesar);
    salaChat.registrar(Ever);
    salaChat.registrar(Juanjo);
    salaChat.registrar(Julio);
 
    Ever.enviar("Hola César , ya terminaste el curso, han pasado 84 años...");
    Ever.enviar("Y sigo esperando...");
    Cesar.enviar("hey Ever, no hay necesidad de emitirlo a todos", Ever);
    Juanjo.enviar("Ja!, leí eso!");
    Julio.enviar("Juanjo, este curso esta genial, valió la pena la espera", Juanjo);
 
    let log =  new Log();
    log.mostrar();

}

Init();