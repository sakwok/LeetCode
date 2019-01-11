class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


var MedianFinder = function () {
  this.sortedNums = new LinkedList();
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function (num) {
  const { sortedNums } = this;
  if (!sortedNums.head) {
    const firstNode = new Node(num);
    sortedNums.head = firstNode;
    sortedNums.tail = firstNode;
    sortedNums.size += 1;
  } else if (num >= sortedNums.tail.val) {
    const lastNode = new Node(num);
    sortedNums.tail.next = lastNode;
    sortedNums.tail = sortedNums.tail.next;
    sortedNums.size += 1;
  } else {
    const dummyHead = new Node(0);
    let current = dummyHead;
    current.next = sortedNums.head;

    while (current) {
      if (num > current.val && num <= current.next.val) {
        const mid = new Node(num);
        mid.next = current.next;
        current.next = mid;
        this.sortedNums = dummyHead.next;
        sortedNums.size += 1;
        return;
      }
      current = current.next;
    }
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function () {
  const { sortedNums } = this;
  const { size } = sortedNums;

  const center = Math.floor(size / 2);
  let start = 0;
  let current = sortedNums.head;
  //odd
  if (size % 2 === 1) {
    while (start < center) {
      current = current.next;
      start += 1;
    }
    return current.val;
  } else {
    let val1;
    let val2;
    while (start < center) {
      if (start === center - 1) {
        val1 = current.val;
      }
      current = current.next;
      start += 1;
    }
    val2 = current.val;
    return (val1 + val2) / 2;
  }
};