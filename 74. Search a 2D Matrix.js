/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let colsNum = matrix[0].length;
  let rowsNum = matrix.length;

  let left = 0;
  let right = colsNum * rowsNum - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = matrix[Math.floor(mid / colsNum)][mid % colsNum];
    if (midValue === target) {
      return true;
    }

    if (midValue < target) {
      left = mid + 1;
    }

    if (midValue > target) {
      right = mid - 1;
    }
  }

  return false;
};
