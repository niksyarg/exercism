const ONES = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen'
];

const TENS = [
  '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

const SCALES = ['', 'thousand', 'million', 'billion'];

// Helper to translate numbers below 1000
function sayThreeDigits(number) {
  let parts = [];

  if (number >= 100) {
    parts.push(`${ONES[Math.floor(number / 100)]} hundred`);
    number %= 100;
  }

  if (number >= 20) {
    const ten = TENS[Math.floor(number / 10)];
    const remainder = number % 10;
    parts.push(remainder > 0 ? `${ten}-${ONES[remainder]}` : ten);
  } else if (number > 0) {
    parts.push(ONES[number]);
  }

  return parts.join(' ');
}

export const say = (n) => {
  if (n < 0 || n > 999_999_999_999) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }

  if (n === 0) return 'zero';

  let resultParts = [];
  let scaleIndex = 0;

  while (n > 0) {
    const chunk = n % 1000;
    if (chunk > 0) {
      const chunkText = sayThreeDigits(chunk);
      const scaleText = SCALES[scaleIndex];
      resultParts.unshift(scaleText ? `${chunkText} ${scaleText}` : chunkText);
    }
    n = Math.floor(n / 1000);
    scaleIndex++;
  }

  return resultParts.join(' ');
};