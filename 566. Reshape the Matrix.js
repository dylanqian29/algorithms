/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let result = [];
  let subArray = [];

  let total = mat.length * mat[0].length;
  c = total / r;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      subArray.push(mat[i][j]);
      if (subArray.length === c) {
        result.push(subArray);
        subArray = [];
      }
    }
  }

  return result.length === 0 ? mat : result;
};
