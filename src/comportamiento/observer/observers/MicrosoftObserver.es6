import Observer from './Observer';

class MicrosoftObserver extends Observer{
    constructor(suje){
        super();
        this.dataSource = suje;
        suje.register(this);
    }

    update(){
        let precio = this.dataSource.stock.precio;
        let simbolo = this.dataSource.stock.simbolo;

        //filtros reactivos
        if (simbolo === 'MSFT' && precio > 10) 
            console.log(`Microsoft ha alcanzado el precio objetivo: ${precio}`);            
    }

}

export default MicrosoftObserver;