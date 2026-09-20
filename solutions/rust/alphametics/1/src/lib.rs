use std::collections::{HashMap, HashSet};

pub fn solve(input: &str) -> Option<HashMap<char, u8>> {
    // 1. Очищаем строку от лишних символов и разбиваем на слова
    let clean_input = input.replace('+', " ").replace('=', " ");
    let words: Vec<&str> = clean_input.split_whitespace().collect();
    if words.len() < 3 {
        return None; 
    }

    // Разделяем на слагаемые и результат
    let (summands, result_word) = words.split_at(words.len() - 1);
    let result_word = result_word[0];

    // 2. Собираем все уникальные буквы и буквы, которые не могут быть нулем (первые в словах)
    let mut unique_chars = HashSet::new();
    let mut non_zero_chars = HashSet::new();

    for word in words.iter() {
        if let Some(first_char) = word.chars().next() {
            non_zero_chars.insert(first_char);
        }
        for c in word.chars() {
            unique_chars.insert(c);
        }
    }

    // Если уникальных букв больше 10, решения не существует
    if unique_chars.len() > 10 {
        return None;
    }

    let char_list: Vec<char> = unique_chars.into_iter().collect();
    let mut current_mapping = HashMap::new();
    let mut used_digits = [false; 10];

    // 3. Запускаем рекурсивный поиск (Backtracking)
    if backtrack(
        0,
        &char_list,
        &non_zero_chars,
        &mut used_digits,
        &mut current_mapping,
        summands,
        result_word,
    ) {
        Some(current_mapping)
    } else {
        None
    }
}

// Вспомогательная функция для рекурсивного перебора вариантов
fn backtrack(
    idx: usize,
    char_list: &[char],
    non_zero_chars: &HashSet<char>,
    used_digits: &mut [bool; 10],
    current_mapping: &mut HashMap<char, u8>,
    summands: &[&str],
    result_word: &str,
) -> bool {
    // Базовый случай: если все буквы распределены, проверяем сумму
    if idx == char_list.len() {
        return check_solution(summands, result_word, current_mapping);
    }

    let c = char_list[idx];
    let start_digit = if non_zero_chars.contains(&c) { 1 } else { 0 };

    for digit in start_digit..=9 {
        if !used_digits[digit as usize] {
            used_digits[digit as usize] = true;
            current_mapping.insert(c, digit);

            if backtrack(
                idx + 1,
                char_list,
                non_zero_chars,
                used_digits,
                current_mapping,
                summands,
                result_word,
            ) {
                return true;
            }

            // Откат назад (Backtrack)
            current_mapping.remove(&c);
            used_digits[digit as usize] = false;
        }
    }

    false
}

// Функция преобразования слов в числа и проверки равенства
fn check_solution(summands: &[&str], result_word: &str, mapping: &HashMap<char, u8>) -> bool {
    let word_to_u64 = |word: &str| -> u64 {
        word.chars()
            .fold(0u64, |acc, c| acc * 10 + (*mapping.get(&c).unwrap() as u64))
    };

    let sum_of_summands: u64 = summands.iter().map(|&w| word_to_u64(w)).sum();
    let result_value = word_to_u64(result_word);

    sum_of_summands == result_value
}
