import MiSandwichBuilder from './MiSandwichBuilder';
import ClubSandwichBuilder from './ClubSandwichBuilder';
import SandwichMaker from './SandwichMaker';

function Init(){
    let maker = new SandwichMaker(new MiSandwichBuilder());
    maker.construirSandwich();

    let sandwich = maker.getSandwich();
    sandwich.mostrar();

    let maker2 = new SandwichMaker(new ClubSandwichBuilder());
    maker2.construirSandwich();

    let sandwich2 = maker2.getSandwich();
    sandwich2.mostrar();


}

Init();

