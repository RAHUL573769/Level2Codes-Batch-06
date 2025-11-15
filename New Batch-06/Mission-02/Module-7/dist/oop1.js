"use strict";
class Animal {
    constructor(name12, species12, sound12) {
        this.name1 = name12;
        this.sound = sound12;
        this.species = species12;
    }
    makeSound() {
        console.log(`${this.name1}is`);
    }
}
const cat = new Animal("Rah", "", "");
console.log(cat.makeSound());
class Animal1 {
    //   name1: string;
    //   species: string;
    //   sound: string;
    constructor(name12, species12, sound12) {
        this.name12 = name12;
        this.species12 = species12;
        this.sound12 = sound12;
        // this.name1 = name12;
        // this.sound = sound12;
        // this.species = species12;
    }
    makeSound() {
        console.log(`${this.name12}is`);
    }
}
const cat1 = new Animal("Rah", "", "");
console.log(cat1.makeSound());
// -----------------Inheritence--
class Parent {
    constructor(name1, id, roll) {
        this.name = name1;
        this.id = id;
        this.roll = roll;
    }
    classHours(hours) { }
}
class Student extends Parent {
    constructor(name1, id, roll) {
        super(name1, id, roll);
        // this.name = name1;
        // this.id = id;
        // this.roll = roll;
    }
    classHours(hours) { }
}
const studen1 = new Student("ty", 13, 56);
console.log(studen1.id);
// --------------
class Parent1 {
    constructor(name1, id, roll) {
        this.name = name1;
        this.id = id;
        this.roll = roll;
    }
    classHours(hours) {
        console.log(`${this.name} attends class for ${hours} hours.`);
    }
}
class Student1 extends Parent1 {
    constructor(name1, id, roll) {
        super(name1, id, roll); // Calls Parent constructor
    }
    classHours(hours) {
        console.log(`Student ${this.name} studies for ${hours} hours.`);
    }
}
const student1 = new Student("Ty", 13, 56);
console.log(student1.id); // Output: 13
student1.classHours(3); // Example method call
// --------------------
class Parent2 {
    constructor(name1, id, roll) {
        this.name = name1;
        this.id = id;
        this.roll = roll;
    }
    classHours(hours) { }
}
class Student2 extends Parent2 {
    constructor(name1, id, roll, sleep) {
        super(name1, id, roll);
        this.sleep = sleep; // assign sleep
    }
    classHours(hours) { }
}
// Provide all 4 required arguments
const student13 = new Student2("ty", 13, 56, 8);
console.log(student1.id); // Output: 13
console.log(student13.sleep); // Output: 8
