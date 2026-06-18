export function isPangram(sentence: string) : boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerSentence = sentence.toLowerCase();

  return[...alphabet].every((letter) => lowerSentence.includes(letter));
}
