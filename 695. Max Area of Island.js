/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  let max = 0;
  let row = 0;
  let col = 0;

  const getMaxArea = (grid, row, col) => {
    let result;
    if (grid[row][col] === 0) {
      return 0;
    } else if (grid[row][col] === 1) {
      grid[row][col] = 0;
      result = 1;
      if (row + 1 < rows) result += getMaxArea(grid, row + 1, col);
      if (row - 1 >= 0) result += getMaxArea(grid, row - 1, col);
      if (col + 1 < cols) result += getMaxArea(grid, row, col + 1);
      if (col - 1 >= 0) result += getMaxArea(grid, row, col - 1);
    }
    max = Math.max(result, max);
    return result;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        getMaxArea(grid, i, j, 0);
      }
    }
  }

  return max;
};
