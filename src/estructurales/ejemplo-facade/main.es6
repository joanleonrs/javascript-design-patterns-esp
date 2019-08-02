import TemperatureLookUpFacade from './TemperatureLookUpFacade/TemperatureLookUpFacade';

function Init(){
    const zipCode = '07001';

    let temperatureFacade = new TemperatureLookUpFacade();
    let localTemp = temperatureFacade.getTemperature(zipCode);

    console.log(`La temperatura es:
                 ${localTemp.farenheit}°F/${localTemp.celcious}°C.
                 en ${localTemp.city} , ${localTemp.country}`);
}

Init();