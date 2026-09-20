pub fn build_proverb(list: &[&str]) -> String {
    if list.is_empty() {
        return String::new();
    }

    let mut proverb = String::new();

    // Генерируем строки для пар элементов
    for pair in list.windows(2) {
        proverb.push_str(&format!("For want of a {} the {} was lost.\n", pair[0], pair[1]));
    }

    // Добавляем финальную строку
    proverb.push_str(&format!("And all for the want of a {}.", list[0]));

    proverb
}
