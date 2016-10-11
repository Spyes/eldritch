webpackHotUpdate(0,{

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(176);

	var _immutable = __webpack_require__(202);

	var _Entity = __webpack_require__(208);

	var _Entity2 = _interopRequireDefault(_Entity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var drawEntity = function drawEntity(entity, key) {
	  return _react2.default.createElement(_Entity2.default, { key: key, entity: entity });
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

/***/ }

})