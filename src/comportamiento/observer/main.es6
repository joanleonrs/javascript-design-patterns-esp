import SampleData from './SampleData';
import StockTicker from './subjects/StockTicker';
import GoogleObserver from './observers/GoogleObserver';
import MicrosoftObserver from './observers/MicrosoftObserver';

function Init(){
    //creamos una instancia de SampleData;
    let sampleData = new SampleData;
    //Monitorea un stock ticker , cuando un evento particular ocurre , reacciona
    let suje = new StockTicker();

    //creamos los nuevos observers para escuchar a el stock ticker
    let gobs = new GoogleObserver(suje);
    let mobs = new MicrosoftObserver(suje);

    //cargamos la data simple de prueba
    for (let s of sampleData.obtenerProximo()) {
        suje.stock = s;
    }

}

Init();