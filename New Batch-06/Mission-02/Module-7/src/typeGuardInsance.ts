class Person {
  name: string;
  constructor(name1: string) {
    this.name = name1;
  }
}

class Student7 extends Person {
  designation: string;
  constructor(name1: string, designation1: string) {
    super(name1);
    this.designation = designation1;
  }
  doStudy(numberOfHours: number) {
    console.log(`${this.name} studies ${numberOfHours}`);
  }
}

const troy = new Student7("Rahul", "Student");

troy.doStudy(8);
//function guard
const isStudent = (user: Person) => {
  return user instanceof Student7; //true
};

//function guard
const getInfo = (person: Person) => {
  //   if (person instanceof Student7) {
  //     person.doStudy(3);
  //   }
  if (isStudent(person)) {
    person.doStudy(3);
  }
};
const student = new Student7("t", "Student");
console.log(getInfo(student));
