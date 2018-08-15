/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0

  let index = 0;
  let localMin = 0;
  while (index < prices.length) {

    if (index === prices.length - 1) {
      profit += (prices[index] - prices[localMin])
    }

    if (prices[index] > prices[index + 1]) {
      profit += (prices[index] - prices[localMin])
      localMin = index + 1
    }

    index++
  }
  return profit
};