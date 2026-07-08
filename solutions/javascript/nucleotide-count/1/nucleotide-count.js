export function countNucleotides(strand) {
  let counts = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };

  for (const nucleotide of strand) {
    if (counts.hasOwnProperty(nucleotide)) {
      counts[nucleotide]++;
    } else {
      throw new Error('Invalid nucleotide in strand');
    }
  }

  return `${counts['A']} ${counts['C']} ${counts['G']} ${counts['T']}`;
}
