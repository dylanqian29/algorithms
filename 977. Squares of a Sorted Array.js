/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) time and space
// 2 pointers
 var sortedSquares = function(nums) {
  let left = 0
  let right = nums.length -1 
  let arrayPointer = nums.length-1
  let result =[]
  
  while (left <= right) {
      if (Math.abs(nums[left]) < Math.abs(nums[right])) {
          result[arrayPointer] = nums[right] * nums[right]
          right--
          arrayPointer--
      } else {
          result[arrayPointer] = nums[left] * nums[left]
          left++
          arrayPointer--
      }
  }
  return result
};