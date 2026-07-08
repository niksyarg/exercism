export const classify = (number) => {
  if (number <= 0) {
 throw new Error('Classification is only possible for natural numbers.');

  }

  let aliquotSum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      aliquotSum += i;
    }
  }

  if (aliquotSum === number) {
    return 'perfect';
  } else if (aliquotSum > number) {
    return 'abundant';
  } else {
    return 'deficient';
  }
};
