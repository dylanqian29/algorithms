/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  let i, str, sortedStr;

  for (i = 0; i < strs.length; i++) {
    str = strs[i];
    sortedStr = str.split("").sort().join("");

    if (map[sortedStr]) {
      map[sortedStr].push(str);
    } else {
      map[sortedStr] = [str];
    }
  }

  return Object.values(map);
};
