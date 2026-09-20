pub fn series(digits: &str, len: usize) -> Vec<String> {
    if len == 0 {
        // Если запрашиваемая длина равна 0, возвращаем вектор 
        // с пустыми строками в количестве len(digits) + 1
        return vec!["".to_string(); digits.len() + 1];
    }

    if len > digits.len() {
        // Если запрашиваемая длина больше самой строки,
        // непрерывных серий такой длины существовать не может
        return Vec::new();
    }

    // Превращаем строку в массив символов (char),
    // берем скользящие окна размера len и собираем обратно в String
    digits
        .chars()
        .collect::<Vec<char>>()
        .windows(len)
        .map(|window| window.iter().collect::<String>())
        .collect()
}
