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

	var _Stats = __webpack_require__(212);

	var _Stats2 = _interopRequireDefault(_Stats);

	var _Render = __webpack_require__(215);

	var _Render2 = _interopRequireDefault(_Render);

	var _Location = __webpack_require__(218);

	var _Location2 = _interopRequireDefault(_Location);

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
	      var entity = _this.props.entity;

	      switch (component.get('name')) {
	        case 'Stats':
	          return _react2.default.createElement(_Stats2.default, { key: key,
	            entity: entity.get('id'),
	            data: component.get('data') });
	        case 'Render':
	          return _react2.default.createElement(_Render2.default, { key: key,
	            entity: entity.get('id'),
	            data: component.get('data') });
	        case 'Location':
	          return _react2.default.createElement(_Location2.default, { key: key,
	            entity: entity.get('id'),
	            data: component.get('data') });
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

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Location = __webpack_require__(219);

	var _Location2 = _interopRequireDefault(_Location);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Location2.default;

/***/ },

/***/ 219:
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

	var _locationActions = __webpack_require__(220);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* ACTIONS */


	var Location = function (_Component) {
	  _inherits(Location, _Component);

	  function Location(props) {
	    _classCallCheck(this, Location);

	    return _possibleConstructorReturn(this, (Location.__proto__ || Object.getPrototypeOf(Location)).call(this, props));
	  }

	  _createClass(Location, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var entity = _props.entity;
	      var data = _props.data;

	      dispatch((0, _locationActions.addEntity)(entity, data));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var entity = _props2.entity;

	      dispatch((0, _locationActions.removeEntity)(entity));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Location'
	      );
	    }
	  }]);

	  return Location;
	}(_react.Component);

	Location.propsTypes = {
	  location: _react2.default.PropTypes.object
	};

	function mapStateToProps(state, props) {
	  return {
	    location: state.location.get(props.entity, (0, _immutable.Map)())
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Location);

/***/ },

/***/ 220:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addEntity = addEntity;
	exports.removeEntity = removeEntity;
	function addEntity(entity, data) {
	  return {
	    type: "ADD_LOCATION_COMPONENT",
	    entity: entity,
	    data: data
	  };
	}

	function removeEntity(entity) {
	  return {
	    type: "REMOVE_LOCATION_COMPONENT",
	    entity: entity
	  };
	}

/***/ }

})