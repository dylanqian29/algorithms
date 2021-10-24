/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const moveZeroes = nums => {
  const length = nums.length;
  
  next = 1;
  zeroPosition = 0; 
  
  while (next <= length -1 ) {
    if (nums[zeroPosition] === 0 && nums[next] !== 0){
        [nums[zeroPosition], nums[next]] = [nums[next], nums[zeroPosition]]
        zeroPosition++
    } else if (nums[zeroPosition] !== 0){
        zeroPosition++
  } 
    next++
  }
  return nums
};