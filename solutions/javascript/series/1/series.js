export class Series {
  constructor(series) {
    if (series === '') {
      throw new Error('series cannot be empty');
    }
    this.series = series;
  }

  slices(sliceLength) {
    const n = this.series.length;

    if (sliceLength > n) {
      throw new Error('slice length cannot be greater than series length');
    }
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }

    const result = [];
    for (let i = 0; i <= n - sliceLength; i++) {
     result.push(this.series.slice(i, i + sliceLength).split('').map(Number));

    }

    return result;
  }
}
