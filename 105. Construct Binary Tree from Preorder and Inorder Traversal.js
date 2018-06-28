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


//solutoin2 

// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// function restoreBinaryTree(inorder, preorder) {
//   if (inorder.length === 0 || preorder.length === 0 || preorder.length !== inorder.length) {
//     return null
//   }

//   let root
//   let preIndex = 0

//   function buildingTree(inorder, preorder, startIndex, endIndex) {

//     if (startIndex > endIndex) {
//       return null
//     }

//     var root = new Tree(preorder[preIndex])

//     if (preIndex > preorder.length - 1) {
//       return
//     }


//     var inIndex = inorder.indexOf(preorder[preIndex])
//     preIndex += 1

//     if (startIndex === endIndex) {
//       return root
//     }
//     console.log(inIndex)
//     root.left = buildingTree(inorder, preorder, startIndex, inIndex - 1)
//     root.right = buildingTree(inorder, preorder, inIndex + 1, endIndex)

//     return root
//   }

//   let final = buildingTree(inorder, preorder, 0, inorder.length - 1)
//   return final

// }


// inorder = [4, 2, 1, 5, 3, 6]
// preorder = [1, 2, 4, 3, 5, 6]

// restoreBinaryTree(inorder, preorder)