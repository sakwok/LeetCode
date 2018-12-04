var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  let pointer = dummy;
  
  while (l1 !== null || l2 !== null) {
      if(l1 && (l2 === null || l1.val < l2.val)) {
          pointer.next = l1;
          l1 = l1.next;
          pointer = pointer.next;
      } else {
          pointer.next = l2;
          l2 = l2.next;
          pointer = pointer.next;
      }
  }
  return dummy.next;
};