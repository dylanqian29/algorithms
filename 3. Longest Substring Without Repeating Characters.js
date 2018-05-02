/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = "";
    let possibleSolution = ""
    let counter = 0;
    let longestLength = 0
    for (let i =0; i<s.length; i++){
      if (possibleSolution.includes(s[i])){
          let index = possibleSolution.indexOf(s[i])
          possibleSolution = possibleSolution.slice(index+1) + s[i];
          counter = possibleSolution.length;
      } else if (possibleSolution.length === 0 ){
        possibleSolution = possibleSolution.concat(s[i])
        counter++
        if (counter > longestLength){
          longest = possibleSolution;
          longestLength = counter;

        }
      } else {
        possibleSolution = possibleSolution.concat(s[i])
        counter++
        if (counter > longestLength){
          longest = possibleSolution;
          longestLength = counter;
        }
      }
    }
    return longest.length 
};