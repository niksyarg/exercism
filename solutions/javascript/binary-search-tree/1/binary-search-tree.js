export class BinarySearchTree {
  constructor(data) {
    this._data = data;
    this._left = null;
    this._right = null;
  }

  get data() {
    return this._data;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  insert(value) {
    if (value <= this._data) {
      if (this._left) {
        this._left.insert(value);
      } else {
        this._left = new BinarySearchTree(value);
      }
    } else {
      if (this._right) {
        this._right.insert(value);
      } else {
        this._right = new BinarySearchTree(value);
      }
    }
  }

  each(callback) {
    if (this._left) {
      this._left.each(callback);
    }
    
    callback(this._data);
    
    if (this._right) {
      this._right.each(callback);
    }
  }
}
