/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let counter =0;
    let found = false
    let currentNode = head
    while (!found){
      if(currentNode){
        counter++
        currentNode = currentNode.next
      } else {
        found = true
      }
    }
    if (counter< n){
      return []
    }

    let location = counter - n-1
    counter = 0
    currentNode = head
    if (location ===-1){
      head = head.next
    }
    
    
    while (counter <= location){
      if(counter< location){
        counter++
        currentNode = currentNode.next
      } else if (counter === location) {
        currentNode.next = currentNode.next.next
        counter++
      }
    }
  return head
};

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  let slow = dummy;
  let fast = dummy;
  
  while(n>0){
      fast = fast.next
      n--
  }
  console.log(fast)
  console.log(slow)

  while(fast && fast.next) {
      fast = fast.next
      slow = slow.next
  }
  
  slow.next = slow.next.next

  return dummy.next
};