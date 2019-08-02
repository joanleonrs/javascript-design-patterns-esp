'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GeoLookUpService = require('./WeatherServices/GeoLookUpService');

var _GeoLookUpService2 = _interopRequireDefault(_GeoLookUpService);

var _WeatherService = require('./WeatherServices/WeatherService');

var _WeatherService2 = _interopRequireDefault(_WeatherService);

var _EnglishMetricConverter = require('./WeatherServices/EnglishMetricConverter');

var _EnglishMetricConverter2 = _interopRequireDefault(_EnglishMetricConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemperatureLookUpFacade = function () {
    function TemperatureLookUpFacade() {
        _classCallCheck(this, TemperatureLookUpFacade);

        this.geoLookUpService = new _GeoLookUpService2.default();
        this.weatherService = new _WeatherService2.default();
        this.englishMetricConverter = new _EnglishMetricConverter2.default();
    }

    _createClass(TemperatureLookUpFacade, [{
        key: 'getTemperature',
        value: function getTemperature(zipCode) {
            var city = this.geoLookUpService.getCityForZipCode(zipCode);
            var country = this.geoLookUpService.getCountryForZipCode(zipCode);
            var coordinates = this.geoLookUpService.getcCoordinatesForZipCode(zipCode);

            var farenheit = this.weatherService.getTempFarenheit(coordinates.latitude, coordinates.longitude);

            var celcious = this.englishMetricConverter.farenheitToCelcious(farenheit);

            return {
                city: city,
                country: country,
                coordinates: coordinates,
                farenheit: farenheit,
                celcious: celcious
            };
        }
    }]);

    return TemperatureLookUpFacade;
}();

exports.default = TemperatureLookUpFacade;