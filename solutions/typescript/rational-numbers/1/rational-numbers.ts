export class Rational {
  private readonly num: number;
  private readonly den: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }

    const commonDivisor = this.gcd(Math.abs(numerator), Math.abs(denominator));
    let n = numerator / commonDivisor;
    let d = denominator / commonDivisor;

    if (d < 0) {
      n = -n;
      d = -d;
    }

    this.num = n;
    this.den = d;
  }

  private gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }

  get numerator(): number { return this.num; }
  get denominator(): number { return this.den; }

  add(other: Rational): Rational {
    return new Rational(
      this.num * other.den + other.num * this.den,
      this.den * other.den
    );
  }

  sub(other: Rational): Rational {
    return new Rational(
      this.num * other.den - other.num * this.den,
      this.den * other.den
    );
  }

  mul(other: Rational): Rational {
    return new Rational(this.num * other.num, this.den * other.den);
  }

  div(other: Rational): Rational {
    return new Rational(this.num * other.den, this.den * other.num);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.num), Math.abs(this.den));
  }

  exprational(n: number): Rational {
    if (n >= 0) {
      return new Rational(Math.pow(this.num, n), Math.pow(this.den, n));
    } else {
      const m = Math.abs(n);
      return new Rational(Math.pow(this.den, m), Math.pow(this.num, m));
    }
  }

  expreal(x: number): number {
    return Math.pow(Math.pow(x, this.num), 1 / this.den);
  }

  reduce(): Rational {
    return this;
  }
}
