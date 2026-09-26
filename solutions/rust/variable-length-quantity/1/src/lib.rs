#[derive(Debug, PartialEq, Eq)]
pub enum Error {
    IncompleteNumber,
}

/// Конвертирует список чисел в поток байтов, закодированных с помощью VLQ.
pub fn to_bytes(values: &[u32]) -> Vec<u8> {
    let mut result = Vec::new();
    
    for &value in values {
        let mut bytes = Vec::new();
        let mut temp = value;
        
        // Разбиваем число на 7-битные фрагменты, начиная с конца
        bytes.push((temp & 0x7F) as u8);
        temp >>= 7;
        
        while temp > 0 {
            // Устанавливаем 8-й бит в 1 для всех промежуточных байтов
            bytes.push(((temp & 0x7F) | 0x80) as u8);
            temp >>= 7;
        }
        
        // Так как мы собирали байты с конца, разворачиваем их и добавляем в результат
        bytes.reverse();
        result.extend(bytes);
    }
    
    result
}

/// Принимает поток байтов и извлекает из него все закодированные числа.
pub fn from_bytes(bytes: &[u8]) -> Result<Vec<u32>, Error> {
    let mut result = Vec::new();
    let mut current_value: u32 = 0;
    let mut has_started = false;

    for &byte in bytes {
        has_started = true;
        
        // Проверяем на переполнение u32 перед сдвигом.
        // Максимальное значение u32 требует не более 5 байт в VLQ.
        if current_value > (u32::MAX >> 7) {
            return Err(Error::IncompleteNumber);
        }
        
        // Сдвигаем текущее значение на 7 бит влево и добавляем 7 бит из нового байта
        current_value = (current_value << 7) | (byte & 0x7F) as u32;
        
        // Если старший бит равен 0, значит это последний байт числа
        if (byte & 0x80) == 0 {
            result.push(current_value);
            current_value = 0;
            has_started = false;
        }
    }

    // Если поток байтов закончился, но последнее число не завершилось (старший бит остался 1)
    if has_started {
        return Err(Error::IncompleteNumber);
    }

    Ok(result)
}
