export function keep<T>(collection: T[], predicate: (element: T) => boolean): T[] {
  const result: T[] = [];
  
  for (const element of collection) {
    if (predicate(element)) {
      result.push(element);
    }
  }
  
  return result;
}

export function discard<T>(collection: T[], predicate: (element: T) => boolean): T[] {
  const result: T[] = [];
  
  for (const element of collection) {
    if (!predicate(element)) {
      result.push(element);
    }
  }
  
  return result;
}
