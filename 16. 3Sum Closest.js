/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let results = nums[0] + nums[1] + nums[nums.length - 1]
  if (nums.length === 3) {
    return results
  } else if (nums.length < 3) {
    return null
  }

  for (let i = 0; i < nums.length - 2; i++) {
    let min = i + 1
    let max = nums.length - 1

    while (max > min) {
      let sum = nums[i] + nums[min] + nums[max]
      if (sum > target) {
        max--
      } else if (sum < target) {
        min++
      } else if (sum === target) {
        return sum
      }
      if (Math.abs(sum - target) < Math.abs(results - target)) {
        results = sum
      }
    }
  }
  return results
};