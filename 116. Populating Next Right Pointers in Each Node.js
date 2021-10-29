/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }

  let q = [root];
  let nextQ = [];

  while (q.length) {
    for (let i = 0; i < q.length; i++) {
      if (q[i + 1]) {
        q[i].next = q[i + 1];
      }

      if (q[i].left) {
        nextQ.push(q[i].left);
      }

      if (q[i].right) {
        nextQ.push(q[i].right);
      }
    }

    q = nextQ;
    nextQ = [];
  }

  return root;
};
