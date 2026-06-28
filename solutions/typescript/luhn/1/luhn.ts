export function valid(digitString: string): boolean {
  const cleanString = digitString.replace(/\s/g, '');

  if (cleanString.length <= 1 || /\D/.test(cleanString)) {
    return false;
  }

  let sum = 0;
  const digits = [...cleanString].map(Number);


  for (let i = 0; i < digits.length; i++) {
    let digit = digits[digits.length - 1 - i];


    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }


  return sum % 10 === 0;
}
