/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let difference = false;
  let index = 0;
  let longest = "";
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  while (!difference) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i] === "") {
        return "";
      }

      if (strs[i][index] !== strs[i + 1][index]) {
        difference = true;
      }
    }
    if (difference === false) {
      longest = longest + strs[0][index];
      index++;
      if (longest === strs[0]) {
        difference = true;
      }
    }
  }
  return longest;
};
