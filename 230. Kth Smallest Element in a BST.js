
// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */


var kthSmallest = function (root, k) {
    var counter = 0;
    let allValues = [];
    let getAllValues = function (node) {
        allValues.push(node.val)
        if (node.left) {
            getAllValues(node.left)
        }
        if (node.right) {
            getAllValues(node.right)
        }
    }
    getAllValues(root)
    allValues.filter(item => item !== null)
    let valueArray = allValues.sort(function (a, b) {
        return a - b;
    })
    return valueArray[k - 1]
};

// Example
// root = {
//     value: 1,
//     left: {
//         value: 0,
//         left: null,
//     },
//     right: {
//         value: 2,
//         left: null,
//     }
// }


//O(1) Space 

// var kthSmallest = function (root, k) {
//     let counter = 1;
//     let getAllValues = function (node) {
//         if (node.left !== null) {
//             counter++
//         }
//         if (node.right !== null) {
//             counter++
//         }
//     }
//     if (root.left) {
//         getAllValues(root.left)
//         if (k === counter + 1) {
//             return root.val
//         } else if (k < counter + 1) {
//             kthSmallest(root.left, k)
//         } else if (k > counter + 1) {
//             kthSmallest(root.right, k - counter - 1)
//         }
//     } else if (root.right) {
//         if (k === 1) {
//             return root.val
//         } else {
//             kthSmallest(root.right, k - 1)
//         }
//     } else {
//         console.log(root.val)
//         return root.val
//     }
// };


var kthSmallest = function (root, k) {
    let counter = 1;
    let getNumberOnLeft = function (node) {
        if (node.left !== null) {
            counter++
        }
        if (node.right !== null) {
            counter++
        }
    }
    let found = false
    node = root
    while (!found) {
        let leftNumber = getNumberOnLeft(node)
        if (k === leftNumber + 1) {
            return root.val
            found = true
        } else if (k < leftNumber + 1) {
            node = node.left
        } else if (k > leftNumber + 1) {
            node = node.right
            k = k - leftNumber - 1
        }
    }
};

kthSmallest(root, 1)