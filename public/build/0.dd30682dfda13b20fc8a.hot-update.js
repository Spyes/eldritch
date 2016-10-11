webpackHotUpdate(0,{

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(183);

	var _boardReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./boardReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _boardReducer2 = _interopRequireDefault(_boardReducer);

	var _statsReducer = __webpack_require__(203);

	var _statsReducer2 = _interopRequireDefault(_statsReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  stats: _statsReducer2.default
	});

/***/ }

})