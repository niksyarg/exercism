export const eggCount = (displayValue: number): number => {
  let count = 0;
  let num = displayValue;

  while (num > 0) {
    // Проверяем, равен ли самый правый бит единице
    count += num & 1;
    // Сдвигаем числа вправо на один бит
    num = num >>> 1;
  }

  return count;
};
