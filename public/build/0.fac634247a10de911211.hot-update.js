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
	  var stats = props.stats;


	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      null,
	      'Health: ',
	      stats.get('health')
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      'Mana: ',
	      stats.get('mana')
	    )
	  );
	};

	Stats.propTypes = {
	  stats: _react2.default.PropTypes.object
	};

	Stats.default;

	function mapStateToProps(state) {
	  return {
	    stats: state.stats
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Stats);

/***/ }

})