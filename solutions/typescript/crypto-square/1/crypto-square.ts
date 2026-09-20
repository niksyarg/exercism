export class Crypto {
  private normalizedText: string;

  constructor(plaintext: string) {
    // 1. Очищаем текст: оставляем только буквы и цифры, делаем их маленькими
    this.normalizedText = plaintext.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  get ciphertext(): string {
    const length = this.normalizedText.length;
    
    // Если текст пустой, возвращаем пустую строку
    if (length === 0) {
      return '';
    }

    // 2. Находим размеры прямоугольника (количество строк r и столбцов c)
    let c = 0;
    let r = 0;
    while (c * r < length) {
      if (c === r) {
        c++;
      } else {
        r++;
      }
    }

    // 3. Разбиваем текст на строки и дополняем пробелами до полного прямоугольника
    const chunks: string[] = [];
    for (let i = 0; i < r; i++) {
      const start = i * c;
      let chunk = this.normalizedText.substring(start, start + c);
      // Добавляем пробелы в конец строки, если она короче, чем c
      while (chunk.length < c) {
        chunk += ' ';
      }
      chunks.push(chunk);
    }

    // 4. Читаем текст по столбцам сверху вниз и собираем зашифрованные сегменты
    const cipherSegments: string[] = [];
    for (let col = 0; col < c; col++) {
      let segment = '';
      for (let row = 0; row < r; row++) {
        segment += chunks[row][col];
      }
      cipherSegments.push(segment);
    }

    // 5. Соединяем сегменты через пробел
    return cipherSegments.join(' ');
  }
}
