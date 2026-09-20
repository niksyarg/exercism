export function rotate(text: string, shift: number): string {
  // Находим чистый сдвиг в пределах от 0 до 25
  const normalizedShift = shift % 26;

  // Разбиваем строку на массив символов, меняем их и собираем обратно
  return text
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);

      // Проверяем, является ли символ большой латинской буквой (A-Z)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
      }

      // Проверяем, является ли символ маленькой латинской буквой (a-z)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
      }

      // Если это пробел, цифра или знак препинания, оставляем как есть
      return char;
    })
    .join('');
}
