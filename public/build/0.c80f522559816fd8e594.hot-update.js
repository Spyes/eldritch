webpackHotUpdate(0,{

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(78);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(249);

	var _Player = __webpack_require__(278);

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

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    board: state.board
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Board);

/***/ }

})