export function addEntity(entity, data) {
  return {
    type: "ADD_STATS_COMPONENT",
    entity,
    data
  };
}

export function removeEntity(entity) {
  return {
    type: "REMOVE_STATS_COMPONENT",
    entity
  };
}

export function increaseHealth(entity, amount = 1) {
  return {
    type: 'INCREASE_HEALTH',
    entity,
    amount
  };
}

export function decreaseHealth(entity, amount = 1) {
  return {
    type: 'DECREASE_HEALTH',
    entity,
    amount
  };
}
