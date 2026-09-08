// Подготавливаем строку с алфавитом для поиска букв
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

// Функция для зеркального отражения одной буквы
const substitute = (char) => {
  const index = ALPHABET.indexOf(char.toLowerCase());
  // Если это не буква (например, цифра), возвращаем её как есть
  if (index === -1) return char;
  // Берем букву с конца алфавита
  return ALPHABET[ALPHABET.length - 1 - index];
};

export const encode = (phrase) => {
  // Оставляем только буквы и цифры, делаем их маленькими
  const cleanPhrase = phrase
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  // Заменяем каждую букву на её противоположность
  const encodedChars = [...cleanPhrase].map(substitute);

  // Разбиваем получившуюся строку на группы по 5 символов через пробел
  const chunks = [];
  for (let i = 0; i < encodedChars.length; i += 5) {
    chunks.push(encodedChars.slice(i, i + 5).join(''));
  }

  return chunks.join(' ');
};

export const decode = (phrase) => {
  // Убираем все пробелы из зашифрованной фразы
  const cleanPhrase = phrase.replace(/\s+/g, '');

  // Расшифровываем символы обратно (шифр Атбаш работает одинаково в обе стороны)
  return [...cleanPhrase].map(substitute).join('');
};
