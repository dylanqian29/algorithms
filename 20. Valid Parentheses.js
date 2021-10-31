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

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const record = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (record[s[i]]) {
      stack.push(record[s[i]]);
    } else {
      if (stack.pop() != s[i]) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }

  return true;
};
