export function encode(input: string): string {
  // Если строка пустая, возвращаем пустую строку
  if (!input) return '';

  let result = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    // Если следующий символ такой же, увеличиваем счетчик
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      // Если счетчик больше 1, добавляем цифру, а затем сам символ
      result += (count > 1 ? count : '') + input[i];
      count = 1; // Сбрасываем счетчик для следующего символа
    }
  }

  return result;
}


export function decode(input: string): string {
  let result = '';
  let countStr = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    // Проверяем, является ли символ цифрой (включая пробелы, если нужно)
    if (char >= '0' && char <= '9') {
      countStr += char; // Собираем число (ведь оно может быть двузначным, например 12)
    } else {
      // Если это буква или пробел, повторяем её нужное количество раз
      const count = countStr === '' ? 1 : parseInt(countStr, 10);
      result += char.repeat(count);
      countStr = ''; // Сбрасываем строку с числом
    }
  }

  return result;
}
