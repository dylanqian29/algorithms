/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim()
  if(Number(str)){
    if (Math.abs(Number(str)) > 2147483648){
        return Number(str)/Math.abs(Number(str)) * 2147483648
      } else {
        return Number(str)
      }
    return Number(str)
  } else {
    if (!Number(str.charAt(0)) && str.charAt(0) !== '-' &&str.charAt(0) !== '+'){
      return 0
    } else if ((str.length ===1 && str.charAt(0) !== '-')|| (str.length ===1 && str.charAt(0) !== '+')){
      return 0
    } else {
      let index = 0 ;
      let end = false
      while (!end) {
        if ((str[index] === '+' || str[index] === '-') &&(str[index+1] === '+' || str[index+1] === '-') ){
          return 0
        }
        if (Number(str[index])|| str[index]==='-' || str[index]==='+'){
          index++
        } else {
          end = true
        }
      }
      let results  = Number(str.slice(0,index))
      console.log(results> 2147483648)
      if (Math.abs(results) > 2147483648){
        return results/Math.abs(results) * 2147483648
      } else {
        return results
      }

    }
  }
};


myAtoi("-+5")