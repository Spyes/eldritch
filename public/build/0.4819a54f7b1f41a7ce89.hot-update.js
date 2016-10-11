webpackHotUpdate(0,{

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Entity = function Entity(props) {};

	Entity.propTypes = {
	  name: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    entities: state.entities
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Entity);

/***/ }

})