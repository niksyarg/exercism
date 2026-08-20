export function proverb(...words: string[]): string {
  if (words.length === 0) return '';

  const lines: string[] = [];

  for (let i = 0; i < words.length - 1; i++) {
    lines.push(`For want of a ${words[i]} the ${words[i + 1]} was lost.`);
  }

  lines.push(`And all for the want of a ${words[0]}.`);

  return lines.join('\n');
}