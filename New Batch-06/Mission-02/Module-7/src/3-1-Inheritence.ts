class Parent23 {
  name: string;
  id: number;
  roll: number;

  constructor(name1: string, id: number, roll: number) {
    this.name = name1;
    this.id = id;
    this.roll = roll;
  }

  classHours(hours: number) {
    console.log("Output", `${hours}`);
  }
}
class Student23 extends Parent23 {
  age: number;
  constructor(name10: string, id1: number, roll10: number, age2: number) {
    super(name10, id1, roll10);
    this.age = age2;
  }
}
const student19 = new Student23("Rahim", 101, 12, 20);

console.log(student19.classHours(12));
