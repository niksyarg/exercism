const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const REVERSED = [...ALPHABET].reverse().join('');

function transform(char: string): string {
  const index = ALPHABET.indexOf(char.toLowerCase());
  if (index !== -1) return REVERSED[index];
  return /\d/.test(char) ? char : '';
}

export function encode(plainText: string): string {
  const processed = [...plainText]
    .map(transform)
    .join('');

  return processed.match(/.{1,5}/g)?.join(' ') || '';
}

export function decode(cipherText: string): string {
  return [...cipherText]
    .map(transform)
    .join('');
}
