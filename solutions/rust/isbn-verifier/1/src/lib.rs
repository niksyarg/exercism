/// Determines whether the supplied string is a valid ISBN number.
pub fn is_valid_isbn(isbn: &str) -> bool {
    // 1. Очищаем строку от дефисов
    let clean_isbn: String = isbn.chars().filter(|&c| c != '-').collect();

    // 2. Длина правильного ISBN-10 строго равна 10 символам
    if clean_isbn.len() != 10 {
        return false;
    }

    let mut sum = 0;

    // 3. Проходим по всем символам и считаем сумму
    for (i, ch) in clean_isbn.chars().enumerate() {
        let weight = 10 - i;
        
        match ch {
            // Первые 9 символов должны быть строго цифрами
            '0'..='9' => {
                let digit = ch.to_digit(10).unwrap();
                sum += digit * weight as u32;
            }
            // Символ 'X' (или 'x') разрешен только на последней (10-й) позиции
            'X' | 'x' if i == 9 => {
                sum += 10 * weight as u32;
            }
            // Любые другие символы или 'X' не на своем месте делают ISBN невалидным
            _ => return false,
        }
    }

    // 4. Проверяем остаток от деления на 11 согласно формуле
    sum % 11 == 0
}
