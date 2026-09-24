use std::collections::HashMap;

/// Проверяет, является ли символ валидным нуклеотидом (A, C, G, T).
fn is_valid_nucleotide(c: char) -> bool {
    matches!(c, 'A' | 'C' | 'G' | 'T')
}

/// Подсчитывает, сколько раз определенный нуклеотид встречается в строке ДНК.
/// Возвращает ошибку (символ), если сам искомый нуклеотид или любой символ в ДНК невалиден.
pub fn count(nucleotide: char, dna: &str) -> Result<usize, char> {
    if !is_valid_nucleotide(nucleotide) {
        return Err(nucleotide);
    }
    
    let mut total = 0;
    for c in dna.chars() {
        if !is_valid_nucleotide(c) {
            return Err(c);
        }
        if c == nucleotide {
            total += 1;
        }
    }
    
    Ok(total)
}

/// Возвращает карту с количеством каждого нуклеотида в строке ДНК.
/// Если в строке встречается невалидный символ, возвращает ошибку с этим символом.
pub fn nucleotide_counts(dna: &str) -> Result<HashMap<char, usize>, char> {
    // Инициализируем карту всеми четырьмя нуклеотидами со значением 0
    let mut counts = HashMap::new();
    counts.insert('A', 0);
    counts.insert('C', 0);
    counts.insert('G', 0);
    counts.insert('T', 0);

    for c in dna.chars() {
        if !is_valid_nucleotide(c) {
            return Err(c);
        }
        // Безопасно увеличиваем счетчик, так как все ключи гарантированно есть в карте
        if let Some(count) = counts.get_mut(&c) {
            *count += 1;
        }
    }

    Ok(counts)
}
