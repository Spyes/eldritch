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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  stats: _statsReducer2.default
	});

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	  var action = arguments[1];

	  switch (action.type) {
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

	var defaultState = (0, _immutable.Map)({ players: (0, _immutable.List)([]) });

/***/ }

})