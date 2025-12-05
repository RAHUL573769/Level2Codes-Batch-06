"use strict";
class Parent23 {
    constructor(name1, id, roll) {
        this.name = name1;
        this.id = id;
        this.roll = roll;
    }
    classHours(hours) {
        console.log("Output", `${hours}`);
    }
}
class Student23 extends Parent23 {
    constructor(name10, id1, roll10, age2) {
        super(name10, id1, roll10);
        this.age = age2;
    }
}
const student19 = new Student23("Rahim", 101, 12, 20);
console.log(student19.classHours(12));
