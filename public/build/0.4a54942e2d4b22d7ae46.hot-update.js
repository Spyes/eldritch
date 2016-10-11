webpackHotUpdate(0,{

/***/ 209:
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

	var _Stats = __webpack_require__(210);

	var _Stats2 = _interopRequireDefault(_Stats);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* COMPONENTS */


	var Entity = function (_Component) {
	  _inherits(Entity, _Component);

	  function Entity(props) {
	    _classCallCheck(this, Entity);

	    var _this = _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this, props));

	    _this.addComponent = function (component, key) {
	      switch (component.get('name')) {
	        case 'Stats':
	          console.log(component.get('data').toJS());
	          return _react2.default.createElement(_Stats2.default, { key: key, data: component.get('data') });
	        default:
	          return null;
	      }
	    };

	    return _this;
	  }

	  _createClass(Entity, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.entity.get('components', (0, _immutable.List)()).map(this.addComponent)
	      );
	    }
	  }]);

	  return Entity;
	}(_react.Component);

	exports.default = Entity;


	Entity.propTypes = {
	  entity: _react2.default.PropTypes.object
	};

	Entity.defaultProps = {
	  entity: (0, _immutable.Map)()
	};

/***/ }

})