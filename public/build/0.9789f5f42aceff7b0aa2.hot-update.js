webpackHotUpdate(0,{

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(176);

	var _immutable = __webpack_require__(202);

	var _statsActions = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions/statsActions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* ACTIONS */


	var Stats = function (_Component) {
	  _inherits(Stats, _Component);

	  function Stats(props) {
	    _classCallCheck(this, Stats);

	    return _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).call(this, props));
	  }

	  _createClass(Stats, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _statsActions.addEntity)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          'Health: ',
	          data.get('health')
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Mana: ',
	          data.get('mana')
	        )
	      );
	    }
	  }]);

	  return Stats;
	}(_react.Component);

	Stats.propTypes = {
	  data: _react2.default.PropTypes.object
	};
	Stats.defaultProps = {
	  data: (0, _immutable.Map)()
	};
	exports.default = Stats;
	;

/***/ }

})