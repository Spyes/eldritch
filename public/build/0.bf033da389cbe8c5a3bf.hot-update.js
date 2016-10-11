webpackHotUpdate(0,{

/***/ 272:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return createStore(rootReducer, initialState);
	}

/***/ }

})