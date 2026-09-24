pub fn translate(input: &str) -> String {
    input
        .split_whitespace()
        .map(translate_word)
        .collect::<Vec<String>>()
        .join(" ")
}

fn translate_word(word: &str) -> String {
    // Правило 1: Гласные или специфические начала "xr", "yt"
    if word.starts_with(|c| "aeiou".contains(c))
        || word.starts_with("xr")
        || word.starts_with("yt")
    {
        return format!("{}ay", word);
    }

    // Правило 3: Согласные, за которыми следует "qu"
    if let Some(qu_index) = word.find("qu") {
        let prefix = &word[..qu_index];
        if prefix.chars().all(|c| !"aeiou".contains(c)) {
            let suffix = &word[qu_index + 2..];
            return format!("{}{}quay", suffix, prefix);
        }
    }

    // Правило 4: Согласные, за которыми следует "y" (но "y" не первая буква)
    if let Some(y_index) = word.find('y') {
        if y_index > 0 {
            let prefix = &word[..y_index];
            if prefix.chars().all(|c| !"aeiou".contains(c)) {
                let suffix = &word[y_index..];
                return format!("{}{}ay", suffix, prefix);
            }
        }
    }

    // Правило 2: Перенос всех начальных согласных в конец
    let mut consonants_len = 0;
    for c in word.chars() {
        if !"aeiou".contains(c) {
            consonants_len += c.len_utf8();
        } else {
            break;
        }
    }

    if consonants_len > 0 {
        let (prefix, suffix) = word.split_at(consonants_len);
        format!("{}{}ay", suffix, prefix)
    } else {
        format!("{}ay", word)
    }
}
