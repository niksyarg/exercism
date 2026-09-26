pub fn find_saddle_points(input: &[Vec<u64>]) -> Vec<(usize, usize)> {
    let mut saddle_points = Vec::new();

    // Проверяем, что матрица не пустая
    let num_rows = input.len();
    if num_rows == 0 {
        return saddle_points;
    }
    let num_cols = input[0].len();
    if num_cols == 0 {
        return saddle_points;
    }

    // 1. Находим максимальные значения для каждой строки
    let row_maxs: Vec<u64> = input
        .iter()
        .map(|row| *row.iter().max().unwrap_or(&0))
        .collect();

    // 2. Находим минимальные значения для каждого столбца
    let mut col_mins = vec![u64::MAX; num_cols];
    for row in input {
        for (c, &val) in row.iter().enumerate() {
            if val < col_mins[c] {
                col_mins[c] = val;
            }
        }
    }

    // 3. Точка является седловой, если элемент равен максимуму строки и минимуму столбца
    for r in 0..num_rows {
        for c in 0..num_cols {
            let val = input[r][c];
            if val == row_maxs[r] && val == col_mins[c] {
                saddle_points.push((r, c));
            }
        }
    }

    saddle_points
}
