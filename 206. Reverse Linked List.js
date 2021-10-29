/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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
};
