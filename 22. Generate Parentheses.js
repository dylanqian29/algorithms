/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let map = {}
  map['('] = n
  let results = []

  const helper = (result, map) => {

    if (result.length === n * 2) {
      results.push(result.join(''))
    }


    for (let key in map) {
      result.push(key)
      if (map[key] === 1) {
        delete map[key]
      } else {
        map[key]--
      }

      if (key === '(') {
        map[')'] ? map[')']++ : map[')'] = 1
      }

      helper(result.slice(), map)
      map[key] ? map[key]++ : map[key] = 1
      if (key === '(') {
        if (map[')'] === 1) {
          delete map[')']
        } else {
          map[')']--
        }
      }
      result.pop()

    }
  }
  helper([], map)
  return results
};