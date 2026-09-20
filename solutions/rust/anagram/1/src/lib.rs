use std::collections::HashSet;

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &[&'a str]) -> HashSet<&'a str> {
    let mut result = HashSet::new();
    
    // Приводим целевое слово к нижнему регистру для регистронезависимого сравнения
    let word_lower = word.to_lowercase();
    
    // Сортируем буквы целевого слова для быстрого сравнения анаграмм
    let mut word_sorted: Vec<char> = word_lower.chars().collect();
    word_sorted.sort_unstable();

    for &candidate in possible_anagrams {
        let candidate_lower = candidate.to_lowercase();
        
        // Слово не является анаграммой самого себя
        if word_lower == candidate_lower {
            continue;
        }
        
        // Проверяем, совпадают ли наборы букв
        let mut candidate_sorted: Vec<char> = candidate_lower.chars().collect();
        candidate_sorted.sort_unstable();
        
        if word_sorted == candidate_sorted {
            result.insert(candidate);
        }
    }

    result
}
