import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';
import { createStore } from 'redux';

import stats from '../public/js/reducers/statsReducer';

describe("Stats", () => {

  describe("Reducer", () => {

    describe("Basics", () => {
      let initialState = Map();  
      let store = createStore(stats, initialState);

      it("should start with no entities", () => {
        expect(store.getState()).to.equal(Map());
      });

      it("should add component to entity with default values", () => {
        let entity = "123ABC";
        let action = {type: "ADD_STATS_COMPONENT", entity};
        store.dispatch(action);
        let expected = Map().set(entity, Map({
          health: 0,
          mana: 0
        }));
        expect(store.getState()).to.equal(expected);
      });

      it("should add component to entity with specific values", () => {
        let entity = "123ABC";
        let data = Map({health: 5, mana: 5});
        let action = {type: "ADD_STATS_COMPONENT", entity, data};
        store.dispatch(action);
        let expected = Map().set(entity, data);
        expect(store.getState()).to.equal(expected);
      });
      
      it("should remove component from entity", () => {
        let entity = "123ABC";
        let action = {type: "REMOVE_STATS_COMPONENT", entity};
        store.dispatch(action);
        let expected = Map();
        expect(store.getState()).to.equal(expected);
      });
    });

    describe("Actions", () => {
      let entity = "123ABC";
      let initialState = Map({[entity]: Map({health: 2, mana: 2})});
      let store = createStore(stats, initialState);

      it("should increase health of specific entity", () => {
        const action = { type: "INCREASE_HEALTH", entity, amount: 1 };
        store.dispatch(action);
        const expected = Map().set(entity, Map({
          health: 3,
          mana: 2
        }));
        expect(store.getState()).to.equal(expected);
      });

      it("should decrease health of specific entity", () => {
        let action = { type: "DECREASE_HEALTH", entity, amount: 1 };
        store.dispatch(action);
        let expected = Map().set(entity, Map({
          health: 2,
          mana: 2
        }));
        expect(store.getState()).to.equal(expected);
      });
    });

  });

});
