type Item = {
  weight: number
  value: number
}

export function maximumValue({
  maximumWeight,
  items,
}: {
  maximumWeight: number
  items: Item[]
}): number {
  const n = items.length;

  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    new Array(maximumWeight + 1).fill(0)
  );

  // Заполняем таблицу
  for (let i = 1; i <= n; i++) {
    const currentItem = items[i - 1];
    
    for (let w = 0; w <= maximumWeight; w++) {
      if (currentItem.weight <= w) {
        // Выбираем максимум: брать предмет или не брать
        dp[i][w] = Math.max(
          dp[i - 1][w], 
          dp[i - 1][w - currentItem.weight] + currentItem.value
        );
      } else {
        // Предмет слишком тяжелый, берем результат без него
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // В правом нижнем углу таблицы будет максимальная ценность
  return dp[n][maximumWeight];
}
