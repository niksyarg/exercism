export function transform(old: { [key: string]: string[] }): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  for (const [score, letters] of Object.entries(old)) {
    const points = Number(score);
    for (const letter of letters) {
      result[letter.toLowerCase()] = points;
    }
  }

  return result;
}
