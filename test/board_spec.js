import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';
import { createStore } from 'redux';

import board from '../public/js/reducers/boardReducer';

describe("Board", () => {
  describe("Reducer", () => {
    const initialState = Map({players: List()});
    const store = createStore(board, initialState);

    it("should start with no players", () => {
      expect(store.getState()).to.equal(fromJS({players: []}));
    });
  });
});
