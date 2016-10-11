webpackHotUpdate(0,{

/***/ 212:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addEntity = addEntity;
	exports.removeEntity = removeEntity;
	exports.increaseHealth = increaseHealth;
	exports.decreaseHealth = decreaseHealth;
	function addEntity(entity, data) {
	  return {
	    type: "ADD_STATS_COMPONENT",
	    entity: entity,
	    data: data
	  };
	}

	function removeEntity(entity) {
	  return {
	    type: "REMOVE_STATS_COMPONENT",
	    entity: entity
	  };
	}

	function increaseHealth(entity) {
	  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	  return {
	    type: 'INCREASE_HEALTH',
	    entity: entity,
	    amount: amount
	  };
	}

	function decreaseHealth(entity) {
	  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	  return {
	    type: 'DECREASE_HEALTH',
	    entity: entity,
	    amount: amount
	  };
	}

/***/ }

})