export function getCoords(elem: Element) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top,
    right: box.right,
    bottom: box.bottom,
    left: box.left,
  };
}
