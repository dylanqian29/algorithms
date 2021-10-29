/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    let number = Math.abs(nums[i]);
    if (nums[number - 1] < 0) {
      results.push(Math.abs(number));
    } else {
      nums[number - 1] = -Math.abs(nums[number - 1]);
    }
  }

  return results;
};
