webpackHotUpdate(0,{

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	  var type = action.type;
	  var entity = action.entity;
	  var data = action.data;


	  switch (type) {
	    case "ADD_LOCATION_COMPONENT":
	      if (data) return state.set(entity, data);
	      return state.set(entity, (0, _immutable.Map)());

	    default:
	      return state;
	  }
	};

	var _immutable = __webpack_require__(202);

/***/ }

})