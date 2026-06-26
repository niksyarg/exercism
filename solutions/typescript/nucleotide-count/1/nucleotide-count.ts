export function nucleotideCounts(dna: string) {
  const counts: { [key: string]: number } = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  };

  for (const nucleotide of dna) {
    if (counts[nucleotide] === undefined) {
      throw new Error('Invalid nucleotide in strand');
    }
    counts[nucleotide]++;
  }

  return counts;
}
