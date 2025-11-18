interface IFunction {
  (a: string | number | boolean): string | number | boolean | undefined;
}
const formatValue: IFunction = (a) => {
  if (typeof a === "string") {
    const upperString = a.toUpperCase();
    return upperString;
  } else if (typeof a === "number") {
    const multipliedNumber = a * 10;
    return multipliedNumber;
  } else if (typeof a === "boolean") {
    const reversedNumber = !a;
    return reversedNumber;
  } else {
    console.log("The input number is not a string ,number or boolean");
  }
};

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
