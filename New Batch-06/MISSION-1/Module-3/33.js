class Stack {
  constructor() {
    this.item = [];
  }

  push(value) {
    this.item.push(value);
  }
  pop() {
    if (this.isEmpty) {
      return undefined;
    }
  }

  isEmpty() {
    return this.item.length === 0;
  }
}
