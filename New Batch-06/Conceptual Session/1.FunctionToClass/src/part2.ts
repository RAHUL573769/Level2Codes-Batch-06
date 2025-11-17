class Animal {
  name: string;
  dob: string;
  sound: string;
  constructor(name1: string, dob: string, sound: string) {
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

const ageCalculation = (birthYear: number) => {
  return new Date().getFullYear() - birthYear;
};

console.log(ageCalculation(2001));
