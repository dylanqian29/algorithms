/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
  let height = getHeight(root);
  let width = Math.pow(2, height) - 1;
  let results = [];

  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push("");
    }
    results.push(row);
  }
  fill(root, results, 0, 0, width);
  return results;
};

const fill = (root, matrix, height, left, right) => {
  if (!root) return;
  let middle = Math.floor((left + right) / 2);
  matrix[height][middle] = root.val.toString();
  fill(root.left, matrix, height + 1, left, middle - 1);
  fill(root.right, matrix, height + 1, middle + 1, right);
};

const getHeight = (root) => {
  if (!root) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};
