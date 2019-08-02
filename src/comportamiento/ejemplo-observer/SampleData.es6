import Stock from './Stock';

class SampleData{
    constructor(){
        this.samplePrecios = [10.0, 10.25, 555.5, 9.50, 9.03, 500.0, 499.99, 10.10];
        this.sampleStocks = ['MSFT','MSFT','GOOG','MSFT','MSFT','GOOG','GOOG','MSFT'];
    }

    obtenerProximo(){
        let sampleArray = [];
        for (let i = 0; i < this.samplePrecios.length ; i++) {
            let s =  new Stock();
            s.simbolo = this.sampleStocks[i];
            s.precio = this.samplePrecios[i];
            sampleArray.push(s);
        }

        return sampleArray;
    }
}

export default SampleData;