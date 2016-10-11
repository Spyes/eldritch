import { Map, List } from 'immutable';
import { expect } from 'chai';
import { createStore } from 'redux';

import game from '../public/js/reducers/gameReducer';

describe("Game", () => {
  describe("Reducer", () => {
    const initialState = Map({players: List()});
    const store = createStore(game, initialState);

    it("should start with no players", () => {
      expect(store.getState()).to.equal(Map({players: List()}));
    });

    it("should add players", () => {
      const expected = Map({players: List([Map({name: "Lewis"})])});

      const action = {type: "ADD_PLAYER", player: Map({name: "Lewis"})};
      store.dispatch(action);

      expect(store.getState()).to.equal(expected);
    });

    it("should remove players", () => {
      const local_store = createStore(game,
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

  describe("Component", () => {
    
  });
});
