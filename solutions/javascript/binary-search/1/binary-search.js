export const find = (array, target) => {
  if (array.length === 0) {
    throw new Error('Value not in array');
  }

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = array[mid];

    if (value === target) {
      return mid;
    }

    if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  throw new Error('Value not in array');
};