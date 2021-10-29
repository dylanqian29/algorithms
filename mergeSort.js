const mergeSort = (array) => {
  if (array.length === 0) {
    return array;
  }
  if (array.length === 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex !== left.length) {
    result = result.concat(left.slice(leftIndex));
  }

  if (rightIndex !== right.length) {
    result = result.concat(right.slice(rightIndex));
  }
  return result;
};
