import { Map } from 'immutable';

const initialState = Map();

export default function (state = initialState, action) {
  const { type, entity, data } = action;

  switch (type) {
    case "ADD_RENDER_COMPONENT":
      if (data) return state.set(entity, data);
      return state.set(entity, initialState);

    case "REMOVE_RENDER_COMPONENT":
      return state.remove(entity);
      
    default:
      return state;
  }
}
