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

	var _immutable = __webpack_require__(202);

	var _Player = __webpack_require__(206);

	var _Player2 = _interopRequireDefault(_Player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var drawEntity = function drawEntity(entity, key) {
	  return _react2.default.createElement(Entity, { key: key, data: entity });
	};

	/* COMPONENTS */


	var Board = function Board(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    props.board.get('players', (0, _immutable.List)()).map(drawEntity)
	  );
	};

	Board.propTypes = {
	  board: _react2.default.PropTypes.object
	};

	Board.defaultProps = {
	  board: (0, _immutable.Map)()
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

/***/ }

})