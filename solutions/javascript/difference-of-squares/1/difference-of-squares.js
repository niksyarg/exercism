export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {

    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }

  get squareOfSum() {

    const sum = (this.n * (this.n + 1)) / 2;
    return sum ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
