/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) {
    return nums[0] * nums[1] * nums[2];
  }

  let maxOne = Math.max(nums[0], nums[1], nums[2]);
  let minOne = Math.min(nums[0], nums[1], nums[2]);
  let maxTwo = Math.max(
    nums[0] * nums[1],
    nums[0] * nums[2],
    nums[1] * nums[2]
  );
  let minTwo = Math.min(
    nums[0] * nums[1],
    nums[0] * nums[2],
    nums[1] * nums[2]
  );
  let maxThree = nums[0] * nums[1] * nums[2];

  for (let i = 3; i < nums.length; i++) {
    maxThree = Math.max(maxTwo * nums[i], minTwo * nums[i], maxThree);
    maxTwo = Math.max(maxOne * nums[i], minOne * nums[i], maxTwo);
    minTwo = Math.min(maxOne * nums[i], minOne * nums[i], minTwo);
    maxOne = Math.max(maxOne, nums[i]);
    minOne = Math.min(minOne, nums[i]);
  }
  return maxThree;
};
