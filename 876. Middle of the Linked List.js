/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 1;
  let linkList = head;

  while (linkList.next) {
    count++;
    linkList = linkList.next;
  }

  let mid = Math.floor(count / 2);

  let newLinkList = head;

  while (mid > 0) {
    mid--;
    newLinkList = newLinkList.next;
  }

  return newLinkList;
};

var middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
