export function isIsogram(word: string): boolean {
  const lettersOnly = word.toLowerCase().replace(/[\s-]/g, '');
  
  return new Set(lettersOnly).size === lettersOnly.length;
}
