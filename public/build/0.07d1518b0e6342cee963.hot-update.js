webpackHotUpdate(0,{

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(256);

	var _reducers = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./reducers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return (0, _redux.createStore)(_reducers2.default, initialState);
	}

/***/ }

})