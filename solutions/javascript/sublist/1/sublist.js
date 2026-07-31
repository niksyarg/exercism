export class List {
  constructor(items = []) {
    this.items = items;
  }

  compare(otherList) {
    const listA = this.items;
    const listB = otherList.items;

    const isAInB = isSublist(listA, listB);
    const isBInA = isSublist(listB, listA);

    if (isAInB && isBInA) {
      return 'EQUAL';
    }
    if (isAInB) {
      return 'SUBLIST';
    }
    if (isBInA) {
      return 'SUPERLIST';
    }
    return 'UNEQUAL';
  }
}

// Checks if 'small' is a contiguous sub-sequence of 'big'
function isSublist(small, big) {
  if (small.length === 0) return true;
  if (small.length > big.length) return false;

  for (let i = 0; i <= big.length - small.length; i++) {
    let match = true;
    for (let j = 0; j < small.length; j++) {
      if (big[i + j] !== small[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }

  return false;
}