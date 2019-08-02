import GeoLookUpService from './WeatherServices/GeoLookUpService';
import WeatherService from './WeatherServices/WeatherService';
import EnglishMetricConverter from './WeatherServices/EnglishMetricConverter';

class TemperatureLookUpFacade {
    constructor(){
        this.geoLookUpService = new GeoLookUpService();
        this.weatherService = new WeatherService();
        this.englishMetricConverter = new EnglishMetricConverter();
    }

    getTemperature(zipCode){
        let city = this.geoLookUpService.getCityForZipCode(zipCode);
        let country = this.geoLookUpService.getCountryForZipCode(zipCode);
        let coordinates = this.geoLookUpService.getcCoordinatesForZipCode(zipCode);
    
        let farenheit =  this.weatherService.getTempFarenheit(coordinates.latitude, coordinates.longitude);
        
        let celcious = this.englishMetricConverter.farenheitToCelcious(farenheit);

        return {
            city: city,
            country: country,
            coordinates: coordinates,
            farenheit: farenheit,
            celcious: celcious
        }
    }
}

export default TemperatureLookUpFacade;