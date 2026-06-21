export function count(subtitle: string) {
  const counts = new Map<string, number>();
  const words = subtitle.toLowerCase().match(/[a-z0-9]+('[a-z0-9]+)?/g);
  
  if (words) {
    for (const word of words) {
      counts.set(word, (counts.get(word) || 0) + 1);
    }
  }
  
  return counts;
}

