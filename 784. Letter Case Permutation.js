/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const results = [];

  const getPermutation = (pos, result) => {
    if (result.length === s.length) {
      results.push(result);
      return;
    }

    if (Number.isInteger(Number(s[pos]))) {
      getPermutation(pos + 1, result + s[pos]);
    } else {
      getPermutation(pos + 1, result + s[pos].toLowerCase());
      getPermutation(pos + 1, result + s[pos].toUpperCase());
    }
  };

  getPermutation(0, "");
  return results;
};
