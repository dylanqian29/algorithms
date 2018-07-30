const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let partitionPoint = partition(arr, left, right)
    quickSort(arr, left, partitionPoint - 1)
    quickSort(arr, partitionPoint + 1, right)
  }
  return arr
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
const partition = (arr, left, right) => {
  let partitionIndex = 0;
  let pivot = arr[right]
  for (let i = 0; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, partitionIndex, i)
      partitionIndex++
    }
  }
  swap(arr, partitionIndex, right)
  // console.log(arr)
  return partitionIndex
}


quickSort([4, 2, 5, 7, 6, 3], 0, 5)