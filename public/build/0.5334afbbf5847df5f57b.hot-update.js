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

	var addComponent = function addComponent(component) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'comp'
	  );
	};

	var Entity = function Entity(props) {
	  console.log(props);
	  return _react2.default.createElement(
	    'div',
	    null,
	    props.entity.get('components', (0, _immutable.List)()).map(addComponent)
	  );
	};

	Entity.propTypes = {
	  entity: _react2.default.PropTypes.object
	};

	Entity.defaultProps = {
	  entity: (0, _immutable.Map)()
	};

	exports.default = Entity;

/***/ }

})