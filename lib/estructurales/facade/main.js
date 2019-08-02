'use strict';

var _GeoLookUpService = require('./WeatherServices/GeoLookUpService');

var _GeoLookUpService2 = _interopRequireDefault(_GeoLookUpService);

var _WeatherService = require('./WeatherServices/WeatherService');

var _WeatherService2 = _interopRequireDefault(_WeatherService);

var _EnglishMetricConverter = require('./WeatherServices/EnglishMetricConverter');

var _EnglishMetricConverter2 = _interopRequireDefault(_EnglishMetricConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var zipCode = '07001';

    var geoLookUpService = new _GeoLookUpService2.default();

    var city = geoLookUpService.getCityForZipCode(zipCode);
    var country = geoLookUpService.getCountryForZipCode(zipCode);
    var coordinates = geoLookUpService.getcCoordinatesForZipCode(zipCode);

    var weatherService = new _WeatherService2.default();
    var farenheit = weatherService.getTempFarenheit(coordinates.latitude, coordinates.longitude);

    var englishMetricConverter = new _EnglishMetricConverter2.default();
    var celcious = englishMetricConverter.farenheitToCelcious(farenheit);

    console.log('La temperatura es:\n                 ' + farenheit + '\xB0F/' + celcious + '\xB0C.\n                 en ' + city + ' , ' + country);
}

Init();