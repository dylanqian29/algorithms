/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map.hasOwnProperty(target - nums[i])) {
      map[nums[i]] = i;
    } else {
      return [map[target - nums[i]], i];
    }
  }
  return null;
};
