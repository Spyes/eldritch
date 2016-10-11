import { Map, List } from 'immutable';

const initialState = Map({
  entities: List([
    Map({
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
            name: "Sydney",
            coords: Map({
              x: 500,
              y: 409,
              r: 80
            })
          })
        }),
        Map({
          name: "Render",
          data: Map()
        })
      ])
    }),
    Map({
      id: "456DEF",
      components: List([
        Map({
          name: "Stats",
          data: Map({
            health: 2,
            mana: 3
          })
        }),
        Map({
          name: "Location",
          data: Map({
            name: "New York",
            coords: Map({
              x: 187,
              y: 266,
              r: 80
            })
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

export default function (state = initialState, action) {
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

    case "FETCHED_INVESTIGATORS":
      return state.set('investigators', action.investigators);
      
    default:
      return state;
  }
}
