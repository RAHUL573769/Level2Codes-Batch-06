"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    constructor(name1, age1) {
        this.name = name1;
        this.age = age1;
    }
}
class Dog extends Animal {
    sound;
    constructor(name1, age1, sound1) {
        super(name1, age1); // calling parent constructor
        this.sound = sound1;
    }
    makeSound() {
        return `${this.name} says ${this.sound}`;
    }
}
const dog1 = new Dog("Tommy", 4, "Woof!");
console.log(dog1.makeSound());
//# sourceMappingURL=Inheritence.js.map