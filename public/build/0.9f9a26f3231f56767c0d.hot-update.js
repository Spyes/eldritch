webpackHotUpdate(0,{

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
	  var action = arguments[1];
	  var type = action.type;
	  var entity = action.entity;
	  var amount = action.amount;
	  var data = action.data;

	  switch (type) {
	    case "ADD_STATS_COMPONENT":
	      if (data) return state.set(entity, data);
	      return state.set(entity, defaultStats);

	    case "REMOVE_STATS_COMPONENT":
	      return state.delete(entity);

	    case "INCREASE_HEALTH":
	      return state.update(entity, function (stats) {
	        return stats.update('health', function (h) {
	          return h + amount;
	        });
	      });

	    case "DECREASE_HEALTH":
	      return state.update(entity, function (stats) {
	        return stats.update('health', function (h) {
	          return h - amount;
	        });
	      });

	    default:
	      return state;
	  }
	};

	var _immutable = __webpack_require__(202);

	var defaultStats = (0, _immutable.Map)({
	  health: 0,
	  mana: 0
	});

/***/ }

})