/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0) + 1);
  }

  console.log(magazineMap);
  for (let i = 0; i < ransomNote.length; i++) {
    if (
      magazineMap.get(ransomNote[i]) === 0 ||
      !magazineMap.has(ransomNote[i])
    ) {
      return false;
    }
    magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1);
  }
  return true;
};
