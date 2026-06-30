export class List {
  constructor(values = []) {
    this.values = [...values];
  }

  append(otherList) {
    this.values = [...this.values, ...otherList.values];
    return this;
  }

  concat(listOfLists) {
    let result = [...this.values];
    for (const list of listOfLists.values) {
      result = [...result, ...list.values];
    }
    this.values = result;
    return this;
  }

  filter(predicate) {
    let result = [];
    for (const item of this.values) {
      if (predicate(item)) {
        result = [...result, item];
      }
    }
    return new List(result);
  }

  map(callback) {
    let result = [];
    for (const item of this.values) {
      result = [...result, callback(item)];
    }
    return new List(result);
  }

  length() {
    let count = 0;
    for (const _ of this.values) {
      count++;
    }
    return count;
  }

  foldl(callback, initial) {
    let accumulator = initial;
    for (const item of this.values) {
      accumulator = callback(accumulator, item);
    }
    return accumulator;
  }

  foldr(callback, initial) {
    let accumulator = initial;
    const reversed = this.reverse().values;
    for (const item of reversed) {
      accumulator = callback(accumulator, item);
    }
    return accumulator;
  }

  reverse() {
    let result = [];
    for (const item of this.values) {
      result = [item, ...result];
    }
    return new List(result);
  }
}
