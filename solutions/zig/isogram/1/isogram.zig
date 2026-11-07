const std = @import("std");

pub fn isIsogram(str: []const u8) bool {
    // Массив для отслеживания встреченных букв английского алфавита (всего 26 букв)
   var seen_letters: [26]bool = @splat(false);


    for (str) |char| {
        // Игнорируем пробелы и дефисы
        if (char == ' ' or char == '-') {
            continue;
        }

        // Приводим символ к нижнему регистру и проверяем, является ли он буквой
        if (char >= 'a' and char <= 'z') {
            const index = char - 'a';
            if (seen_letters[index]) return false; // Буква уже встречалась
            seen_letters[index] = true;
        } else if (char >= 'A' and char <= 'Z') {
            const index = char - 'A';
            if (seen_letters[index]) return false; // Буква уже встречалась
            seen_letters[index] = true;
        }
    }

    return true;
}
