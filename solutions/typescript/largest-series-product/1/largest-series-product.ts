export const largestProduct = (digits: string, span: number): number => {
  if (span < 0) throw new Error('Span must not be negative');
  if (span > digits.length) throw new Error('Span must not exceed string length');
  if (/\D/.test(digits)) throw new Error('Digits input must only contain digits');
  
  if (span === 0) return 1;

  let maxProduct = 0;

  for (let i = 0; i <= digits.length - span; i++) {
    const series = digits.substring(i, i + span);
    const product = series
      .split('')
      .reduce((acc, digit) => acc * parseInt(digit, 10), 1);

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};
