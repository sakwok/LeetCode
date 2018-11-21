var removeNthFromEnd = function(head, n) {
  let start = n + 1;
  let dummy = new ListNode(0);
  dummy.next = head;
  let pointer1 = dummy;
  let pointer2 = dummy;
  
  for (let i = 0; i < start; i++) {
      pointer1 = pointer1.next;
  }
  
  while (pointer1 !== null) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
  }
  
  pointer2.next = pointer2.next.next;
  
  return dummy.next;
};
