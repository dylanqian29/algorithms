/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    findMedianSortedArrays(nums2, nums1);
  }
  let totalLen = nums1.length + nums2.length;

  let cut1 = 0;
  let cut2 = 0;
  let cutL = 0;
  let cutR = nums1.length;

  while (cut1 <= nums1.length) {
    console.log("hi");
    cut1 = (cutR - cutL) / 2 + cutL;
    cut2 = totalLen / 2 - cut1;

    var L1 = cut1 === 0 ? Number.MIN_VALUE : nums1[cut1 - 1];
    var R1 = cut1 === 0 ? Number.MAX_VALUE : nums1[cut1];
    var L2 = cut2 === 0 ? Number.MIN_VALUE : nums2[cut2 - 1];
    var R2 = cut2 === 0 ? Number.MAX_VALUE : nums2[cut2];

    if (L1 > R2) {
      cutR = cut1 - 1;
    } else if (L2 > R1) {
      cutL = cut1 + 1;
    } else {
      if (totalLen % 2 === 0) {
        L1 = L1 > L2 ? L1 : L2;
        R1 = R1 < R2 ? R1 : R2;
        return (L1 + R1) / 2;
      } else {
        R1 = R1 < R2 ? R1 : R2;
        return R1;
      }
    }
  }
  return -1;
};
