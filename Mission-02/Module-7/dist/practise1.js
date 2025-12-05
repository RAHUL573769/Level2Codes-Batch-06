"use strict";
class Parent3 {
    constructor(idSent, nameSent, rollSent) {
        this.id = idSent;
        this.name = nameSent;
        this.roll = rollSent;
    }
}
class Student6 extends Parent3 {
    constructor(idSent, nameSent, rollSent, designation1) {
        super(idSent, nameSent, rollSent);
        this.designation = designation1;
    }
}
const rohan = new Student6(12, "Rahul", 3, "");
