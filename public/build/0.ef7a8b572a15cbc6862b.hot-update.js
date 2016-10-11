webpackHotUpdate(0,{

/***/ 201:
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
	      console.log('from boardReducer');
	      return state;

	    case "ADD_PLAYER":
	      return state.update('players', function (list) {
	        return list.push(action.player);
	      });

	    case "REMOVE_PLAYER":
	      return state.update('players', function (list) {
	        return list.filterNot(function (player) {
	          return player.get('name') === action.player.get('name');
	        });
	      });

	    default:
	      return state;
	  }
	};

	var _immutable = __webpack_require__(202);

	var defaultState = (0, _immutable.Map)({
	  players: (0, _immutable.List)([(0, _immutable.Map)({
	    name: "Lewis",
	    id: "123ABC",
	    components: (0, _immutable.List)([(0, _immutable.Map)({
	      name: "Stats",
	      data: (0, _immutable.Map)({
	        health: 3,
	        mana: 5
	      })
	    })])
	  })])
	});

/***/ }

})