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

	var _immutable = __webpack_require__(202);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Entity = function Entity(props) {
	  var entities = props.entities;


	  return _react2.default.createElement(
	    'div',
	    null,
	    props.entities
	  );
	};

	Entity.propTypes = {
	  entities: (0, _immutable.List)()
	};

	function mapStateToProps(state) {
	  return {
	    entities: state.entities
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Entity);

/***/ }

})