/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const left = nums.length - k;
  const right = nums.length * 2 - 3;

  let newArray = [...nums, ...nums];

  const result = newArray.slice(left, right);
  return result;
};
