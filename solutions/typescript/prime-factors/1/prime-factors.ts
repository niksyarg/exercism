export function calculatePrimeFactors(number: number): number[] {
  const factors: number[] = [];
  let divisor = 2;

  while (number > 1) {
    while (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
    }
    divisor++;
  }

  return factors;
}
