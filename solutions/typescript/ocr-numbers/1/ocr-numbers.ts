const DIGIT_MAP: { [key: string]: string } = {
  ' _ | ||_|   ': '0',
  '     |  |   ': '1',
  ' _  _||_    ': '2',
  ' _  _| _|   ': '3',
  '   |_|  |   ': '4',
  ' _ |_  _|   ': '5',
  ' _ |_ |_|   ': '6',
  ' _   |  |   ': '7',
  ' _ |_||_|   ': '8',
  ' _ |_| _|   ': '9'
};

export function convert(input: string): string {
  const lines = input.split('\n');

  // Проверка на корректное количество строк (кратное 4)
  if (lines.length % 4 !== 0) {
    throw new Error('Invalid height');
  }

  // Проверка на корректную ширину строк (кратную 3)
  if (lines.some(line => line.length % 3 !== 0)) {
    throw new Error('Invalid width');
  }

  const resultRows: string[] = [];

  // Обрабатываем сетку группами по 4 строки
  for (let row = 0; row < lines.length; row += 4) {
    let rowDigits = '';
    const numDigits = lines[row].length / 3;

    // Режем текущий ряд на отдельные цифры по 3 символа в ширину
    for (let col = 0; col < numDigits; col++) {
      const start = col * 3;
      
      // Собираем 12 символов, составляющих одну цифру (3 символа * 4 строки)
      const digitKey = 
        lines[row].substring(start, start + 3) +
        lines[row + 1].substring(start, start + 3) +
        lines[row + 2].substring(start, start + 3) +
        lines[row + 3].substring(start, start + 3);

      // Ищем в словаре или ставим знак вопроса
      rowDigits += DIGIT_MAP[digitKey] ?? '?';
    }

    resultRows.push(rowDigits);
  }

  // Соединяем строки через запятую
  return resultRows.join(',');
}
