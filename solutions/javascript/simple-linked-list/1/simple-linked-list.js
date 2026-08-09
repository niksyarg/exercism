export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set next(element) {
    this._next = element;
  }
}

export class List {
  constructor(array = []) {
    this._head = null;
    this._length = 0;


    for (const item of array) {
      this.add(new Element(item));
    }
  }

  add(nextValue) {

    nextValue.next = this._head;
    this._head = nextValue;
    this._length++;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const result = [];
    let current = this._head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  reverse() {
    let prev = null;
    let current = this._head;
    let next = null;

    while (current !== null) {
      next = current.next; 
      current.next = prev; 
      prev = current;       
      current = next;      
    }

    this._head = prev;      
    return this;
  }
}

