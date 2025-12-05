"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    dob;
    sound;
    constructor(name1, dob, sound) {
        this.dob = dob;
        this.name = name1;
        this.sound = sound;
    }
}
const dog = new Animal("ss", "dd", "dbd");
console.log(dog.dob);
// const ageCalculation = (age: number) => {
//   const age1 = Date.now() - new Date(age).getTime();
//   return Math.floor(age1 / (1000 * 60 * 60 * 24 * 366));
// };
// console.log(ageCalculation(24));
const ageCalculation = (birthYear) => {
    return new Date().getFullYear() - birthYear;
};
console.log(ageCalculation(2001));
//# sourceMappingURL=part2.js.map