export function squareRoot(radicand: number): number {
  if (radicand < 0) throw new Error("Radicand must be a positive number");
  if (radicand === 0 || radicand === 1) return radicand;

  let left = 1;
  let right = radicand;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === radicand) {
      return mid;
    } else if (square < radicand) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
