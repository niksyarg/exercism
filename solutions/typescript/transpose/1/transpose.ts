export function transpose(matrix: string[]): string[] {
    const result: string[] = [];

    // Находим максимальную длину строки в матрице
    const maxLen = Math.max(0, ...matrix.map(row => row.length));

    for (let col = 0; col < maxLen; col++) {
        let currentTrailingSpaces = '';
        let transposedRow = '';

        for (let row = 0; row < matrix.length; row++) {
            // Если символ существует, добавляем его
            if (col < matrix[row].length) {
                // Если до этого накопились пробелы, сначала добавляем их
                transposedRow += currentTrailingSpaces + matrix[row][col];
                currentTrailingSpaces = '';
            } else {
                // Если символа нет, временно откладываем пробел
                currentTrailingSpaces += ' ';
            }
        }
        
        result.push(transposedRow);
    }

    return result;
}
