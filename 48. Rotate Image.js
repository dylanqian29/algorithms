/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;
  let half = Math.floor(n / 2);
  let level = 0;
  let temp;

  while (level < half) {
    for (let i = level; i < n - level - 1; i++) {
      temp = matrix[level][i];
      matrix[level][i] = matrix[n - i - 1][level];

      matrix[n - i - 1][level] = matrix[n - level - 1][n - i - 1];
      matrix[n - level - 1][n - i - 1] = matrix[i][n - level - 1];
      matrix[i][n - level - 1] = temp;
    }
    level++;
  }
};

a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

rotate(a);
