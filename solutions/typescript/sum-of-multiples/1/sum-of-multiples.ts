export function sum(factors: number[], limit: number): number {
  const uniqueMultiples = new Set<number>();

  factors.forEach((factor) => {
    if (factor === 0) return;

    for (let i = factor; i < limit; i += factor) {
      uniqueMultiples.add(i);
    }
  });

  return Array.from(uniqueMultiples).reduce((acc, curr) => acc + curr, 0);
}
