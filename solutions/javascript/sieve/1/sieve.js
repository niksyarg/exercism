export const primes = (maxNumber) => {
  // Если число меньше 2, простых чисел нет
  if (maxNumber < 2) return [];

  // 1. Создаем список, где сначала все числа считаем простыми (true)
  const isPrime = new Array(maxNumber + 1).fill(true);
  
  // Числа 0 и 1 — не простые
  isPrime[0] = false;
  isPrime[1] = false;

  // 2. Начинаем просеивать числа
  for (let i = 2; i * i <= maxNumber; i++) {
    // Если число i отмечено как простое
    if (isPrime[i]) {
      // Вычеркиваем все числа, которые делятся на i
      for (let j = i * i; j <= maxNumber; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 3. Собираем все оставшиеся простые числа в один список
  const result = [];
  for (let i = 2; i <= maxNumber; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
  }

  return result;
};
