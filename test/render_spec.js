import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';
import { createStore } from 'redux';

import * as actions from '../public/js/actions/renderActions';
import render from '../public/js/reducers/renderReducer';

describe("Render", () => {

  describe("Reducer", () => {

    describe("Basics", () => {
      let initialState = Map();
      let store = createStore(render, initialState);

      it("should start with no entities", () => {
        expect(store.getState()).to.equal(Map());
      });

      it("should add component to entity with default values", () => {
        let entity = "123ABC";
        store.dispatch(actions.addEntity(entity));
        let expected = Map().set(entity, Map({}));
        expect(store.getState()).to.equal(expected);
      });

      it("should add component to entity with specific values", () => {
        let entity = "123ABC";
        let data = Map({});
        store.dispatch(actions.addEntity(entity, data));
        let expected = Map().set(entity, data);
        expect(store.getState()).to.equal(expected);
      });
      
      it("should remove component from entity", () => {
        let entity = "123ABC";
        store.dispatch(actions.removeEntity(entity));
        let expected = Map();
        expect(store.getState()).to.equal(expected);
      });
    });

    describe("Actions", () => {
      
    });
    
  });

});
