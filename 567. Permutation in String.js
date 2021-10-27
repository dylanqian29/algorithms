/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  const map = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25}
  
  if(s1.length > s2.length){
      return false
  }
  
  const map1 = new Array(26).fill(0);
  const map2 = new Array(26).fill(0);
  
  for (let i=0; i<s2.length; i++) {
      if(i< s1.length){
          map1[map[s1[i]]]++
          map2[map[s2[i]]]++
      } else {
    if (JSON.stringify(map1) === JSON.stringify(map2)){
      return true
    }

          let number = i-s1.length
          let letter = s2[number]
          let pos = map[letter]
          map2[map[s2[i]]]++
          map2[pos]--	
      }
  }

  if (JSON.stringify(map1) === JSON.stringify(map2)){
    return true
  }
  return false
};
