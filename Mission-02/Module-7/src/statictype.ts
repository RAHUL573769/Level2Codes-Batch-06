class Counter {
  static count: number = 0;
  increment() {
    // return (this.count = this.count + 1);
    return (Counter.count = Counter.count + 1);
  }

  decrement() {
    // return (this.count = this.count - 1);
  }
}

const instance1 = new Counter(); //ekta memory
console.log(instance1.increment());

console.log(instance1.increment());

console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());

const instance2 = new Counter(); //ar ekta memory
console.log(instance2.increment());

console.log(instance2.increment());

console.log(instance2.increment());
console.log(instance2.increment());
console.log(instance2.increment());
