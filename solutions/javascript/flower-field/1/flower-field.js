export const annotate = (input) => {
  // 1. Проверяем, если поле пустое, возвращаем его как есть
  if (input.length === 0) return [];
  if (input[0].length === 0) return [''];

  const rows = input.length;
  const cols = input[0].length;
  const result = [];

  // 2. Проходим по каждой строке игрового поля
  for (let r = 0; r < rows; r++) {
    let newRow = '';

    // 3. Проходим по каждому символу (клетке) в текущей строке
    for (let c = 0; c < cols; c++) {
      // Если это цветок, он так и остается цветком
      if (input[r][c] === '*') {
        newRow += '*';
        continue;
      }

      // 4. Если это пустая клетка, считаем цветы вокруг неё
      let flowerCount = 0;

      // Проверяем все 8 соседних клеток (от -1 до +1 по строкам и столбцам)
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;

          // Проверяем, что соседняя клетка не выходит за границы поля
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            if (input[nr][nc] === '*') {
              flowerCount++;
            }
          }
        }
      }

      // 5. Записываем результат: цифру (если цветы есть) или пробел (если цветов нет)
      newRow += flowerCount > 0 ? flowerCount.toString() : ' ';
    }

    result.push(newRow);
  }

  return result;
};
