/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  const mid = (0 + s.length-1)/2    
  for (let i = 0; i< mid; i++ ){
  let lastIndex = s.length-1-i; //need to fix the index beforehand or it will have bug
    [s[i], s[lastIndex]] = [s[lastIndex], s[i]];
  }
  return s
};