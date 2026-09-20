export const knapsack = (maximumWeight, items) => {
  const n = items.length;
  
  // Создаем матрицу размером (n + 1) x (maximumWeight + 1), заполненную нулями
  const dp = Array(n + 1).fill(null).map(() => Array(maximumWeight + 1).fill(0));

  // Заполняем таблицу динамического программирования
  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];
    
    for (let w = 0; w <= maximumWeight; w++) {
      if (weight <= w) {
        // Выбираем максимум: взять вещь или пропустить её
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
      } else {
        // Вещь слишком тяжелая, переносим предыдущее значение
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Ответ находится в правом нижнем углу таблицы
  return dp[n][maximumWeight];
};
