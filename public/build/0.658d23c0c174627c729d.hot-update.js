webpackHotUpdate(0,{

/***/ 214:
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

	var _renderActions = __webpack_require__(215);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* ACTIONS */


	var Render = function (_Component) {
	  _inherits(Render, _Component);

	  function Render(props) {
	    _classCallCheck(this, Render);

	    return _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this, props));
	  }

	  _createClass(Render, [{
	    key: 'componentsWillMount',
	    value: function componentsWillMount() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var entity = _props.entity;
	      var data = _props.data;

	      dispatch((0, _renderActions.addEntity)(entity, data));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var entity = _props2.entity;

	      dispatch((0, _renderActions.removeEntity)(entity));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return Render;
	}(_react.Component);

	function mapStateToProps(state, props) {
	  return {
	    render: state.render.get(props.entity, (0, _immutable.Map)()),
	    location: state.location.get(props.entity, (0, _immutable.Map)())
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Render);

/***/ }

})