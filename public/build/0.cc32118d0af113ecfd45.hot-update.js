webpackHotUpdate(0,{

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Board = __webpack_require__(205);

	var _Board2 = _interopRequireDefault(_Board);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Board2.default;

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(176);

	var _Player = __webpack_require__(206);

	var _Player2 = _interopRequireDefault(_Player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Board = function Board(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    props.board.get('players', []).map(function (player, key) {
	      return _react2.default.createElement(_Player2.default, { key: key });
	    })
	  );
	};

	/* COMPONENTS */


	Board.propTypes = {
	  players: _react2.default.PropTypes.array
	};

	function mapStateToProps(state) {
	  return {
	    board: state.board
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Board);

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Player = __webpack_require__(207);

	var _Player2 = _interopRequireDefault(_Player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Player2.default;

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Player = function Player(props) {
	  return _react2.default.createElement(
	    'span',
	    null,
	    props.name
	  );
	};

	Player.propTypes = {
	  name: _react2.default.PropTypes.string
	};

	exports.default = Player;

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Stats = __webpack_require__(209);

	var _Stats2 = _interopRequireDefault(_Stats);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Stats2.default;

/***/ },

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

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Stats);

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Board = __webpack_require__(204);

	var _Board2 = _interopRequireDefault(_Board);

	var _Stats = __webpack_require__(208);

	var _Stats2 = _interopRequireDefault(_Stats);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* COMPONENTS */


	var Game = function (_Component) {
	  _inherits(Game, _Component);

	  function Game(props) {
	    _classCallCheck(this, Game);

	    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));
	  }

	  _createClass(Game, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Board2.default, null),
	        _react2.default.createElement(_Stats2.default, null)
	      );
	    }
	  }]);

	  return Game;
	}(_react.Component);

	exports.default = Game;

/***/ }

})