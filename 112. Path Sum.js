/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === {}) return false
  if (root === null) return sum === 0;
  sum -= root.val
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}