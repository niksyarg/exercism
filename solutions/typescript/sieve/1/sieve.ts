export function primes(limit: number): number[] {
  // Создаем массив «флагов». Сначала считаем, что все числа простые (true).
  // Индексы массива будут соответствовать нашим числам.
  const isPrime: boolean[] = new Array(limit + 1).fill(true);
  
  // Числа 0 и 1 не являются простыми
  isPrime[0] = false;
  isPrime[1] = false;

  // Идем по числам от 2 до квадратного корня из limit
  for (let i = 2; i * i <= limit; i++) {
    // Если число еще не зачеркнуто (оно простое)
    if (isPrime[i]) {
      // Зачеркиваем все кратные ему числа, начиная с i * i
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Собираем все числа, которые остались отмеченными как true
  const result: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
  }

  return result;
}
