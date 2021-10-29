/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return [];
  }
  while (head.val === val) {
    head = head.next;
    if (!head) {
      return [];
    }
  }
  if (!head) {
    return [];
  }
  let node = head;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return null;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  let pointer = dummy.next;
  let last = dummy;

  while (pointer) {
    if (pointer.val === val) {
      if (pointer.next) {
        pointer = pointer.next;
      } else {
        last.next = null;
        pointer = pointer.next;
      }
    } else {
      last.next = pointer;
      last = last.next;
      pointer = pointer.next;
    }
  }
  return dummy.next;
};
