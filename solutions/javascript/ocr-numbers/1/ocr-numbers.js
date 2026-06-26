const DIGITS = {
  ' _ | ||_|   ': '0',
  '     |  |   ': '1',
  ' _  _||_    ': '2',
  ' _  _| _|   ': '3',
  '   |_|  |   ': '4',
  ' _ |_  _|   ': '5',
  ' _ |_ |_|   ': '6',
  ' _   |  |   ': '7',
  ' _ |_||_|   ': '8',
  ' _ |_| _|   ': '9'
};

export const convert = (input) => {
  const lines = input.split('\n');
  
  if (lines.length % 4 !== 0) throw new Error('Number of lines must be a multiple of four.');
  if (lines[0].length % 3 !== 0) throw new Error('Number of columns must be a multiple of three.');

  const results = [];

  for (let row = 0; row < lines.length; row += 4) {
    let rowDigits = '';
    for (let col = 0; col < lines[row].length; col += 3) {
      let digitKey = '';
      for (let i = 0; i < 4; i++) {
        digitKey += lines[row + i].substring(col, col + 3);
      }
      rowDigits += DIGITS[digitKey] || '?';
    }
    results.push(rowDigits);
  }

  return results.join(',');
};
