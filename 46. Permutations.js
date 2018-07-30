/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {


  let results = []

  let helper = (result, index) => {
    if (result.length === nums.length) {
      results.push(result)
      return
    }
    for (let i = 0; i < result.length + 1; i++) {
      helper(result.slice(0, i).concat([nums[index]]).concat(result.slice(i, result.length)), index + 1)
    }

  }

  helper([], 0)
  return results
};
