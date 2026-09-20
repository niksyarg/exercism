pub fn reply(message: &str) -> &str {
    // Удаляем лишние пробелы по краям
    let trimmed = message.trim();

    // Проверяем на тишину
    if trimmed.is_empty() {
        return "Fine. Be that way!";
    }

    // Проверяем, является ли это вопросом (заканчивается на '?')
    let is_question = trimmed.ends_with('?');

    // Проверяем, кричит ли пользователь (есть буквы и все они в верхнем регистре)
    let has_letters = trimmed.chars().any(|c| c.is_alphabetic());
    let is_yelling = has_letters && trimmed == trimmed.to_uppercase();

    // Возвращаем ответ на основе комбинации условий
    match (is_yelling, is_question) {
        (true, true) => "Calm down, I know what I'm doing!",
        (true, false) => "Whoa, chill out!",
        (false, true) => "Sure.",
        (false, false) => "Whatever.",
    }
}
