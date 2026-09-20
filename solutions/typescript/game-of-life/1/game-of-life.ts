export class GameOfLife {
  private currentMatrix: number[][];

  constructor(matrix: number[][]) {
    // Сохраняем копию начальной матрицы
    this.currentMatrix = matrix.map(row => [...row]);
  }

  // Метод для обновления сетки на одно поколение вперед
  public tick(): void {
    const rows = this.currentMatrix.length;
    if (rows === 0) return;
    const cols = this.currentMatrix[0].length;

    // Создаем новую матрицу для следующего поколения
    const nextMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const liveNeighbors = this.countLiveNeighbors(r, c);

        if (this.currentMatrix[r][c] === 1) {
          // Любая живая клетка с 2 или 3 живыми соседями выживает
          if (liveNeighbors === 2 || liveNeighbors === 3) {
            nextMatrix[r][c] = 1;
          }
          // В противном случае она погибает (от одиночества или перенаселения)
        } else {
          // Любая мертвая клетка с ровно 3 живыми соседями оживает
          if (liveNeighbors === 3) {
            nextMatrix[r][c] = 1;
          }
        }
      }
    }

    this.currentMatrix = nextMatrix;
  }

  // Метод для получения текущего состояния матрицы
  public state(): number[][] {
    return this.currentMatrix;
  }

  // Вспомогательный метод для подсчета живых соседей вокруг клетки (r, c)
  private countLiveNeighbors(r: number, c: number): number {
    let count = 0;
    const rows = this.currentMatrix.length;
    const cols = this.currentMatrix[0].length;

    // Проверяем все 8 направлений вокруг клетки
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // Пропускаем саму клетку

        const newRow = r + i;
        const newCol = c + j;

        // Проверяем, не вышли ли мы за границы сетки
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          if (this.currentMatrix[newRow][newCol] === 1) {
            count++;
          }
        }
      }
    }

    return count;
  }
}
