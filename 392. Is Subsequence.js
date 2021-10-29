/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;

  while (tIndex <= t.length) {
    if (sIndex === s.length) {
      return true;
    } else if (s[sIndex] === t[tIndex]) {
      sIndex++;
      tIndex++;
    } else {
      tIndex++;
    }
  }
  return false;
};

var anySubsequence = function (s, t) {
  let args = Array.from(arguments);
  let S = args.slice(0, args.length - 1);
  let T = args.slice(args.length - 1);

  for (let i = 0; i < S.length; i++) {
    if (isSubsequence(S[i], T[0])) {
      return true;
    }
  }
  return false;
};
