export const rotate = (text, shift) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  return text.split('').map(char => {
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);

    if (index === -1) return char;

    const newIndex = (index + shift) % 26;
    const newChar = alphabet[newIndex];

    return char === lowerChar ? newChar : newChar.toUpperCase();
  }).join('');
};
