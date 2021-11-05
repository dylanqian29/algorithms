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
var deleteDuplicates = function (head) {
  if (!head) return null;
  const dummy = new ListNode(0);
  dummy.next = head;
  let last = dummy;
  let current = head;

  while (current) {
    if (current.next && current.val === current.next.val) {
      while (current.next && current.val === current.next.val) {
        current = current.next;
      }
      last.next = current.next;
      current = current.next;
    } else {
      last = last.next;
      current = current.next;
    }
  }

  return dummy.next;
};
