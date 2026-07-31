export const rows = (letter) => {
  const startCode = 'A'.charCodeAt(0);
  const endCode = letter.charCodeAt(0);
  const size = endCode - startCode;
  const result = [];


  for (let i = 0; i <= size; i++) {
    const currentLetter = String.fromCharCode(startCode + i);
    const outerSpaces = ' '.repeat(size - i);

    if (i === 0) {
    
      result.push(`${outerSpaces}A${outerSpaces}`);
    } else {
     
      const innerSpaces = ' '.repeat(2 * i - 1);
      result.push(`${outerSpaces}${currentLetter}${innerSpaces}${currentLetter}${outerSpaces}`);
    }
  }


  for (let i = size - 1; i >= 0; i--) {
    result.push(result[i]);
  }

  return result;
};
