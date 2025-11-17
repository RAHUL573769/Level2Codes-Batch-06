interface IGreet {
  (a: number, b: number): number;
}

const greet: IGreet = (a, b) => {
  return a + b;
};

// console.log(greet(23.6, 9));
// ------------------------------

function getFirstIndex<T>(array: T[]): T | undefined {
  return array[0];
}

let number = getFirstIndex<number>([45, 78]);

let string = getFirstIndex<string>(["Rahul"]);
console.log(string);
console.log(number);
// ------------------------------

function length1<T extends { length: number }>(value: T) {
  return value.length;
}
console.log(length1("efe"));

// -----------

function add(number1: number[]): number | undefined {
  return number1.reduce((a, b) => a + b, 0);
}
console.log(add([1, 3, 4, 5]));
