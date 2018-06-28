/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


var buildTree = function (preorder, inorder) {
  if (inorder.length === 0 || preorder.length === 0 || preorder.length !== inorder.length) {
    return null
  }
  let map = new Map()
  let len = inorder.length
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  return buildingTree(inorder, 0, len - 1, preorder, 0, len - 1, map)

}


function buildingTree(inorder, inL, inR, preorder, preL, preR, map) {

  var root, index

  if (inL > inR || preL > preR) {
    return null
  }
  root = new TreeNode(preorder[preL])

  index = map.get(root.val)

  root.left = buildingTree(inorder, inL, index - 1, preorder, preL + 1, index - inL + preL, map)
  root.right = buildingTree(inorder, index + 1, inR, preorder, index - inL + preL + 1, preR, map)

  return root
}