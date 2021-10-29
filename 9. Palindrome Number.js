var isPalindrome = function (x) {
  x = x.toString();

  var results = true;
  var index = 0;
  while (index < x.length) {
    if (x[index] !== x[x.length - 1 - index]) {
      results = false;
    } else {
      results = results;
    }
    index++;
  }
  return results;
};
