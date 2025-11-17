interface IGreet {
  (a: number, b: number): number;
}

const greet: IGreet = (a, b) => {
  return a + b;
};
console.log(greet(23.6, 9));
