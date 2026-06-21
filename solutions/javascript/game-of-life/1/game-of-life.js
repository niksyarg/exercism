export class GameOfLife {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0]?.length || 0;
  }

  tick() {
    this.matrix = this.matrix.map((row, r) =>
      row.map((cell, c) => {
        const neighbors = this.countNeighbors(r, c);
        
        if (cell === 1) return (neighbors === 2 || neighbors === 3) ? 1 : 0;
        return neighbors === 3 ? 1 : 0;
      })
    );
  }

  state() {
    return this.matrix;
  }

  countNeighbors(r, c) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const nr = r + i;
        const nc = c + j;
        if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
          count += this.matrix[nr][nc];
        }
      }
    }
    return count;
  }
}

