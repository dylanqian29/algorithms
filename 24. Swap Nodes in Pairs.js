var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let dummy = new ListNode(null);
  dummy.next = head;
  let l1 = dummy;
  let l2 = head;

  while (l1.next !== null && l2.next !== null) {
    temp = l2.next.next;
    l1.next = l2.next;
    l1.next.next = l2;
    l1.next.next.next = temp;
    l1 = l2;
    l2 = l2.next;
  }
  return dummy.next;
};
