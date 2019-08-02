'use strict';

var _TemperatureLookUpFacade = require('./TemperatureLookUpFacade/TemperatureLookUpFacade');

var _TemperatureLookUpFacade2 = _interopRequireDefault(_TemperatureLookUpFacade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var zipCode = '07001';

    var temperatureFacade = new _TemperatureLookUpFacade2.default();
    var localTemp = temperatureFacade.getTemperature(zipCode);

    console.log('La temperatura es:\n                 ' + localTemp.farenheit + '\xB0F/' + localTemp.celcious + '\xB0C.\n                 en ' + localTemp.city + ' , ' + localTemp.country);
}

Init();