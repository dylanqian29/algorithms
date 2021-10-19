/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// worst scenario
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      for (let i=0; i<=n; i++) {
          if (isBadVersion(i)) {
              return i
          }
      }
  };
};


// divide and conquer
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 1;
      let right = n;
      let mid 
      while (left < right ){
          mid = Math.floor((left+right)/2)
          if (isBadVersion(mid)){
              right = mid
          } else {
              left = mid + 1
          }
      }
      return left
  };
};