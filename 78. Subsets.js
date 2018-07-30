/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let results = []

  const helper = (subset, index) => {
    results.push(subset)
    for (let i = index; i < nums.length; i++) {
      subset.push(nums[i])
      helper(subset.slice(0), i + 1)
      subset.pop()
    }
  }

  helper([], 0)
  return results
};