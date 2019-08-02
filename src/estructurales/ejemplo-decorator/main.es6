import PizzaGrande from './PizzaGrande';

function Init(){
    let grande =  new PizzaGrande();
    console.log(grande.getDescripcion());
    console.log(grande.calcularCosto());
}

Init();

