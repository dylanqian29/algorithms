/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else {
    if (!root.left || !root.right) {
      root = root.left ? root.left : root.right
    } else {
      let currentNode = root.left
      while (currentNode.right) {
        currentNode = currentNode.right
      }
      root.val = currentNode.val
      root.left = deleteNode(root.left, currentNode.val)
    }
  }
  return root;

};