export class Squares {
  private count: number;

  constructor(count: number) {
    this.count = count;
  }
  get sumOfSquares(): number {
    return (this.count * (this.count + 1) * (2 * this.count + 1)) / 6;
  }
  get squareOfSum(): number {
    const sum = (this.count * (this.count + 1)) / 2;
    return Math.pow(sum, 2);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
