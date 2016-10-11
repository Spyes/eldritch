export function getLocationStyle(location) {
  if (!location) return {};
  const left = location.getIn(['coords', 'x']);
  const top = location.getIn(['coords', 'y']) + 150;
  return {
    position: "absolute",
    backgroundColor: "white",
    left,
    top
  };
}
