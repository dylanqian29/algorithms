/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  let node = root;
  let result = true
  function symmetric(node1, node2) {
    if ((node1 && !node2) || (!node1 && node2)) {
      result = false
    } else if (node1 && node2) {
      if (node1.val !== node2.val) {
        result = false
      }
      symmetric(node1.left, node2.right)
      symmetric(node1.right, node2.left)
    }
  }
  symmetric(node.left, node.right)
  return result
};
