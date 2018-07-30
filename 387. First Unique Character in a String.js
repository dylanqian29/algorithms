/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let letter = s[i]

    if (s.indexOf(letter) === s.lastIndexOf(letter)) {
      return i
    }
  }
  return -1
};