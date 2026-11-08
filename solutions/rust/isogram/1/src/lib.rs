use std::collections::HashSet;

pub fn check(candidate: &str) -> bool {
    let mut seen_letters = HashSet::new();

    for c in candidate.chars() {
        // Проверяем, является ли символ буквой
        if c.is_alphabetic() {
            // Приводим к нижнему регистру для регистронезависимости
            let lowercase_char = c.to_lowercase().next().unwrap();
            
            // Если буква уже встречалась, это не изограмма
            if !seen_letters.insert(lowercase_char) {
                return false;
            }
        }
    }

    true
}
