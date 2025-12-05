"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (a, b) => {
    return a + b;
};
// console.log(greet(23.6, 9));
// ------------------------------
function getFirstIndex(array) {
    return array[0];
}
let number = getFirstIndex([45, 78]);
let string = getFirstIndex(["Rahul"]);
console.log(string);
console.log(number);
// ------------------------------
function length1(value) {
    return value.length;
}
console.log(length1("efe"));
// -----------
function add(number1) {
    return number1.reduce((a, b) => a + b, 0);
}
console.log(add([1, 3, 4, 5]));
//# sourceMappingURL=GenericWithFunction.js.map