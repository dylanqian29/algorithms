/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s === null || s.length <= 1) {
    return s
  }
  let len = s.length;
  let longest = s[0];
  let longestLen = 1;
  let i, j, k

  for (i = 0; i < len; i++) {
    helper(s, i, i)
    helper(s, i, i + 1)
  }

  function helper(s, i, j) {
    while (i >= 0 && j <= len && s[i] === s[j]) {
      i--
      j++
    }
    i++
    j--
    if (j - i + 1 > longestLen) {
      longestLen = j - i + 1;
      longest = s.substring(i, j + 1)
    }
  }
  return longest
};
