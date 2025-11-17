{
  class Animal {
    name: string;
    age: number;

    constructor(name1: string, age1: number) {
      this.name = name1;
      this.age = age1;
    }

    // Parent method (to be overridden)
    makeSound(): string {
      return "This animal makes a sound.";
    }
  }

  class Dog extends Animal {
    sound: string;

    constructor(name1: string, age1: number, sound: string) {
      super(name1, age1);
      this.sound = sound;
    }

    // Overriding parent method → polymorphism
    makeSound(): string {
      return `${this.name} says ${this.sound}`;
    }
  }

  // Example usage
  const animal1 = new Animal("Generic Animal", 5);
  console.log(animal1.makeSound()); // Parent version

  const dog1 = new Dog("Tommy", 4, "Woof!");
  console.log(dog1.makeSound()); // Dog version (overridden)
}
