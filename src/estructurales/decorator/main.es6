import PizzaGrande from './PizzaGrande';
import CheeseDecorator from './decorators/CheeseDecorator';
import JamonDecorator from './decorators/JamonDecorator';
import PeperoniDecorator from './decorators/PeperoniDecorator';

function Init(){
    let grande =  new PizzaGrande();
    grande = new CheeseDecorator(grande);
    grande = new JamonDecorator(grande);
    grande = new PeperoniDecorator(grande);

    console.log(grande.getDescripcion());
    console.log(grande.calcularCosto());
}

Init();

