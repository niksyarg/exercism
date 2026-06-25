export class List {
  private items: unknown[];

  private constructor(items: unknown[]) {
    this.items = items;
  }

  public static create(...values: unknown[]): List {
    return new List(values);
  }


  public forEach(callback: (item: any) => void): void {
    for (const item of this.items) {
      callback(item);
    }
  }

  public append(other: List): List {
    return new List([...this.items, ...other.items]);
  }
public concatenate(otherList: List): List {
  let result = [...this.items];
  
  for (const item of otherList.items) {
    if (item instanceof List) {
      result = [...result, ...item.items];
    } else {
      result = [...result, item];
    }
  }
  
  return new List(result);
}



  public filter<T>(predicate: (item: T) => boolean): List {
    let result: unknown[] = List.create().items;
    for (const item of this.items) {
      if (predicate(item as T)) {
        result = [...result, item];
      }
    }
    return new List(result);
  }

  public length(): number {
    let count = 0;
    for (const _ of this.items) {
      count++;
    }
    return count;
  }

  public map<T, U>(callback: (item: T) => U): List {
    let result: unknown[] = List.create().items;
    for (const item of this.items) {
      result = [...result, callback(item as T)];
    }
    return new List(result);
  }

  public foldl<T, acc>(callback: (acc: acc, item: T) => acc, initial: acc): acc {
    let accumulator = initial;
    for (const item of this.items) {
      accumulator = callback(accumulator, item as T);
    }
    return accumulator;
  }

  public foldr<T, acc>(callback: (acc: acc, item: T) => acc, initial: acc): acc {
    let accumulator = initial;
    const reversed = this.reverse().items;
    for (const item of reversed) {
      accumulator = callback(accumulator, item as T);
    }
    return accumulator;
  }

  public reverse(): List {
    let result: unknown[] = List.create().items;
    for (const item of this.items) {
      result = [item, ...result];
    }
    return new List(result);
  }
}
