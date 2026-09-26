pub fn answer(command: &str) -> Option<i32> {
    // 1. Проверяем базовый формат вопроса
    let command = command.strip_prefix("What is ")?.strip_suffix("?")?;
    
    // Если строка пустая после очистки префикса/суффикса
    if command.is_empty() {
        return None;
    }

    // 2. Разбиваем строку на отдельные слова для анализа
    let mut words = command.split_whitespace().peekable();
    
    // Получаем первое число
    let first_word = words.next()?;
    let mut result = first_word.parse::<i32>().ok()?;

    // 3. Последовательно обрабатываем пары "операция + число"
    while let Some(&word) = words.peek() {
        match word {
            "plus" => {
                words.next(); // поглощаем "plus"
                let next_num = words.next()?.parse::<i32>().ok()?;
                result = result.checked_add(next_num)?;
            }
            "minus" => {
                words.next(); // поглощаем "minus"
                let next_num = words.next()?.parse::<i32>().ok()?;
                result = result.checked_sub(next_num)?;
            }
            "multiplied" => {
                words.next(); // поглощаем "multiplied"
                if words.next()? != "by" { return None; } // проверяем связку "by"
                let next_num = words.next()?.parse::<i32>().ok()?;
                result = result.checked_mul(next_num)?;
            }
            "divided" => {
                words.next(); // поглощаем "divided"
                if words.next()? != "by" { return None; } // проверяем связку "by"
                let next_num = words.next()?.parse::<i32>().ok()?;
                if next_num == 0 { return None; } // защита от деления на ноль
                result = result.checked_div(next_num)?;
            }
            // Любое другое слово (например, некорректная операция или идущие подряд числа)
            _ => return None,
        }
    }

    Some(result)
}
