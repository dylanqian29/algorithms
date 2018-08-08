/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [1, 1]
  let i, j
  let sign = 1;
  let sum = 0;

  for (i = 0; i < s.length; i++) {
    let ch = s[i]
    if (ch !== ' ' && !isNaN(Number(ch))) {
      let j = i + 1;
      let sub = Number(ch)
      while (s[j] !== ' ' && !isNaN(Number(s[j]))) {
        sub = sub * 10 + Number(s[j])
        j++
      }
      sum += stack.pop() * sub
      i = j - 1
    } else if (ch === "+") {
      stack.push(stack[stack.length - 1])
    } else if (ch === "-") {
      stack.push(stack[stack.length - 1] * -1)
    } else if (ch === '(') {
      stack.push(stack[stack.length - 1])
    } else if (ch === ')') {
      stack.pop()
    }
  }
  return sum
};