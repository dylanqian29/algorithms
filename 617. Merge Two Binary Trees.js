/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// iterative
var mergeTrees = function (root1, root2) {
  if (!root1) {
    return root2;
  }

  if (!root2) {
    return root1;
  }

  let pairsQ = [];
  pairsQ.push([root1, root2]);

  while (pairsQ.length) {
    let next = pairsQ.pop();
    next[0].val = next[0].val + next[1].val;

    // work on the left
    if (next[0].left && next[1].left) {
      pairsQ.push([next[0].left, next[1].left]);
    } else if (!next[0].left) {
      next[0].left = next[1].left;
    } else if (!next[1].left) {
      next[0].left = next[0].left;
    }

    // work on the right
    if (next[0].right && next[1].right) {
      pairsQ.push([next[0].right, next[1].right]);
    } else if (!next[0].right) {
      next[0].right = next[1].right;
    } else if (!next[1].right) {
      next[0].right = next[0].right;
    }
  }
  return root1;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// recursive
var mergeTrees = function (root1, root2) {
  if (!root1) {
    return root2;
  }

  if (!root2) {
    return root1;
  }

  root1.val = root1.val + root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
};
