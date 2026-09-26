pub fn encrypt(input: &str) -> String {
    if input.is_empty() {
        return String::new();
    }

    // 1. Нормализация: оставляем только буквы и цифры в нижнем регистре
    let normalized: Vec<char> = input
        .chars()
        .filter(|c| c.is_ascii_alphanumeric())
        .map(|c| c.to_ascii_lowercase())
        .collect();

    let len = normalized.len();
    if len == 0 {
        return String::new();
    }

    // 2. Вычисление размеров сетки (c - колонки, r - строки)
    // Ищем минимальное c, такое что c * c >= len
    let mut c = 0;
    let mut r = 0;
    while c * r < len {
        if c <= r {
            c += 1;
        } else {
            r += 1;
        }
    }

    // 3. Чтение по колонкам и формирование зашифрованного текста
    let mut chunks = Vec::new();

    for col in 0..c {
        let mut chunk = String::new();
        for row in 0..r {
            let index = row * c + col;
            if index < len {
                chunk.push(normalized[index]);
            } else {
                chunk.push(' '); // Заполнение пустых мест в прямоугольнике
            }
        }
        chunks.push(chunk);
    }

    // 4. Объединение блоков через пробел
    chunks.join(" ")
}
