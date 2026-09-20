export function annotate(field: string[]): string[] {
  const numRows = field.length;
  if (numRows === 0) return [];
  
  const numCols = field[0].length;
  if (numCols === 0) return [''];

  const result: string[] = [];

  for (let r = 0; r < numRows; r++) {
    let rowResult = '';

    for (let c = 0; c < numCols; c++) {
      // Если в этой клетке уже цветок, оставляем его
      if (field[r][c] === '*') {
        rowResult += '*';
        continue;
      }

      // Считаем цветы вокруг текущей пустой клетки
      let flowerCount = 0;

      // Проверяем все 8 соседних клеток (и саму клетку)
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;

          // Проверяем, что соседняя клетка не выходит за границы поля
          if (nr >= 0 && nr < numRows && nc >= 0 && nc < numCols) {
            if (field[nr][nc] === '*') {
              flowerCount++;
            }
          }
        }
      }

      // Если цветов рядом нет, оставляем пробел. Иначе ставим цифру.
      if (flowerCount === 0) {
        rowResult += ' ';
      } else {
        rowResult += flowerCount.toString();
      }
    }

    result.push(rowResult);
  }

  return result;
}
