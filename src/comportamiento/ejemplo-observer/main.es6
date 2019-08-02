import SampleData from './SampleData';

function Init(){
    let sampleData = new SampleData();
    //Monitoreo un ticker de stock, cuando un evento particular ocurre, reacciona
    for (let stock of sampleData.obtenerProximo()) {
        if (stock.simbolo === 'GOOG' ) 
            console.log(`El nuevo precio de Google es ${stock.precio}`);
            
        if (stock.simbolo === 'MSFT' && stock.precio > 10) {
            console.log(`Microsoft ha alcanzado el precio objetivo: ${stock.precio}`);            
        }

    }
}

Init();