/**
 * Definition for singly-linked list.
 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let head1 = l1;
  let head2 = l2;
  const result = new ListNode(null);
  let remainder = 0;
  let pointer = result;
  while (head1 || head2) {
      if (head1 && head2) {
          let sum = head1.val + head2.val + 1*remainder;
          remainder = 0;
          if (sum >= 10) {
              sum = sum % 10;
              remainder = 1;
          }
          pointer.next = new ListNode(sum);
      } else {
          if (head1) {
              pointer.next = head1;
              if (remainder) {
                  pointer.next.val += 1;
                  remainder = 0;
                  if (pointer.next.val >= 10) {
                      pointer.next.val = pointer.next.val % 10;
                      remainder = 1;
                  }
              }
          }
          if (head2) {
              pointer.next = head2;
              if (remainder) {
                  pointer.next.val += 1;
                  remainder = 0;
                  if (pointer.next.val >= 10) {
                      pointer.next.val = pointer.next.val % 10;
                      remainder = 1;
                  }
              }
          }
      }
      if (head1) {
          head1 = head1.next;    
      }
      if (head2 ) {
          head2 = head2.next;
      }
      
      pointer = pointer.next;
      if (!(head1 || head2) && remainder) {
          pointer.next = new ListNode(1) 
      }
  }
  return result.next;
};
