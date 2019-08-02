import Subject from './Subject';
import Stock from './Stock';

class StockTicker extends Subject{
    constructor(){
        super();
        this._stock = null;
    }

    get stock() {
        return this._stock;
    }

    set stock(value){
        this._stock = value;
        this.notify();
    }
}

export default StockTicker;