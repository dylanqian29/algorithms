/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];

  const getCombination = (on, subResult) => {
    if (subResult.length === k) {
      result.push(subResult);
      return;
    }

    for (let i = on; i <= n; i++) {
      subResult.push(i);
      getCombination(i + 1, [...subResult]);
      subResult.pop(i);
    }
  };

  getCombination(1, []);
  return result;
};
