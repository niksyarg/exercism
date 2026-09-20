pub fn annotate(garden: &[&str]) -> Vec<String> {
    let height = garden.len();
    if height == 0 {
        return Vec::new();
    }
    let width = garden[0].len();
    if width == 0 {
        return vec![String::new(); height];
    }

    // Переводим строки в байтовые срезы для быстрого доступа по индексам
    let grid: Vec<&[u8]> = garden.iter().map(|row| row.as_bytes()).collect();
    let mut result = Vec::with_capacity(height);

    for r in 0..height {
        let mut row_str = String::with_capacity(width);
        for c in 0..width {
            // Если в текущей клетке цветок, оставляем его
            if grid[r][c] == b'*' {
                row_str.push('*');
            } else {
                // Считаем цветы в 8 соседних клетках
                let mut count = 0;
                
                // Диапазон строк для проверки (с ограничением границ)
                let r_start = if r > 0 { r - 1 } else { 0 };
                let r_end = if r + 1 < height { r + 1 } else { height - 1 };
                
                // Диапазон столбцов для проверки (с ограничением границ)
                let c_start = if c > 0 { c - 1 } else { 0 };
                let c_end = if c + 1 < width { c + 1 } else { width - 1 };

                for nr in r_start..=r_end {
                    for nc in c_start..=c_end {
                        if grid[nr][nc] == b'*' {
                            count += 1;
                        }
                    }
                }

                // Если цветов рядом нет, оставляем пробел, иначе пишем цифру
                if count == 0 {
                    row_str.push(' ');
                } else {
                    row_str.push(char::from_digit(count, 10).unwrap());
                }
            }
        }
        result.push(row_str);
    }

    result
}
