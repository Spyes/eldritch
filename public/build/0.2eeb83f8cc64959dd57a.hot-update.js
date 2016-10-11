webpackHotUpdate(0,{

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Stats = function Stats(props) {
	  return _react2.default.createElement(
	    'h1',
	    null,
	    props.health
	  );
	};

	function mapStateToProps(state) {
	  return {
	    stats: state.stats
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStatToProps)(Stats);

/***/ }

})