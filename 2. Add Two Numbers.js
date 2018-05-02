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
var addTwoNumbers = function (l1, l2) {
  let list1 = []
  let list2 = []

  while (l1) {
    list1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    list2.push(l2.val)
    l2 = l2.next
  }


  var newlist1 = list1.slice()
  var newlist2 = list2.slice()


  if (list1.length < list2.length) {
    for (var i = 0; i < (list2.length - list1.length); i++) {
      newlist1.push(0)
    }
  } else {
    for (var i = 0; i < (list1.length - list2.length); i++) {
      newlist2.push(0)
    }
  }

  list1 = newlist1
  list2 = newlist2


  let results = []

  for (let i = 0; i < list1.length; i++) {
    results.push(list1[i] + list2[i])

  }

  for (let i = 0; i < results.length; i++) {
    if (results[i] >= 10) {
      results[i] = results[i] - 10
      if (results[i + 1] !== undefined) {
        results[i + 1] = results[i + 1] + 1
      } else {
        results.push(1)
      }
    }
  }


  let llresults = new ListNode(results[0]);
  let currentNode = llresults;
  let j = 1;
  while (j < results.length) {
    let number = results[j];
    currentNode.next = new ListNode(number)
    currentNode = currentNode.next
    j++
  }

  return llresults
};