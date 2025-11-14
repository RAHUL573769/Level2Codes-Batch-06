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
class Student {
    constructor(name1, id, roll) {
        this.name = name1;
        this.id = id;
        this.roll = roll;
    }
}
