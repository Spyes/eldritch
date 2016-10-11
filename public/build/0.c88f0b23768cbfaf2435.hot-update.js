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
	  stats: _statsReducer2.default
	});

/***/ },

/***/ 216:
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
	    case "ADD_RENDER_COMPONENT":
	      if (data) return state.set(entity, data);
	      return state.set(entity, initialState);

	    case "REMOVE_RENDER_COMPONENT":
	      return state.remove(entity);

	    default:
	      return state;
	  }
	};

	var _immutable = __webpack_require__(202);

	var initialState = (0, _immutable.Map)();

/***/ }

})