/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var len = prices.length,
    l = [],
    r = [],
    i,
    max,
    min;

  l[0] = 0;
  min = prices[0];

  for (i = 1; i < len; i++) {
    l[i] = Math.max(l[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  r[len - 1] = 0;
  max = prices[len - 1];

  for (i = len - 2; i >= 0; i--) {
    r[i] = Math.max(r[i + 1], max - prices[i]);
    max = Math.max(max, prices[i]);
  }

  max = 0;

  for (i = 0; i < len; i++) {
    max = Math.max(max, l[i] + r[i]);
  }

  return max;
};
