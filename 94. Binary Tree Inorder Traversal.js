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
var inorderTraversal = function (root) {
  if (!root) return [];
  const result = [];

  const getInorderResult = (root) => {
    if (root.left) getInorderResult(root.left);
    result.push(root.val);
    if (root.right) getInorderResult(root.right);
  };

  getInorderResult(root);
  return result;
};

// iteration with stack
var inorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [];
  let next = root;

  while (next || stack.length) {
    while (next) {
      if (next) stack.push(next);
      next = next.left;
    }
    next = stack.pop();
    result.push(next.val);
    next = next.right;
  }

  return result;
};
