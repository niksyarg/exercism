use std::collections::BTreeMap;

pub fn transform(h: &BTreeMap<i32, Vec<char>>) -> BTreeMap<char, i32> {
    let mut result = BTreeMap::new();

    for (&score, letters) in h {
        for &letter in letters {
            // Преобразуем букву в нижний регистр и сохраняем её вместе с очками
            result.insert(letter.to_ascii_lowercase(), score);
        }
    }

    result
}
