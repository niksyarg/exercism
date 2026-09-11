export function makeDiamond(character: string): string {
  const startCode = 'A'.charCodeAt(0);
  const targetCode = character.toUpperCase().charCodeAt(0);
  

  if (targetCode < startCode || targetCode > 'Z'.charCodeAt(0)) {
    throw new Error('Пожалуйста, введите букву от A до Z');
  }

  const size = targetCode - startCode;
  const lines: string[] = [];

 
  for (let i = 0; i <= size; i++) {
    const currentLetter = String.fromCharCode(startCode + i);
    const outerSpaces = ' '.repeat(size - i);

    if (i === 0) {
      
      lines.push(`${outerSpaces}A${outerSpaces}`);
    } else {
      
      const innerSpaces = ' '.repeat(2 * i - 1);
      lines.push(`${outerSpaces}${currentLetter}${innerSpaces}${currentLetter}${outerSpaces}`);
    }
  }

  
  for (let i = size - 1; i >= 0; i--) {
    lines.push(lines[i]);
  }

 
  return lines.join('\n') + '\n';
}
