var l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

var l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }
  let pointer = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      pointer.next = l1;
      l1 = l1.next;
      pointer = pointer.next;
    } else {
      pointer.next = l2;
      l2 = l2.next;
      pointer = pointer.next;
    }
  }

  if (l1) {
    pointer.next = l1;
  }

  if (l2) {
    pointer.next = l2;
  }

  return head;
};

// recursive approach
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
mergeTwoLists(l1, l2);
