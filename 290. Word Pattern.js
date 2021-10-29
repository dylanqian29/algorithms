/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (patterns, strings) {
  patterns = patterns.split("");
  strings = strings.split(" ");
  if (strings.length !== patterns.length) {
    return false;
  }
  let patternMap = new Map();
  let stringMap = new Map();
  for (let i = 0; i < patterns.length; i++) {
    if (!patternMap.get(patterns[i])) {
      patternMap.set(patterns[i], strings[i]);
    } else {
      if (patternMap.get(patterns[i]) !== strings[i]) {
        return false;
      }
    }

    if (!stringMap.get(strings[i])) {
      stringMap.set(strings[i], patterns[i]);
    } else {
      if (stringMap.get(strings[i]) !== patterns[i]) {
        return false;
      }
    }
  }
  return true;
};
