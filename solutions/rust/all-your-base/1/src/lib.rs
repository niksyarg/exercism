#[derive(Debug, PartialEq, Eq)]
pub enum Error {
    InvalidInputBase,
    InvalidOutputBase,
    InvalidDigit(u32),
}

pub fn convert(number: &[u32], from_base: u32, to_base: u32) -> Result<Vec<u32>, Error> {
    // 1. Проверка оснований систем счисления
    if from_base < 2 {
        return Err(Error::InvalidInputBase);
    }
    if to_base < 2 {
        return Err(Error::InvalidOutputBase);
    }

    // 2. Валидация входных цифр и перевод в десятичное значение (u32)
    let mut decimal_value = 0u32;
    for &digit in number {
        if digit >= from_base {
            return Err(Error::InvalidDigit(digit));
        }
        // Используем checked_mul и checked_add для защиты от переполнения (опционально, но надежно)
        decimal_value = decimal_value
            .checked_mul(from_base)
            .and_then(|v| v.checked_add(digit))
            .unwrap_or(0); // В рамках этой задачи предполагается, что переполнения нет
    }

    // 3. Обработка случая, когда число равно 0
    if decimal_value == 0 {
        return Ok(vec![0]);
    }

    // 4. Перевод из десятичной системы в целевую `to_base`
    let mut result = Vec::new();
    while decimal_value > 0 {
        result.push(decimal_value % to_base);
        decimal_value /= to_base;
    }

    // Так как остатки собирались с конца, разворачиваем вектор
    result.reverse();

    Ok(result)
}
