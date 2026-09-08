export function ofSize(size: number): number[][] {
  // 1. Создаем пустую квадратную матрицу нужного размера
  const matrix: number[][] = Array.from({ length: size }, () => Array(size).fill(0));

  // 2. Задаем начальные границы для движения
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  // Текущее число для записи
  let counter = 1;

  // 3. Крутимся в цикле, пока границы не пересекутся
  while (top <= bottom && left <= right) {
    // Движение влево -> вправо по верхней строке
    for (let i = left; i <= right; i++) {
      matrix[top][i] = counter++;
    }
    top++; // Сдвигаем верхнюю границу вниз

    // Движение сверху -> вниз по правому столбцу
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = counter++;
    }
    right--; // Сдвигаем правую границу влево

    // Проверяем, не закончилась ли матрица
    if (top <= bottom) {
      // Движение вправо -> влево по нижней строке
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = counter++;
      }
      bottom--; // Сдвигаем нижнюю границу вверх
    }

    // Проверяем, не закончилась ли матрица
    if (left <= right) {
      // Движение снизу -> вверх по левому столбцу
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = counter++;
      }
      left++; // Сдвигаем левую границу вправо
    }
  }

  return matrix;
}
