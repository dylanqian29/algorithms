/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let gPrev = dummy;
  let kth, prev, curr, temp, gNext;

  while (true) {
    kth = getKthNode(gPrev, k);
    if (!kth) break;
    gNext = kth.next;
    prev = kth.next;
    curr = gPrev.next;

    // reverse in group linked list
    while (curr !== gNext) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    temp = gPrev.next;
    gPrev.next = kth;
    gPrev = temp;
  }

  return dummy.next;
};

const getKthNode = (head, k) => {
  let node = head;
  while (k > 0 && node) {
    node = node.next;
    k--;
  }
  return node;
};
