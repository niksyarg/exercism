export class Triangle {
  private sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides.sort((a, b) => a - b);
  }

  private get isValid(): boolean {
    const [a, b, c] = this.sides;
    return a > 0 && a + b > c;
  }

  get isEquilateral(): boolean {
    if (!this.isValid) return false;
    const [a, b, c] = this.sides;
    return a === b && b === c;
  }

  get isIsosceles(): boolean {
    if (!this.isValid) return false;
    const [a, b, c] = this.sides;
    return a === b || b === c || a === c;
  }

  get isScalene(): boolean {
    if (!this.isValid) return false;
    const [a, b, c] = this.sides;

    return a !== b && b !== c && a !== c;
  }
}
