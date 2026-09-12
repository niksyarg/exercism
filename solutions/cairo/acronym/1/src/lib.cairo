pub fn abbreviate(phrase: ByteArray) -> ByteArray {
    let mut result: ByteArray = "";
    let mut in_word = false;
    let mut i: usize = 0;

    while i < phrase.len() {
        let char = phrase.at(i).unwrap();

        // 1. Проверяем, является ли символ разделителем (пробел или дефис)
        if char == 32 || char == 45 { 
            in_word = false;
        } 
        // 2. Проверяем, является ли символ английской буквой
        else if (char >= 65 && char <= 90) || (char >= 97 && char <= 122) {
            // Если это начало нового слова
            if !in_word {
                if char >= 97 && char <= 122 {
                    // Переводим маленькую букву в заглавную (вычитаем 32)
                    result.append_byte(char - 32);
                } else {
                    // Если буква уже заглавная, просто добавляем её
                    result.append_byte(char);
                }
                in_word = true;
            }
        }
        // Все остальные знаки препинания (например, апостроф) просто пропускаем,
        // не меняя статус `in_word`, чтобы слово не разрывалось.

        i += 1;
    };

    result
}
