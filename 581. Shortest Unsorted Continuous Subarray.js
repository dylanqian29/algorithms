/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let startIndex = -1;
  let endIndex = -2;
  let min = nums[nums.length - 1];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], max);
    min = Math.min(nums[nums.length - 1 - i], min);
    if (nums[i] < max) {
      endIndex = i;
    }
    if (nums[nums.length - 1 - i] > min) {
      startIndex = nums.length - 1 - i;
    }
  }
  return endIndex - startIndex + 1;
};
