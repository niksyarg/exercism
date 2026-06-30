export class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
    this.a = this.sides[0];
    this.b = this.sides[1];
    this.c = this.sides[2];
  }

  get isValid() {
    return this.a > 0 && this.a + this.b >= this.c;
  }

  get isEquilateral() {
    return this.isValid && this.a === this.c;
  }

  get isIsosceles() {
    return this.isValid && (this.a === this.b || this.b === this.c);
  }

  get isScalene() {
    return this.isValid && this.a !== this.b && this.b !== this.c;
  }
}
