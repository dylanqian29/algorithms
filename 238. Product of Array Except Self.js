/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let results = [];
  let forward = [1];
  for (let i = 1; i < nums.length; i++) {
    forward[i] = forward[i - 1] * nums[i - 1];
  }
  let backward = [1];
  for (let j = nums.length - 1; j > 0; j--) {
    backward.unshift(backward[0] * nums[j]);
  }

  for (let k = 0; k < backward.length; k++) {
    results.push(forward[k] * backward[k]);
  }

  return results;
};
