/// Return the Hamming distance between the strings,
/// or None if the lengths are mismatched.
pub fn hamming_distance(s1: &str, s2: &str) -> Option<usize> {
    // 1. Проверяем равенство длин строк
    if s1.len() != s2.len() {
        return None;
    }

    // 2. Сравниваем посимвольно и считаем несовпадения
    let distance = s1.chars()
        .zip(s2.chars())
        .filter(|(c1, c2)| c1 != c2)
        .count();

    Some(distance)
}
