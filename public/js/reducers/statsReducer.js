import { Map } from 'immutable';

const defaultStats = Map({
  health: 0,
  mana: 0
});

export default function (state = Map(), action) {
  const { type, entity, amount, data } = action;

  switch (type) {
    case "ADD_STATS_COMPONENT":
      if (data) return state.set(entity, data);
      return state.set(entity, defaultStats);

    case "REMOVE_STATS_COMPONENT":
      return state.delete(entity);

    case "INCREASE_HEALTH":
      return state.update(entity, stats => stats.update('health', h => h+amount));

    case "DECREASE_HEALTH":
      return state.update(entity, stats => stats.update('health', h => h-amount));

    default:
      return state;
  }
}
