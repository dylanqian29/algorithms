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
var addTwoNumbers = function (a, b) {
  let results = new ListNode(null);
  let currentNode = results;

  a = reverse(a);
  b = reverse(b);
  let sum = 0;
  let residual;

  while (a && b) {
    residual = (a.val + b.val + sum) % 10;
    currentNode.next = new ListNode(residual);
    sum = (a.val + b.val + sum - residual) / 10;

    a = a.next;
    b = b.next;
    currentNode = currentNode.next;
  }

  while (a) {
    residual = (a.val + sum) % 10;
    currentNode.next = new ListNode(residual);
    sum = (a.val + sum - residual) / 10;
    a = a.next;
    currentNode = currentNode.next;
  }

  while (b) {
    residual = (b.val + sum) % 10;
    currentNode.next = new ListNode(residual);
    sum = (b.val + sum - residual) / 10;
    b = b.next;
    currentNode = currentNode.next;
  }

  if (sum > 0) {
    currentNode.next = new ListNode(sum);
  }

  return reverse(results.next);
};

function reverse(l) {
  let currentNode = l;
  let newHead = null;
  let temp;

  while (currentNode) {
    temp = currentNode.next;
    currentNode.next = newHead;
    newHead = currentNode;
    currentNode = temp;
  }
  return newHead;
}
