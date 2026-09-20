export class Board {
  private grid: string[][];
  private rows: number;
  private cols: number;

  constructor(board: string[]) {
    // Очищаем строки от лишних пробелов по краям и разбиваем на массивы символов
    this.grid = board.map(row => row.trim().split(/\s+/));
    this.rows = this.grid.length;
    this.cols = this.rows > 0 ? this.grid[0].length : 0;
  }

  public winner(): string {
    // 1. Проверяем победу игрока 'O' (сверху вниз)
    if (this.checkWinO()) {
      return 'O';
    }

    // 2. Проверяем победу игрока 'X' (слева направо)
    if (this.checkWinX()) {
      return 'X';
    }

    // 3. Если никто не победил
    return '';
  }

  private checkWinO(): boolean {
    const visited = Array.from({ length: this.rows }, () => new Array(this.cols).fill(false));
    const queue: [number, number][] = [];

    // Добавляем все камни 'O' из первой (верхней) строки в очередь
    for (let c = 0; c < this.cols; c++) {
      if (this.grid[0][c] === 'O') {
        queue.push([0, c]);
        visited[0][c] = true;
      }
    }

    // Поиск в ширину (BFS)
    while (queue.length > 0) {
      const [r, c] = queue.shift()!;

      // Если мы дошли до последней (нижней) строки, игрок 'O' победил
      if (r === this.rows - 1) {
        return true;
      }

      // Проверяем 6 соседних клеток на гексагональной сетке
      const neighbors = [
        [r - 1, c], [r - 1, c + 1],
        [r, c - 1],             [r, c + 1],
        [r + 1, c - 1], [r + 1, c]
      ];

      for (const [nr, nc] of neighbors) {
        if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
          if (!visited[nr][nc] && this.grid[nr][nc] === 'O') {
            visited[nr][nc] = true;
            queue.push([nr, nc]);
          }
        }
      }
    }

    return false;
  }

  private checkWinX(): boolean {
    const visited = Array.from({ length: this.rows }, () => new Array(this.cols).fill(false));
    const queue: [number, number][] = [];

    // Добавляем все камни 'X' из первого (левого) столбца в очередь
    for (let r = 0; r < this.rows; r++) {
      if (this.grid[r][0] === 'X') {
        queue.push([r, 0]);
        visited[r][0] = true;
      }
    }

    // Поиск в ширину (BFS)
    while (queue.length > 0) {
      const [r, c] = queue.shift()!;

      // Если мы дошли до последнего (правого) столбца, игрок 'X' победил
      if (c === this.cols - 1) {
        return true;
      }

      // Проверяем 6 соседних клеток
      const neighbors = [
        [r - 1, c], [r - 1, c + 1],
        [r, c - 1],             [r, c + 1],
        [r + 1, c - 1], [r + 1, c]
      ];

      for (const [nr, nc] of neighbors) {
        if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
          if (!visited[nr][nc] && this.grid[nr][nc] === 'X') {
            visited[nr][nc] = true;
            queue.push([nr, nc]);
          }
        }
      }
    }

    return false;
  }
}
