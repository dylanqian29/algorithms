/**
 * Definition for singly-linked list.

/**
 * @param {ListNode} head
 * @return {ListNode}
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var sortList = function (head) {
  if (head === null) {
    return head
  }

  if (head.next === null) {
    return head
  }

  let left = head
  let middle = getMiddle(left)
  // console.log(middle)
  let right = middle.next
  middle.next = null

  let sortedLeft = sortList(left)
  let sortedRight = sortList(right)

  return merge(sortedLeft, sortedRight)
};

const getMiddle = (list) => {
  let fast = list
  let slow = list

  if (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}


const merge = (left, right) => {
  let dummy = new ListNode(null)
  let d = dummy
  let l = left
  let r = right

  while (l && r) {
    if (l.val < r.val) {
      d.next = l
      l = l.next
    } else {
      d.next = r
      r = r.next
    }
    d = d.next
  }
  if (l) {
    d.next = l
  }

  if (r) {
    d.next = r
  }

  return dummy.next
}


// let node1 = new ListNode(2)
// let node2 = new ListNode(1)
// node2.next = new ListNode(3)

// merge(node1,node2)


let node = new ListNode(4)
node.next = new ListNode(2)
node.next.next = new ListNode(1)
node.next.next.next = new ListNode(3)
sortList(node)