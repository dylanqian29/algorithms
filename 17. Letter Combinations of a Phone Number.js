/**
 * @param {string} digits
 * @return {string[]}
 */
const MAPPING = [
  "0",
  "1",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

const letterCombinations = (digits) => {
  let result = [];
  const numberLength = digits.length;

  if (numberLength === 0) {
    return result;
  }

  const helper = (length, string) => {
    let letters = MAPPING[Number(digits[length])];
    if (length === numberLength) {
      result.push(string);
      string = "";
      return;
    } else {
      for (let i = 0; i < letters.length; i++) {
        helper(length + 1, string + letters[i]);
      }
    }
  };

  helper(0, "");

  return result;
};
