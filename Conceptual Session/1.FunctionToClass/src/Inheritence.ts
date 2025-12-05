class Animal {
  name: string;
  age: number;

  constructor(name1: string, age1: number) {
    this.name = name1;
    this.age = age1;
  }
}

class Dog extends Animal {
  sound: string;

  constructor(name1: string, age1: number, sound1: string) {
    super(name1, age1); // calling parent constructor
    this.sound = sound1;
  }

  makeSound() {
    return `${this.name} says ${this.sound}`;
  }
}

const dog1 = new Dog("Tommy", 4, "Woof!");
console.log(dog1.makeSound());
