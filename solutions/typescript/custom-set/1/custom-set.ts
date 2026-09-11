export class CustomSet {
  // Хранилище для уникальных элементов множества
  private elements: unknown[] = [];

  constructor(initial?: unknown[]) {
    // Если передали начальные элементы, добавляем их без повторов
    if (initial) {
      for (const element of initial) {
        this.add(element);
      }
    }
  }

  // Проверяет, пустое ли множество
  empty(): boolean {
    return this.elements.length === 0;
  }

  // Проверяет, есть ли элемент в множестве
  contains(element: unknown): boolean {
    return this.elements.includes(element);
  }

  // Добавляет элемент, если его еще нет в множестве
  add(element: unknown): CustomSet {
    if (!this.contains(element)) {
      this.elements.push(element);
    }
    return this;
  }

  // Проверяет, является ли текущее множество подмножеством другого множества
  // (то есть все ли наши элементы есть в "other")
  subset(other: CustomSet): boolean {
    return this.elements.every((element) => other.contains(element));
  }

  // Проверяет, являются ли множества "непересекающимися"
  // (то есть у них нет ни одного общего элемента)
  disjoint(other: CustomSet): boolean {
    return this.elements.every((element) => !other.contains(element));
  }

  // Проверяет, равны ли множества
  // (они равны, если имеют одинаковую длину и все элементы совпадают)
  eql(other: CustomSet): boolean {
    if (this.elements.length !== other.elements.length) {
      return false;
    }
    return this.subset(other);
  }

  // Объединение множеств: создает новое множество со всеми элементами из обоих
  union(other: CustomSet): CustomSet {
    const newSet = new CustomSet(this.elements);
    for (const element of other.elements) {
      newSet.add(element);
    }
    return newSet;
  }

  // Пересечение множеств: создает новое множество только из общих элементов
  intersection(other: CustomSet): CustomSet {
    const commonElements = this.elements.filter((element) => other.contains(element));
    return new CustomSet(commonElements);
  }

  // Разность множеств: создает новое множество из элементов, которых нет в "other"
  difference(other: CustomSet): CustomSet {
    const uniqueElements = this.elements.filter((element) => !other.contains(element));
    return new CustomSet(uniqueElements);
  }
}
