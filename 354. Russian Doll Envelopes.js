var lengthOfLIS = function (nums) {
  var len = nums.length,
    arr = [],
    i,
    j,
    max = 1;

  if (len === 0) {
    return 0;
  }

  for (i = 0; i < len; i++) {
    arr[i] = 1;
    for (j = 0; j < i; j++) {
      if (nums[i] > nums[j] && arr[j] + 1 > arr[i]) {
        arr[i] = arr[j] + 1;
      }

      max = Math.max(max, arr[i]);
    }
  }

  return max;
};

var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) {
    return 0;
  }
  let longest = 0;

  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  console.log(envelopes);

  let heightArray = [];
  for (let z = 0; z < envelopes.length; z++) {
    heightArray.push(envelopes[z][1]);
  }
  console.log(heightArray);
  return lengthOfLIS(heightArray);
};
