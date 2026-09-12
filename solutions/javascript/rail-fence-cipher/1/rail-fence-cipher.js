

export const encode = (message, rails) => {
  if (rails <= 1 || message.length === 0) return message;

  // Создаем массив пустых строк для каждого рельса
  const fence = Array.from({ length: rails }, () => '');
  let rail = 0;
  let direction = 1; // 1 — вниз, -1 — вверх

  for (const char of message) {
    fence[rail] += char;
    rail += direction;

    // Меняем направление на границах
    if (rail === 0 || rail === rails - 1) {
      direction = -direction;
    }
  }

  // Соединяем строки со всех рельсов в одну
  return fence.join('');
};

export const decode = (ciphertext, rails) => {
  if (rails <= 1 || ciphertext.length === 0) return ciphertext;

  const length = ciphertext.length;
  // Создаем матрицу, чтобы разметить позиции букв зигзагом
  const fence = Array.from({ length: rails }, () => Array(length).fill(null));
  
  let rail = 0;
  let direction = 1;

  // Шаг 1: Размечаем структуру зигзага (ставим маркеры true)
  for (let i = 0; i < length; i++) {
    fence[rail][i] = true;
    rail += direction;
    if (rail === 0 || rail === rails - 1) {
      direction = -direction;
    }
  }

  // Шаг 2: Заполняем размеченные места буквами из зашифрованного текста
  let index = 0;
  for (let r = 0; r < rails; r++) {
    for (let c = 0; c < length; c++) {
      if (fence[r][c] && index < length) {
        fence[r][c] = ciphertext[index++];
      }
    }
  }

  // Шаг 3: Считываем текст обратно зигзагом
  let result = '';
  rail = 0;
  direction = 1;

  for (let i = 0; i < length; i++) {
    result += fence[rail][i];
    rail += direction;
    if (rail === 0 || rail === rails - 1) {
      direction = -direction;
    }
  }

  return result;
};
