export const squareRoot = (number) => {
  if (number === 0 || number === 1) {
    return number;
  }

  let start = 1;
  let end = number;
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let square = mid * mid;

    if (square === number) {
      return mid;
    }

    if (square < number) {
      start = mid + 1;
      result = mid; // Сохраняем на случай, если точного корня нет
    } else {
      end = mid - 1;
    }
  }

  return result;
};
