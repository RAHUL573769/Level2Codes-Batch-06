"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (a) => {
    if (typeof a === "string") {
        const upperString = a.toUpperCase();
        return upperString;
    }
    else if (typeof a === "number") {
        const multipliedNumber = a * 10;
        return multipliedNumber;
    }
    else if (typeof a === "boolean") {
        const reversedNumber = !a;
        return reversedNumber;
    }
    else {
        console.log("The input number is not a string ,number or boolean");
    }
};
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
const getLength = (value1) => {
    if (typeof value1 === "string") {
        const lengthString = value1.length;
        return lengthString;
    }
    else if (Array.isArray(value1)) {
        const lengthArray = value1.length;
        return lengthArray;
    }
    else {
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
    name;
    age;
    constructor(nameGiven, ageGiven) {
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
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
[];
const filterActiveUsers = (usersArrayInput) => {
    return usersArrayInput.filter((user) => user.isActive);
};
const users = [
    { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
    { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
    { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
console.log(filterActiveUsers(users));
const printBookDetails = (book3) => {
    const isAvailable = book3.isAvailable ? "Yes" : "No";
    const message = `Title: ${book3.title}, Author: ${book3.author}, Published: ${book3.publishedYear}, Available: ${isAvailable}`;
    return message;
};
const bookExample = {
    title: "Learn TS",
    author: "John Doe",
    publishedYear: 2023,
    isAvailable: true,
};
printBookDetails(bookExample);
function calculateTotalPrice(products) {
    if (products.length === 0) {
        return 0;
    }
    else {
        const value = products
            .map((product) => {
            const total = product.price * product.quantity;
            if (product.discount) {
                const discountAmount = (total * product.discount) / 100;
                return total - discountAmount;
            }
            return total;
        })
            .reduce((sum, value) => sum + value, 0);
        return value;
    }
}
const products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
console.log(calculateTotalPrice(products));
//# sourceMappingURL=solution.js.map