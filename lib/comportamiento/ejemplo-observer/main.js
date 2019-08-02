'use strict';

var _SampleData = require('./SampleData');

var _SampleData2 = _interopRequireDefault(_SampleData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Init() {
    var sampleData = new _SampleData2.default();
    //Monitoreo un ticker de stock, cuando un evento particular ocurre, reacciona
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = sampleData.obtenerProximo()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var stock = _step.value;

            if (stock.simbolo === 'GOOG') console.log('El nuevo precio de Google es ' + stock.precio);

            if (stock.simbolo === 'MSFT' && stock.precio > 10) {
                console.log('Microsoft ha alcanzado el precio objetivo: ' + stock.precio);
            }
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