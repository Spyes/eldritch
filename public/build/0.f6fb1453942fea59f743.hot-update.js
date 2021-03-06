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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Board = function Board(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    props.players.map(function (player, key) {
	      return _react2.default.createElement(
	        'span',
	        { key: key },
	        player
	      );
	    })
	  );
	};

	Board.propTypes = {
	  players: _react2.default.PropTypes.array
	};

	Board.defaultProps = {
	  players: ["test"]
	};

	exports.default = Board;

/***/ }

})