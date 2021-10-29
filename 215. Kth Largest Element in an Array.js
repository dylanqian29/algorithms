/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  let right = nums.length - 1;
  let left = 0;
  let partitionPoint;

  while (true) {
    partitionPoint = partition(nums, left, right);
    console.log(nums);
    if (partitionPoint === k - 1) {
      return nums[k - 1];
    } else if (partitionPoint > k - 1) {
      right = partitionPoint - 1;
    } else {
      left = partitionPoint + 1;
    }
  }
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, left, right) => {
  let pivot = arr[right];
  let partitionIndex = 0;

  for (let i = 0; i < right; i++) {
    if (arr[i] > pivot) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, partitionIndex, right);
  return partitionIndex;
};
