/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let pairs = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let open = [];
  let valid = true;
  let openP = Object.keys(pairs);

  for (var i = 0; i < s.length; i++) {
    if (openP.includes(s[i])) {
      open.push(s[i]);
    } else {
      if (pairs[open.pop()] === s[i]) {
        valid = valid;
      } else {
        valid = false;
      }
    }
  }
  if (open.length !== 0) {
    valid = false;
  }
  return valid;
};
