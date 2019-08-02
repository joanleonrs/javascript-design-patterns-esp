'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Observer2 = require('./Observer');

var _Observer3 = _interopRequireDefault(_Observer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleObserver = function (_Observer) {
    _inherits(GoogleObserver, _Observer);

    function GoogleObserver(suje) {
        _classCallCheck(this, GoogleObserver);

        var _this = _possibleConstructorReturn(this, (GoogleObserver.__proto__ || Object.getPrototypeOf(GoogleObserver)).call(this));

        _this.dataSource = suje;
        suje.register(_this);
        return _this;
    }

    _createClass(GoogleObserver, [{
        key: 'update',
        value: function update() {
            var precio = this.dataSource.stock.precio;
            var simbolo = this.dataSource.stock.simbolo;

            //filtros reactivos
            if (simbolo == 'GOOG') console.log('El nuevo precio de Google es ' + precio);
        }
    }]);

    return GoogleObserver;
}(_Observer3.default);

exports.default = GoogleObserver;