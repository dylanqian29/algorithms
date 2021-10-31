/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const runRottingProcess = (timestamp) => {
    let keepGoing = false;
    let nextRow, nextCol;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === timestamp) {
          for (let dir of dirs) {
            nextRow = row + dir[0];
            nextCol = col + dir[1];
            if (
              nextRow < rows &&
              nextRow >= 0 &&
              nextCol < cols &&
              nextCol >= 0
            ) {
              if (grid[nextRow][nextCol] === 1) {
                grid[nextRow][nextCol] = timestamp + 1;
                keepGoing = true;
              }
            }
          }
        }
      }
    }
    return keepGoing;
  };

  let timestamp = 2;
  while (runRottingProcess(timestamp)) {
    timestamp++;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        return -1;
      }
    }
  }

  return timestamp - 2;
};
