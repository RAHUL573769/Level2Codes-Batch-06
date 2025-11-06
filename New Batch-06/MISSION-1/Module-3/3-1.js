let count1 = 5;

const count = (amount) => {
  const countNumber = count1 + amount;
  return countNumber;
};

console.log(count(5));
console.log(count(8));
console.log("--------------------------------------------------------");
const createCounter = () => {
  let count = 0;
  return (amount) => {
    count = count + amount;
    return count;
  };
};

const count2 = createCounter();
console.log(count2(3));
console.log("--------------------------------------------------------");

class Counter {
  constructor(count) {
    this.count = count;
  }
  amount(amount) {
    this.count = this.count + this.amount;
  }

  print() {
    console.log(this.count);
  }
}
const counter1 = new Counter(10);
console.log(counter1.print());

console.log(counter1.amount(23));
