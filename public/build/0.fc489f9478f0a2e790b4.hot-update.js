webpackHotUpdate(0,{

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

	var _Entity = __webpack_require__(212);

	var _Entity2 = _interopRequireDefault(_Entity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var drawEntity = function drawEntity(entity, key) {
	  return _react2.default.createElement(_Entity2.default, { key: key, data: entity });
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

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Player = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Player\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Player2 = _interopRequireDefault(_Player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Player2.default;

/***/ }

})