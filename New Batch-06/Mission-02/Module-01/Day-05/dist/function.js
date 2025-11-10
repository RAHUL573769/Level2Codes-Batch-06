"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
const add3 = function (name1, num3) {
    return `Hi My Name is ${name1} age is ${num3}`;
};
console.log(add3("Raoul", 45));
const dogProperties = {
    name: "Fluffy",
    age: 24,
    dogProperties(weight, years, time) {
        const name = `${this.name} whose age is ${this.age} is ${weight} kg and is ${years}  ${time} old`;
        return name;
    },
};
console.log(dogProperties.dogProperties(25, 35, "Rahll"));
