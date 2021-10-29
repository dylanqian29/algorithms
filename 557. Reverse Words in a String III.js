/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const emptyStringIndexes = [-1];
  let sArray = [...s];

  sArray.forEach((a, index) => {
    if (a === " ") {
      emptyStringIndexes.push(index);
    }
  });
  emptyStringIndexes.push(s.length);

  for (let i = 0; i < emptyStringIndexes.length - 1; i++) {
    let first = emptyStringIndexes[i] + 1;
    let last = emptyStringIndexes[i + 1] - 1;
    let mid = (emptyStringIndexes[i] + emptyStringIndexes[i + 1]) / 2;

    for (let j = first; j < mid; j++) {
      let firstIndex = j;
      let lastIndex = last - j + first;
      [sArray[j], sArray[lastIndex]] = [sArray[lastIndex], sArray[j]];
    }
  }
  return sArray.join("");
};

var reverseWords = function (s) {
  let words = s.split(" ");

  words.forEach((word, index) => {
    words[index] = word.split("").reverse().join("");
  });

  return words.join(" ");
};
