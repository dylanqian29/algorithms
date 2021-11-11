/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min = nums[0];
  let first = 0;
  let last = nums.length - 1;
  let mid;

  while (first <= last) {
    mid = Math.floor((first + last) / 2);
    if (nums[mid] < min) {
      min = nums[mid];
    }
    if (nums[mid] > nums[last]) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return min;
};
