/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let results = {};
  let stack = [];
  let prev, log, func, action, curr;
  for (let i = 0; i < logs.length; i++) {
    log = logs[i].split(":");
    func = log[0];
    action = log[1];
    curr = Number(log[2]);

    if (action === "start") {
      if (stack.length !== 0) {
        if (results[stack[stack.length - 1]] === undefined) {
          results[stack[stack.length - 1]] = curr - prev;
        } else {
          results[stack[stack.length - 1]] += curr - prev;
        }
      }
      stack.push(func);
      prev = curr;
    } else {
      if (results[stack[stack.length - 1]] === undefined) {
        results[stack[stack.length - 1]] = curr - prev + 1;
      } else {
        results[stack[stack.length - 1]] += curr - prev + 1;
      }
      stack.pop();
      prev = curr + 1;
    }
  }
  return Object.values(results);
};
