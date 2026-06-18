export function toRna(dna: string): string {
  const map: Record<string, string> = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  return dna.split('').map(char => {
    if (map[char]) {
      return map[char];
    }
    throw new Error('Invalid input DNA.');
  }).join('');
}

