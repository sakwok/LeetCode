class Stack {
  constructor() {

    // Initialize an empty array
    this.items = [];
  }

  // Push a new item to the last index
  push(item) {
    this.items.push(item);
  }

  // Remove the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // See what the last item is
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

class MaxStack extends Stack {

  constructor() {
    super();
    this.max = [];
  }

  push(item) {
    this.items.push(item);

    if (this.max.length === 0 || this.max[this.max.length - 1] <= item) {
      this.max.push(item);
    }
  }

  pop() {
    if (!this.items.length) {
      return null;
    }

    let popped = this.items.pop();

    if (popped === this.max[this.max.length - 1]) {
      this.max.pop();
    }

    return popped;
  }

  getMax() {
    return this.max[this.max.length - 1];
  }
}
