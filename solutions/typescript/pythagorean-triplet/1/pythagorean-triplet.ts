type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

class Triplet {
  private readonly factors: [number, number, number];

  constructor(a: number, b: number, c: number) {
    this.factors = [a, b, c];
  }

  toArray(): [number, number, number] {
    return this.factors;
  }
}

export function triplets({ minFactor = 1, maxFactor, sum }: Options): Triplet[] {
  const result: Triplet[] = [];
  
 
  for (let a = minFactor; a <= sum / 3; a++) {

    for (let b = a + 1; b <= sum / 2; b++) {
      const c = sum - a - b;

    
      if (c > b && a * a + b * b === c * c) {
       
        if (maxFactor && c > maxFactor) continue;
        
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}
