webpackHotUpdate(0,{

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	  var action = arguments[1];

	  switch (action.type) {
	    case "ADD_STATS_COMPONENT":
	      return state.set(action.entity, defaultState);

	    case "INCREASE_HEALTH":
	      return state.update('health', function (h) {
	        return h + 1;
	      });

	    case "DECREASE_HEALTH":
	      return state.update('health', function (h) {
	        return h - 1;
	      });

	    default:
	      return state;
	  }
	};

	var _immutable = __webpack_require__(202);

	var defaultState = (0, _immutable.Map)({
	  health: 0,
	  mana: 0
	});

/***/ }

})