/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const q = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        q.push([i, j]);
      } else if (mat[i][j] === 1) {
        mat[i][j] = Infinity;
      }
    }
  }

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let next;
  while (q.length) {
    let [row, col] = q.shift();
    let currentValue = mat[row][col];
    for (let dir of dirs) {
      let nextRow = row + dir[0];
      let nextCol = col + dir[1];
      let nextValue;

      if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols) {
        nextValue = mat[nextRow][nextCol];
        if (nextValue > currentValue + 1) {
          mat[nextRow][nextCol] = currentValue + 1;
          q.push([nextRow, nextCol]);
        }
      }
    }
  }

  return mat;
};
