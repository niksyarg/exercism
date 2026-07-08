export function triplets({ minFactor = 1, maxFactor, sum }) {
  const results = [];
  const limit = maxFactor || sum;


  for (let a = minFactor; a <= Math.floor(sum / 3); a++) {

    const numerator = sum ** 2 - 2 * sum * a;
    const denominator = 2 * (sum - a);
    
    if (numerator % denominator === 0) {
      const b = numerator / denominator;
      const c = sum - a - b;

      if (b > a && b <= limit && c <= limit) {
        results.push(new Triplet(a, b, c));
      }
    }
  }

  return results;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
