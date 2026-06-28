
export function translate2d(dx, dy) {
  return (x, y) => [x + dx, y + dy];
}

export function scale2d(sx, sy) {
  return (x, y) => [x * sx, y * sy];
}


export function composeTransform(f, g) {
  return (x, y) => {
    const [firstX, firstY] = f(x, y);
    return g(firstX, firstY);
  };
}


export function memoizeTransform(f) {
  let lastArgs = null;
  let lastResult = null;

  return (x, y) => {
    if (lastArgs && lastArgs[0] === x && lastArgs[1] === y) {
      return lastResult;
    }
    lastArgs = [x, y];
    lastResult = f(x, y);
    return lastResult;
  };
}

