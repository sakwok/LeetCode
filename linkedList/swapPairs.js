var swapPairs = function (head) {
  let swap = true;
  let prevValue;
  let pointer = head;

  const helper = () => {
    if (!pointer) {
      return;
    }
    if (pointer.next && swap) {
      prevValue = pointer.next.val;
      pointer.next.val = pointer.val;
      pointer.val = prevValue;
    }
    pointer = pointer.next;
    swap = !swap;
    helper(pointer);
  }
  helper();
  return head;
};