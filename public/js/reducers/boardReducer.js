import { Map, List } from 'immutable';

const defaultState = Map();

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
