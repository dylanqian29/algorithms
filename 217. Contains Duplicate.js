/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicateHash = (nums) => {
  const record = {};
  for (let i = 0; i < nums.length; i++) {
    if (record[nums[i]]) {
      return true;
    }
    record[nums[i]] = 1;
  }
  return false;
};

const containsDuplicateSet = (nums) => {
  const set = new Set(nums);
  return nums.length !== set.size;
};
