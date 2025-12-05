class Stack {
  constructor() {
    this.item = [];
  }

  push(value) {
    this.item.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item.pop(); // removes and returns the top element
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[this.item.length - 1];
  }

  isEmpty() {
    return this.item.length === 0;
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.slice().reverse().join("->"));
  }
}

const stack = new Stack();
stack.push(303);

stack.size();
console.log(stack.peek());

stack.print();
