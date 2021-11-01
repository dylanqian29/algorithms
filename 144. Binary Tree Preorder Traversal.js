/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// recursive
var preorderTraversal = function (root) {
  if (!root) return [];
  let result = [];

  const getPreorderResult = (root) => {
    result.push(root.val);
    if (root.left) getPreorderResult(root.left);
    if (root.right) getPreorderResult(root.right);
  };

  getPreorderResult(root);
  return result;
};

// use stack
var preorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  let stack = [root];
  let next;

  while (stack.length) {
    next = stack.pop();

    result.push(next.val);
    if (next.right) stack.push(next.right);
    if (next.left) stack.push(next.left);
  }

  return result;
};
