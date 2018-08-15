/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let results = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[j] === nums[j - 1] && j !== i + 1) continue;
      let left = j + 1
      let right = nums.length - 1
      while (right > left) {
        if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) {
            left++
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--
          }
          right--
          left++
        } else if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
          right--
        } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++
        }
      }
    }
  }
  return results
};