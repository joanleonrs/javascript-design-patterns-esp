'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Subject2 = require('./Subject');

var _Subject3 = _interopRequireDefault(_Subject2);

var _Stock = require('./Stock');

var _Stock2 = _interopRequireDefault(_Stock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StockTicker = function (_Subject) {
    _inherits(StockTicker, _Subject);

    function StockTicker() {
        _classCallCheck(this, StockTicker);

        var _this = _possibleConstructorReturn(this, (StockTicker.__proto__ || Object.getPrototypeOf(StockTicker)).call(this));

        _this._stock = null;
        return _this;
    }

    _createClass(StockTicker, [{
        key: 'stock',
        get: function get() {
            return this._stock;
        },
        set: function set(value) {
            this._stock = value;
            this.notify();
        }
    }]);

    return StockTicker;
}(_Subject3.default);

exports.default = StockTicker;