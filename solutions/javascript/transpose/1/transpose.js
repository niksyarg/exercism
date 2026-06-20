export const transpose = (matrix) => {
  if (matrix.length === 0) return [];
  const maxLen = Math.max(...matrix.map(row => row.length));
  const result = [];

  for (let col = 0; col < maxLen; col++) {
    let newRow = '';
    for (let row = 0; row < matrix.length; row++) {
      const char = matrix[row][col];
      
      if (char !== undefined) {
        newRow = newRow.padEnd(row) + char;
      }
    }
    result.push(newRow);
  }
  return result;
};
