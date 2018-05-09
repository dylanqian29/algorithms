var l1 = {
  val:1,
  next: {
    val:2,
    next: {
      val:4,
      next: null
    }
  }
}

var l2 = {
  val:1,
  next: {
    val:3,
    next: {
      val:4,
      next: null
    }
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//iterative approach
var mergeTwoLists = function (l1, l2) {

  var cn1 = l1;
  var cn2 = l2;
  var newNode;
  var currentNewNode;


  if (!cn1) {
    return cn2
  } else if (!cn2) {
    return cn1
  }


  if (cn1.val < cn2.val) {
    newNode = cn1
    currentNewNode = newNode
    cn1 = cn1.next
  } else {
    newNode = cn2
    currentNewNode = newNode
    cn2 = cn2.next
  }

  while (cn1 && cn2) {
    if (cn1.val < cn2.val) {
      currentNewNode.next = cn1
      currentNewNode = currentNewNode.next
      cn1 = cn1.next
    } else {
      currentNewNode.next = cn2
      currentNewNode = currentNewNode.next
      cn2 = cn2.next
    }


  }

  if (cn1) {
    currentNewNode.next = cn1
  } else if (cn2) {
    currentNewNode.next = cn2
  }

  return newNode
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
mergeTwoLists(l1,l2)