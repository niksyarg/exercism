export class Rational {
  constructor(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
    this.numerator = numerator;
    this.denominator = denominator;
    this.reduce();
  }

  add(other) {
    const num = this.numerator * other.denominator + other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  sub(other) {
    const num = this.numerator * other.denominator - other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  mul(other) {
    const num = this.numerator * other.numerator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  div(other) {
    if (other.numerator === 0) {
      throw new Error("Division by zero");
    }
    const num = this.numerator * other.denominator;
    const den = this.denominator * other.numerator;
    return new Rational(num, den);
  }

  abs() {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(n) {
    if (n >= 0) {
      return new Rational(Math.pow(this.numerator, n), Math.pow(this.denominator, n));
    } else {
      const m = Math.abs(n);
      return new Rational(Math.pow(this.denominator, m), Math.pow(this.numerator, m));
    }
  }

 expreal(x) {
  const result = Math.pow(x, this.numerator / this.denominator);
  return Math.abs(result - Math.round(result)) < 1e-9 ? Math.round(result) : result;
}


  reduce() {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = Math.abs(gcd(this.numerator, this.denominator));
    
    this.numerator /= commonDivisor;
    this.denominator /= commonDivisor;

    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
    return this;
  }
}
