// O(n^2) Time
// O(n) Space
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let left = 0;
  let right = left;
  let set = new Set();

  while (right < s.length) {
    if (set.has(s[right])) {
      left = left + 1;
      right = left;
      set = new Set();
    } else {
      set.add(s[right]);
      right += 1;
      max = Math.max(max, right - left);
    }
  }

  return max;
};

// O(n) Time
// O(n) Space
// Sliding window
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let left = 0;
  let right = 0;
  let set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
    } else {
      while (s[left] !== s[right]) {
        set.delete(s[left]);
        left++;
      }
      left++;
      right++;
    }
    max = Math.max(max, set.size);
  }
  return max;
};
