/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//merge from the beginning

var merge = function (nums1, m, nums2, n) {
  let pointer1 = 0;
  let pointer2 = 0;
  let result = [];
  while (pointer1 < m && pointer2 < n) {
    if (nums1[pointer1] < nums2[pointer2]) {
      result.push(nums1[pointer1]);
      pointer1++;
    } else {
      result.push(nums2[pointer2]);
      pointer2++;
    }
  }

  if (pointer1 < m) {
    result = result.concat(nums1.slice(pointer1, m));
  }

  if (pointer2 < n) {
    result = result.concat(nums2.slice(pointer2, n));
  }

  return result;
};

//merge from back
var merge = function (nums1, m, nums2, n) {
  let pointer1 = m - 1;
  let pointer2 = n - 1;

  let arrayPointer = m + n - 1;

  while (pointer2 >= 0) {
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[arrayPointer] = nums1[pointer1];
      pointer1--;
      arrayPointer--;
    } else {
      nums1[arrayPointer] = nums2[pointer2];
      pointer2--;
      arrayPointer--;
    }
  }

  return nums1;
};
