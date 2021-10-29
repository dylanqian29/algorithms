/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let div = 5,
    number = 0;

  while (div <= n) {
    number += Math.floor(n / div);
    div *= 5;
  }

  return number;
};
