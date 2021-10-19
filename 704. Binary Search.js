/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const search = (nums, target) => {
  let min=0
  let max=nums.length-1
      
  return binarySearch(nums, min, max, target)
};

const binarySearch = (nums, min, max, target) => {
  let mid = Math.floor((min+max)/2)

  if (target < nums[min] || target > nums[max]) {
      return -1
  }

  if (nums[mid] === target) {
      return mid
  } else if (target > nums[mid]) {
      return binarySearch(nums, mid + 1, max, target)
  } else if (target < nums[mid]) {
      return binarySearch(nums, min, mid -1, target)
  }
}