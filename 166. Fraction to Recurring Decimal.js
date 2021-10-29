/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  let left = numerator;
  let result = "";
  let decimal = false;
  let map = [];

  if (
    (numerator > 0 && denominator < 0) ||
    (numerator < 0 && denominator > 0)
  ) {
    result += "-";
  }
  left = Math.abs(left);
  denominator = Math.abs(denominator);
  result += Math.floor(left / denominator);

  left = (left - Math.floor(left / denominator) * denominator) * 10;
  if (left !== 0) {
    result += ".";
  }
  let collection = "";
  while (left) {
    let index = map.indexOf(left);
    if (index === -1) {
      map.push(left);
      collection += Math.floor(left / denominator);
      left = (left % denominator) * 10;
    } else {
      result +=
        collection.slice(0, index) + "(" + collection.slice(index) + ")";
      collection = "";
      break;
    }
  }
  result += collection;

  return result;
};
