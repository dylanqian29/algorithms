/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (l) {
  if (!l || !l.next) {
    return true;
  }

  let fast = l;
  let slow = l;
  // let mid
  //

  while (fast.next && slow.next) {
    fast = fast.next.next;
    if (!fast) {
      break;
    }
    slow = slow.next;
  }

  // mid = slow
  fast = l;
  slow = reverseList(slow.next);

  while (fast && slow) {
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }

  return true;
};

var reverseList = function (head) {
  let newHead = null;
  let currentHead = head;
  let temp;

  while (currentHead !== null) {
    temp = currentHead.next;
    currentHead.next = newHead;
    newHead = currentHead;
    currentHead = temp;
  }
  return newHead;
};
