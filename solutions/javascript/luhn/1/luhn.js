export const valid = (string) => {
  const cleanString = string.replace(/\s/g, '');


  if (cleanString.length <= 1 || /\D/.test(cleanString)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;


  for (let i = cleanString.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanString[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
