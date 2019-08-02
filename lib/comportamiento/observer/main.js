'use strict';

var _SampleData = require('./SampleData');

var _SampleData2 = _interopRequireDefault(_SampleData);

var _StockTicker = require('./subjects/StockTicker');

var _StockTicker2 = _interopRequireDefault(_StockTicker);

var _GoogleObserver = require('./observers/GoogleObserver');

var _GoogleObserver2 = _interopRequireDefault(_GoogleObserver);

var _MicrosoftObserver = require('./observers/MicrosoftObserver');

var _MicrosoftObserver2 = _interopRequireDefault(_MicrosoftObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    //creamos una instancia de SampleData;
    var sampleData = new _SampleData2.default();
    //Monitorea un stock ticker , cuando un evento particular ocurre , reacciona
    var suje = new _StockTicker2.default();

    //creamos los nuevos observers para escuchar a el stock ticker
    var gobs = new _GoogleObserver2.default(suje);
    var mobs = new _MicrosoftObserver2.default(suje);

    //cargamos la data simple de prueba
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = sampleData.obtenerProximo()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var s = _step.value;

            suje.stock = s;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

Init();