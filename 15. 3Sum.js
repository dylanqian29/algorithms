/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let results = [];
  if (nums.length < 3) {
    return results;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return results;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      let min = i + 1;
      let max = nums.length - 1;
      while (max > min) {
        if (nums[min] === nums[min - 1] && i !== min - 1) {
          min++;
        } else if (nums[max] === nums[max + 1]) {
          max--;
        } else if (nums[i] + nums[min] + nums[max] === 0) {
          results.push([nums[i], nums[min], nums[max]]);
          max--;
          min++;
        } else if (nums[i] + nums[min] + nums[max] < 0) {
          min++;
        } else if (nums[i] + nums[min] + nums[max] > 0) {
          max--;
        }
      }
    }
  }
  return results;
};

threeSum([-10, -10, -5, -5, 0, 0, 0, 5, 5, 10, 10]);
