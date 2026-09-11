export function flatten(arr: any[]): any[] {
  const result: any[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      // Если элемент — это массив, разворачиваем его дальше
      result.push(...flatten(item));
    } else if (item !== null && item !== undefined) {
      // Если это обычный элемент (и не null/undefined), добавляем в результат
      result.push(item);
    }
  }

  return result;
}
