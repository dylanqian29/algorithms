/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (t1, t2) {
  let stack = [t1];
  let node;

  while (stack.length > 0) {
    node = stack.pop();
    if (isSameTree(node, t2)) {
      return true;
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }
  return false;
};

var isSameTree = function (t1, t2) {
  if (!t1 && !t2) {
    return true;
  }
  if (!t1 || !t2 || t1.val !== t2.val) {
    return false;
  }

  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
};
