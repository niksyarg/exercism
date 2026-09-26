pub fn spiral_matrix(size: u32) -> Vec<Vec<u32>> {
    let size = size as usize;
    // Инициализируем матрицу нулями
    let mut matrix = vec![vec![0; size]; size];
    
    if size == 0 {
        return matrix;
    }

    let mut current_val = 1;
    
    // Определяем начальные границы матрицы
    let mut top = 0;
    let mut bottom = size - 1;
    let mut left = 0;
    let mut right = size - 1;

    while top <= bottom && left <= right {
        // 1. Движение влево -> вправо по верхней строке
        for col in left..=right {
            matrix[top][col] = current_val;
            current_val += 1;
        }
        if top == bottom { break; } // Предотвращаем повторный проход, если осталась одна строка
        top += 1;

        // 2. Движение сверху -> вниз по правому столбцу
        for row in top..=bottom {
            matrix[row][right] = current_val;
            current_val += 1;
        }
        if left == right { break; } // Предотвращаем повторный проход, если остался один столбец
        if right == 0 { break; } // Защита от переполнения для usize
        right -= 1;

        // 3. Движение вправо -> влево по нижней строке
        for col in (left..=right).rev() {
            matrix[bottom][col] = current_val;
            current_val += 1;
        }
        if bottom == 0 { break; } // Защита от переполнения для usize
        bottom -= 1;

        // 4. Движение снизу -> вверх по левому столбцу
        for row in (top..=bottom).rev() {
            matrix[row][left] = current_val;
            current_val += 1;
        }
        left += 1;
    }

    matrix
}
