export class CustomSet {
  constructor(elements = []) {
    this.elements = [];
    elements.forEach((element) => this.add(element));
  }

  empty() {
    return this.elements.length === 0;
  }

  contains(element) {
    return this.elements.includes(element);
  }

  add(element) {
    if (!this.contains(element)) {
      this.elements.push(element);
    }
    return this;
  }

  subset(otherSet) {
    return this.elements.every((element) => otherSet.contains(element));
  }

  disjoint(otherSet) {
    return this.elements.every((element) => !otherSet.contains(element));
  }

  eql(otherSet) {
    if (this.elements.length !== otherSet.elements.length) {
      return false;
    }
    return this.subset(otherSet);
  }

  union(otherSet) {
    const combined = new CustomSet(this.elements);
    otherSet.elements.forEach((element) => combined.add(element));
    return combined;
  }

  intersection(otherSet) {
    const sharedElements = this.elements.filter((element) =>
      otherSet.contains(element)
    );
    return new CustomSet(sharedElements);
  }

  difference(otherSet) {
    const uniqueElements = this.elements.filter(
      (element) => !otherSet.contains(element)
    );
    return new CustomSet(uniqueElements);
  }
}