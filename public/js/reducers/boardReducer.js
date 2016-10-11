import { Map, List } from 'immutable';

const defaultState = Map({
  players: List([
    Map({
      name: "Lewis",
      id: "123ABC",
      components: List([
        Map({
          name: "Stats",
          data: Map({
            health: 3,
            mana: 5
          })
        }),
        Map({
          name: "Location",
          data: Map({
            name: "Sydney"
          })
        }),
        Map({
          name: "Render",
          data: Map()
        })
      ])
    })
  ])
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case "ADD_PLAYER":
      return state.update('players', list => list.push(action.player));

    case "REMOVE_PLAYER":
      return state.update('players', list =>
        list.filterNot(
          player =>
            player.get('name') === action.player.get('name')
        )
      );
      
    default:
      return state;
  }
}
