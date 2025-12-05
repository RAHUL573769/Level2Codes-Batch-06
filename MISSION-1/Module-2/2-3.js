// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

const numbers1 = [40, 100, 1, 5, 25, 10];
const fruits1 = ["Banana", "apple", "Cherry", "date"];

fruits1.sort((a, b) => a.localeCompare(b));
const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];

const flatArr = arr.flat(Infinity);
console.log(flatArr);
