export class InputCell {
  constructor(value) {
    this._value = value;
    this.dependents = []; // Список ячеек, которые зависят от этой
  }

  get value() {
    return this._value;
  }

  setValue(value) {
    if (this._value !== value) {
      this._value = value;
      
      // 1. Сначала обновляем значения во всех зависимых ячейках
      this.dependents.forEach(cell => cell.updateValue());
      
      // 2. Только после полного обновления системы запускаем колбэки
      this.dependents.forEach(cell => cell.fireCallbacks());
    }
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.callbacks = new Set();
    
    // Считаем начальное значение
    this._value = this.fn(this.inputCells);
    this.oldValue = this._value;

    // Подписываемся на изменения в родительских ячейках
    this.inputCells.forEach(cell => cell.dependents.push(this));
    this.dependents = []; // Эта ячейка тоже может быть родителем для других
  }

  get value() {
    return this._value;
  }

  // Метод для обновления значения по цепочке
  updateValue() {
    this._value = this.fn(this.inputCells);
    
    // Передаем обновление дальше по цепочке зависимостей
    this.dependents.forEach(cell => cell.updateValue());
  }

  // Метод для вызова функций-уведомлений
  fireCallbacks() {
    if (this._value !== this.oldValue) {
      this.callbacks.forEach(cb => cb.run(this));
      this.oldValue = this._value; // Запоминаем новое стабильное состояние
    }
    // Передаем вызов колбэков дальше по цепочке
    this.dependents.forEach(cell => cell.fireCallbacks());
  }

  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  // Метод, который вызывается при изменении ComputeCell
  run(computeCell) {
    this.values.push(this.fn(computeCell));
  }
}
