export function addEntity(entity, data) {
  return {
    type: "ADD_LOCATION_COMPONENT",
    entity,
    data
  };
}

export function removeEntity(entity) {
  return {
    type: "REMOVE_LOCATION_COMPONENT",
    entity
  };
}
