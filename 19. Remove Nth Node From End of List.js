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