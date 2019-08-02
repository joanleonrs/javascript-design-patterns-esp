import Sandwich from './Sandwich';

function Init(){
    let sandwich  = new Sandwich();
    sandwich.tipoPan = 'frances';
    sandwich.tipoQueso = 'suizo';
    sandwich.tipoCarne = 'pavo';
    sandwich.tieneMayonesa = true;
    sandwich.tostado = true;
    sandwich.vegetales = ['tomate', 'cebolla'];
    sandwich.mostrar();
}

Init();

