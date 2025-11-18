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

interface IFunction2 {
  (value1: string | any[] | undefined): number | undefined;
}

const getLength: IFunction2 = (value1) => {
  if (typeof value1 === "string") {
    const lengthString = value1.length;
    return lengthString;
  } else if (Array.isArray(value1)) {
    const lengthArray = value1.length;
    return lengthArray;
  } else {
    console.log("Invalid Output");
  }
};

// Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.

// Requirements:
// You must use a constructor to initialize the properties.
// The getDetails method should return a string in the format: "Name: [name], Age: [age]".
// Sample Input:
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());
// Sample Output:
// 'Name: John Doe, Age: 30';
// 'Name: Alice, Age: 25';

class Person {
  name: string;
  age: number;
  constructor(nameGiven: string, ageGiven: number) {
    this.name = nameGiven;
    this.age = ageGiven;
  }
  getDetails() {
    const formattedString = `Name: ${this.name}, Age: ${this.age}  `;
    return formattedString;
  }
}

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

// Problem 4:
// Create a function filterByRating that accepts an array of items, where each item has the following properties:

// title (string)
// rating (number between 0 and 5)
// The function should return a new array containing only the items with a rating of 4 or more.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Do not mutate the original array.
// Sample Input:
// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));
// Sample Output:
// [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book C', rating: 5.0 },
// ];

interface BooksArray {
  title: string;
  rating: number;
}

function filterByRating(items: BooksArray[]): BooksArray[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));

// Create a function filterActiveUsers that accepts an array of user objects. Each user object contains id, name, email, and isActive properties. The function should return a new array containing only the users whose isActive property is true.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Do not mutate the original array.
// Use type checking if necessary.
// Sample Input:
// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

interface Users {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
[];

interface IFunction3 {
  (usersArrayInput: Users[]): Users[];
}

const filterActiveUsers: IFunction3 = (usersArrayInput) => {
  return usersArrayInput.filter((user) => user.isActive);
};
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));

interface Book3 {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

interface IFunction4 {
  (book3: Book3): string | undefined;
}

const printBookDetails: IFunction4 = (book3) => {
  const isAvailable = book3.isAvailable ? "Yes" : "No";

  const message = `Title: ${book3.title}, Author: ${book3.author}, Published: ${book3.publishedYear}, Available: ${isAvailable}`;
  return message;
};

const bookExample: Book3 = {
  title: "Learn TS",
  author: "John Doe",
  publishedYear: 2023,
  isAvailable: true,
};

printBookDetails(bookExample);
