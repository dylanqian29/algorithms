/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let results = {};
  for (var i = 0; i < s.length; i++) {
    if (results[s[i]]) {
      results[s[i]] += 1;
    } else {
      results[s[i]] = 1;
    }
  }

  let outcome = [];
  for (var key in results) {
    outcome.push([key, results[key]]);
  }
  outcome.sort((a, b) => b[1] - a[1]);

  let final = "";
  for (let j = 0; j < outcome.length; j++) {
    final += outcome[j][0].repeat(outcome[j][1]);
  }
  return final;
};
