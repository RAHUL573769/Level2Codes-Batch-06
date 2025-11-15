class Parent3 {
  id: number;
  name: string;
  roll: number;
  constructor(idSent: number, nameSent: string, rollSent: number) {
    this.id = idSent;
    this.name = nameSent;
    this.roll = rollSent;
  }
}

class Student6 extends Parent3 {
  designation: string;
  constructor(
    idSent: number,
    nameSent: string,
    rollSent: number,
    designation1: string
  ) {
    super(idSent, nameSent, rollSent);
    this.designation = designation1;
  }
}

const rohan = new Student6(12, "Rahul", 3, "");
