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
var hasCycle = function (head) {
  if (head === null) {
    return false;
  }
  let fast = head.next;
  let slow = head;

  while (fast !== slow) {
    if (fast === null || fast.next === null || fast.next.next === null) {
      return false;
    }

    fast = fast.next.next;
    slow = slow.next;
  }

  return true;
};
