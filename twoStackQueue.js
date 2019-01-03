class Queue {
  constructor() {
    this.stack = [];
    this.queue = [];
  }

  enqueue(item) {
    this.stack.push(item);
  }

  dequeue() {
    if (this.queue.length === 0) {
      while (this.stack.length) {
        this.queue.push(this.stack.pop());
      }

      if (this.queue.length === 0) {
        throw new Error('Nothing in stack');
      }
    }
    return this.queue.pop();
  }
}