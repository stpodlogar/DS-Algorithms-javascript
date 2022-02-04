// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextTemp = null;
    
    while (curr != null) {
        nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    return prev;
};