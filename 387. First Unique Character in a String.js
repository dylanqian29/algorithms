/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    if (s.indexOf(letter) === s.lastIndexOf(letter)) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  //can do 2 iteration in order to check duplicate o(n^2)

  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
  }

  console.log(hashMap);

  for (let i = 0; i < s.length; i++) {
    if (hashMap.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
