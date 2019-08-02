import GeoLookUpService from './WeatherServices/GeoLookUpService';
import WeatherService from './WeatherServices/WeatherService';
import EnglishMetricConverter from './WeatherServices/EnglishMetricConverter';

function Init(){
    const zipCode = '07001';

    let geoLookUpService = new GeoLookUpService();
    
    let city = geoLookUpService.getCityForZipCode(zipCode);
    let country = geoLookUpService.getCountryForZipCode(zipCode);
    let coordinates = geoLookUpService.getcCoordinatesForZipCode(zipCode);

    let weatherService = new WeatherService();
    let farenheit =  weatherService.getTempFarenheit(coordinates.latitude, coordinates.longitude);
    
    let englishMetricConverter =  new EnglishMetricConverter();
    let celcious = englishMetricConverter.farenheitToCelcious(farenheit);

    console.log(`La temperatura es:
                 ${farenheit}°F/${celcious}°C.
                 en ${city} , ${country}`);
}

Init();