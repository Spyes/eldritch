webpackHotUpdate(0,{

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(183);

	var _boardReducer = __webpack_require__(201);

	var _boardReducer2 = _interopRequireDefault(_boardReducer);

	var _statsReducer = __webpack_require__(203);

	var _statsReducer2 = _interopRequireDefault(_statsReducer);

	var _renderReducer = __webpack_require__(216);

	var _renderReducer2 = _interopRequireDefault(_renderReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  stats: _statsReducer2.default,
	  render: _renderReducer2.default,
	  location: location
	});

/***/ }

})