const counter = (amount) => {
  let count = 0;
  count = count + amount;
  return count;
};

console.log(counter(3));
console.log(counter(5));

//Functions are  stateless
const counterObject = {
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },
  print() {
    console.log(this.count);
  },
};

counterObject.add(2);
counterObject.add(5);

counterObject.print();
