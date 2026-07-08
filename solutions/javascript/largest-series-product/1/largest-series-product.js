export const largestProduct = (digits, span) => {
  if (span < 0) throw new Error('span must not be negative');
  if (span > digits.length) throw new Error('span must not exceed string length');
  if (/\D/.test(digits)) throw new Error('digits input must only contain digits');
  
  let maxProduct = 0;

  for (let i = 0; i <= digits.length - span; i++) {
    const series = digits.slice(i, i + span);
    const product = [...series].reduce((acc, curr) => acc * Number(curr), 1);
    
    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};
