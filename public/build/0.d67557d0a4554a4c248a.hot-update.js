webpackHotUpdate(0,{

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	  var action = arguments[1];

	  switch (action.type) {
	    default:
	      return state;
	  }
	};

	var _immutable = __webpack_require__(275);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultState = _immutable2.default.fromJS({ players: ['Player'] });

/***/ }

})