export function count(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let totalRectangles = 0;
  const rows = grid.length;
  const cols = grid[0].length;


  for (let r1 = 0; r1 < rows; r1++) {
    for (let c1 = 0; c1 < cols; c1++) {
      if (grid[r1][c1] !== '+') continue;

    
      for (let c2 = c1 + 1; c2 < cols; c2++) {
        if (grid[r1][c2] !== '+') {
         
          if (grid[r1][c2] !== '-') break; 
          continue;
        }

        for (let r2 = r1 + 1; r2 < rows; r2++) {
          if (!isVerticalLine(grid, r1, r2, c1) || !isVerticalLine(grid, r1, r2, c2)) break;


          if (grid[r2][c1] === '+' && grid[r2][c2] === '+') {
            if (isHorizontalLine(grid, r2, c1, c2)) {
              totalRectangles++;
            }
          }
        }
      }
    }
  }

  return totalRectangles;
}

function isHorizontalLine(grid, row, col1, col2) {
  for (let c = col1 + 1; c < col2; c++) {
    if (grid[row][c] !== '-' && grid[row][c] !== '+') return false;
  }
  return true;
}

function isVerticalLine(grid, row1, row2, col) {
  for (let r = row1 + 1; r < row2; r++) {
    if (grid[r][col] !== '|' && grid[r][col] !== '+') return false;
  }
  return true;
}
