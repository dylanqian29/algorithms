/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let increment = numRows*2 -2;
    let len = s.length;
    let results = "";
    let i, j, mid;

    if (numRows === 1){
      return s
    }
    for (i = 0; i < numRows; i += 1){
      for (j =i; j < len; j += increment){
        results += s.charAt(j)

        if (i !== 0 && i !== numRows-1){
          mid = j + increment - 2*i
            if (mid< len){
                results += s.charAt(mid)
            }
        }
      }
        
    }
  return results
};