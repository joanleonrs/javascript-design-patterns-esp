import Observer from './Observer';

class GoogleObserver extends Observer{
    constructor(suje){
        super();
        this.dataSource = suje;
        suje.register(this);
    }

    update(){
        let precio = this.dataSource.stock.precio;
        let simbolo = this.dataSource.stock.simbolo;

        //filtros reactivos
        if(simbolo == 'GOOG')
            console.log(`El nuevo precio de Google es ${precio}`);
    }

}

export default GoogleObserver;