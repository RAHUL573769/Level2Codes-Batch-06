"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    class Animal {
        name;
        age;
        constructor(name1, age1) {
            this.name = name1;
            this.age = age1;
        }
        // Parent method (to be overridden)
        makeSound() {
            return "This animal makes a sound.";
        }
    }
    class Dog extends Animal {
        sound;
        constructor(name1, age1, sound) {
            super(name1, age1);
            this.sound = sound;
        }
        // Overriding parent method → polymorphism
        makeSound() {
            return `${this.name} says ${this.sound}`;
        }
    }
    // Example usage
    const animal1 = new Animal("Generic Animal", 5);
    console.log(animal1.makeSound()); // Parent version
    const dog1 = new Dog("Tommy", 4, "Woof!");
    console.log(dog1.makeSound()); // Dog version (overridden)
}
//# sourceMappingURL=polymorphisms.js.map