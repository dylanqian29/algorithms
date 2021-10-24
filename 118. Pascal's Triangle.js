/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  if (numRows === 0 ) {
  return null
}

let result =[]
result.push([1])

for (let i = 1; i< numRows; i++) {
  let subArray = [];
  subArray[0] = 1;
  subArray[i] = 1;
  for (let j = 0 ; j< result[i-1].length-1; j++) {
    subArray[j+1] = result[i-1][j] + result[i-1][j+1]
    
  }
  result.push(subArray)
}
return result
};
