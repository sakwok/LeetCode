// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function addTwoHugeNumbers(a, b) {
  const findInt = (list) => {
    let num = 0;
    while (list) {
      let checkZero = list.value
      let count = 0;
      while (checkZero < 1000) {
        checkZero *= 10;
        num *= 10;
        count += 1;
      }
      num *= Math.pow(10, 4 - count);
      num += list.value;
      list = list.next;
    }
    return num;
  };

  let total = findInt(a) + findInt(b);

  let prev = null;

  let currVal = new ListNode(0);

  while (total > 0) {
    const piece = total % 10000;

    currVal = new ListNode(piece);

    currVal.next = prev;

    prev = currVal;

    total = Math.floor(total / 10000);
  }

  return currVal;
}