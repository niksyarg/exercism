export const square = (n: number): bigint => {
  if (n < 1 || n > 64) {
    throw new Error('Square must be between 1 and 64');
  }
  return 2n ** BigInt(n - 1);
}

export const total = (): bigint => {
  return (2n ** 64n) - 1n;
}
