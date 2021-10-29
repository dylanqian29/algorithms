/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let map = {};
  let i, letter;

  for (i = 0; i < p.length; i++) {
    letter = p[i];
    if (map.hasOwnProperty(letter)) {
      map[letter]++;
    } else {
      map[letter] = 1;
    }
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let pLen = p.length;
  let count = p.length;
  let result = [];
  while (rightIndex < s.length) {
    if (map[s[rightIndex]] >= 1) {
      count--;
    }
    map[s[rightIndex]]--;
    rightIndex++;
    if (count === 0) {
      result.push(leftIndex);
    }
    if (rightIndex - leftIndex === pLen) {
      if (map[s[leftIndex]] >= 0) {
        count++;
      }
      map[s[leftIndex]]++;
      leftIndex++;
    }

    //          if (map[s[right++]]-- >= 1) count--;
    //         if (count == 0) result.push(left);
    //         if (right - left == p.length && map[s[left++]]++ >=0)count++;
  }
  return result;
};
