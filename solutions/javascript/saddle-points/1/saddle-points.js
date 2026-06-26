export const saddlePoints = (grid) => {
  const points = [];

  for (let r = 0; r < grid.length; r++) {
    const rowMax = Math.max(...grid[r]);

    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === rowMax) {
        const column = grid.map(row => row[c]);
        const colMin = Math.min(...column);

        if (grid[r][c] === colMin) {
   
          points.push({ row: r + 1, column: c + 1 });
        }
      }
    }
  }

  return points;
};
