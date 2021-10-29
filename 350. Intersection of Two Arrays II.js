/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const mainArray = nums1.length < nums2.length ? nums1 : nums2;
  const subArray = nums1.length < nums2.length ? nums2 : nums1;

  const record = {};
  const result = [];

  for (let i = 0; i < mainArray.length; i++) {
    if (record[mainArray[i]]) {
      record[mainArray[i]]++;
    } else {
      record[mainArray[i]] = 1;
    }
  }

  for (let i = 0; i < subArray.length; i++) {
    if (record[subArray[i]]) {
      result.push(subArray[i]);
      record[subArray[i]]--;
    }
  }
  return result;
};
