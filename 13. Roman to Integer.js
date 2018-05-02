/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dict = {
        'M':1000,
        'D':500,
        'C':100,
        'L':50,
        'X':10,
        'V':5,
        'I':1
    }
    
    
    let results = 0;
    for(var i = 0; i<s.length;i++){
      if (dict[s[i]]<dict[s[i+1]]){
        results = results - dict[s[i]]
      } else {
        results = results + dict[s[i]]
      }
    }
    
    return results
};