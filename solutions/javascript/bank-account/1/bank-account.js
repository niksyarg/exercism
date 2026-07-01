export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

export class BankAccount {
  constructor() {
    this._balance = 0;
    this._isOpen = false;
  }

  open() {
    if (this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = true;
    this._balance = 0;
  }

  close() {
    if (!this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = false;
  }

  deposit(amount) {
    if (!this._isOpen || amount < 0) {
      throw new ValueError();
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this._isOpen || amount < 0 || amount > this._balance) {
      throw new ValueError();
    }
    this._balance -= amount;
  }

  get balance() {
    if (!this._isOpen) {
      throw new ValueError();
    }
    return this._balance;
  }
}
