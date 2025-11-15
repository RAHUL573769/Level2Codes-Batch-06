"use strict";
class Person {
    constructor(name1) {
        this.name = name1;
    }
}
class Student7 extends Person {
    constructor(name1, designation1) {
        super(name1);
        this.designation = designation1;
    }
    doStudy(numberOfHours) {
        console.log(`${this.name} studies ${numberOfHours}`);
    }
}
const troy = new Student7("Rahul", "Student");
troy.doStudy(8);
//function guard
const isStudent = (user) => {
    return user instanceof Student7; //true
};
//function guard
const getInfo = (person) => {
    //   if (person instanceof Student7) {
    //     person.doStudy(3);
    //   }
    if (isStudent(person)) {
        person.doStudy(3);
    }
};
const student = new Student7("t", "Student");
console.log(getInfo(student));
