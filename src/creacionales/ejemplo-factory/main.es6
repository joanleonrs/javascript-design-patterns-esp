import BMW from './BMW';
import Minicooper from './Minicooper';

function Init(){
    let nombreCarro = process.argv[2];
    let carro  = ObtenerCarro(nombreCarro);
    carro.prender();
    carro.apagar();
}

function ObtenerCarro(nombreCarro){
    switch (nombreCarro) {
        case 'BMW':
            return new BMW();
            break;
        case 'Minicooper':
            return new Minicooper();
            break;
        case 'Audi':
            return new Audi();
            break;
        default:
            return null;
            break;
    }
}

Init();

//SOLID 