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
var postorderTraversal = function (root) {
  if (!root) return [];
  let result = [];

  const getPostorderResult = (root) => {
    if (root.left) getPostorderResult(root.left);
    if (root.right) getPostorderResult(root.right);
    result.push(root.val);
  };

  getPostorderResult(root);
  return result;
};

//recursive
var postorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [];
  let current = root;
  let next;

  while (current || stack.length) {
    while (current) {
      if (current.right) stack.push(current.right);
      stack.push(current);
      current = current.left;
    }

    let node = stack.pop();

    if (node.right && node.right === stack[stack.length - 1]) {
      // switch right and node
      current = stack.pop();
      stack.push(node);
    } else {
      result.push(node.val);
      current = null;
    }
  }
  return result;
};
