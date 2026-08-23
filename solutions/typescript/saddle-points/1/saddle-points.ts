interface Point {
  row: number;
  column: number;
}

export function saddlePoints(matrix: number[][]): Point[] {
  const result: Point[] = [];

  // Если матрица пустая или содержит пустую строку, возвращаем пустой массив
  if (matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // 1. Находим максимальные значения для каждой строки
  const rowMaxes = matrix.map(row => Math.max(...row));

  // 2. Находим минимальные значения для каждого столбца
  const colMins: number[] = [];
  for (let col = 0; col < numCols; col++) {
    let min = matrix[0][col];
    for (let row = 1; row < numRows; row++) {
      if (matrix[row][col] < min) {
        min = matrix[row][col];
      }
    }
    colMins.push(min);
  }

  // 3. Перебираем все элементы и проверяем, являются ли они седловыми точками
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const value = matrix[row][col];
      
      // Элемент должен быть равен максимуму строки и минимуму столбца
      if (value === rowMaxes[row] && value === colMins[col]) {
        result.push({
          row: row + 1,      // Приводим к 1-based индексации
          column: col + 1,   // Приводим к 1-based индексации
        });
      }
    }
  }

  return result;
}
