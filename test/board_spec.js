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

    it("should add players", () => {
      const expected = Map({players: List([Map({name: "Lewis"})])});

      const action = {type: "ADD_PLAYER", player: Map({name: "Lewis"})};
      store.dispatch(action);

      expect(store.getState()).to.equal(expected);
    });

    it("should remove players", () => {
      const local_store = createStore(board,
                                      Map({players:
                                                   List([
                                                     Map({name: "Lewis"})
                                                   ])
                                      }));
      const expected = Map({players: List()});

      const remove_action = {type: "REMOVE_PLAYER", player: Map({name: "Lewis"})};
      local_store.dispatch(remove_action);

      expect(local_store.getState()).to.equal(expected);
    });
  });
});
