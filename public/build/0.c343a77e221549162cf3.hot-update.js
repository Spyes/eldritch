webpackHotUpdate(0,{

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(176);

	var _immutable = __webpack_require__(202);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Stats = function Stats(props) {
	  var data = props.data;


	  return _react2.default.createElement(
	    'div',
	    null,
	    data.get('health')
	  );
	};

	Stats.propTypes = {
	  data: _react2.default.PropTypes.object
	};

	Stats.defaultProps = {
	  data: (0, _immutable.Map)()
	};

	exports.default = Stats;

/***/ }

})