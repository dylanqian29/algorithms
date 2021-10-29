/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] ? map[nums[i]]++ : (map[nums[i]] = 1);
  }
  console.log(map);
  let results = [];

  const helper = (map, result) => {
    if (result.length === nums.length) {
      results.push(result);
      return;
    }

    for (let key in map) {
      result.push(Number(key));
      if (map[key] === 1) {
        delete map[key];
      } else {
        map[key]--;
      }
      helper(map, result.slice(0));
      map[key] ? map[key]++ : (map[key] = 1);
      result.pop();
    }
  };
  helper(map, []);
  return results;
};
