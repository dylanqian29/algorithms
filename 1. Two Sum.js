/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let index = 0;
    while (index <nums.length){
        for (let i = index+1; i< nums.length;i++ ){
            if (nums[index] + nums[i] === target){
                return [index,i]
            }
        } 
        index++
    }
};