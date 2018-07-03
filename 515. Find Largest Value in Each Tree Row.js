/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (t) {

  if (!t) {
    return []
  }

  let queue = [t]
  let result = []
  let temp;
  let node;
  let len;


  while (queue.length > 0) {
    temp = queue[0].val
    len = queue.length

    for (let i = 0; i < len; i++) {
      node = queue[i]
      temp = Math.max(temp, node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(temp)
    for (let i = 0; i < len; i++) {
      queue.shift()
    }
  }
  return result
}