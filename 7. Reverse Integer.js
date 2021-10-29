/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  let sign;
  if (x < 0) {
    sign = -1;
    x = -x;
  } else {
    sign = 1;
  }
  while (x > 0) {
    result += x % 10;
    result *= 10;
    x = Math.floor(x / 10);
  }

  return (sign * result) / 10;
};
