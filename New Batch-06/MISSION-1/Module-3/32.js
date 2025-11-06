let count = 0;

const counter = (amount) => {
  count = count + amount;
  return count;
};

console.log(counter(3));
console.log(counter(5));
// -----------------------------Bad Practise---

const counterFunction = () => {
  let count = 0;

  return (amount) => {
    count = count + amount;
    return count;
  };
};

const counter1 = counterFunction();

console.log(counter1(3));
//-------------The above  code is JS Specific---------------------------

class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log("From  Class Counter", this.count);
  }
}

const counter2 = new Counter(2);
counter2.add(12);

// console.log(counter2.print());
counter2.print();
