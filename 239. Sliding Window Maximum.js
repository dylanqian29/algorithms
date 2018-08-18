/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k > nums.length) {
    return null
  }
  if (k <= 1) {
    return nums
  }


  let queue = []
  let results = []


  for (let i = 0; i < nums.length; i++) {
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop()
    }

    if (i - k >= queue[0]) {
      queue.shift()
    }

    queue.push(i)

    if (i >= k - 1) {
      results.push(nums[queue[0]])
    }

  }

  return results
};