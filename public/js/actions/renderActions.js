export function addEntity(entity, data) {
  return {
    type: "ADD_RENDER_COMPONENT",
    entity,
    data
  };
}

export function removeEntity(entity) {
  return {
    type: "REMOVE_RENDER_COMPONENT",
    entity
  };
}
