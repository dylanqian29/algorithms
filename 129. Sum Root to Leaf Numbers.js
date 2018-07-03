/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (t) {

  if (!t) {
    return 0
  }
  let sum = t.val
  let totalSum = 0
  function getSum(node, sum) {
    if (!node.left && !node.right) {
      totalSum += sum
      return
    }
    if (node.left) {
      getSum(node.left, sum * 10 + node.left.val)
    }
    if (node.right) {
      getSum(node.right, sum * 10 + node.right.val)
    }
  }
  getSum(t, sum)
  return totalSum
}