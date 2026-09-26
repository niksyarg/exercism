pub fn encode(source: &str) -> String {
    if source.is_empty() {
        return String::new();
    }

    let mut result = String::new();
    let mut chars = source.chars().peekable();
    
    while let Some(current_char) = chars.next() {
        let mut count = 1;
        
        // Считаем количество одинаковых подряд идущих символов
        while chars.peek() == Some(&current_char) {
            count += 1;
            chars.next();
        }
        
        // По условию задачи, если символ один, цифра "1" перед ним не пишется
        if count > 1 {
            result.push_str(&count.to_string());
        }
        result.push(current_char);
    }

    result
}

pub fn decode(source: &str) -> String {
    let mut result = String::new();
    let mut count_str = String::new();

    for current_char in source.chars() {
        if current_char.is_numeric() {
            // Если это цифра, накапливаем её (число может быть многозначным, например "12W")
            count_str.push(current_char);
        } else {
            // Если это буква или пробел, парсим накопленное число (или берем 1, если цифр не было)
            let count = count_str.parse::<usize>().unwrap_or(1);
            
            // Повторяем символ нужное количество раз
            result.push_str(&current_char.to_string().repeat(count));
            
            // Сбрасываем строку-счетчик для следующей серии
            count_str.clear();
        }
    }

    result
}
