/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (stockPrices) {
  if (stockPrices.length < 2) {
    return 0
  }
  let maxDifference
  let minPrice = stockPrices[0]
  for (let i = 1; i < stockPrices.length; i++) {
    if (!maxDifference) {
      maxDifference = stockPrices[1] - stockPrices[0]
    }
    maxDifference = Math.max(maxDifference, stockPrices[i] - minPrice)
    minPrice = Math.min(minPrice, stockPrices[i])
  }
  return maxDifference < 0 ? 0 : maxDifference
};