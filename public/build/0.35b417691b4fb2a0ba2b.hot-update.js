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
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Board);

/***/ }

})