class Animal {
  name1: string;
  species: string;
  sound: string;
  constructor(name12: string, species12: string, sound12: string) {
    this.name1 = name12;
    this.sound = sound12;
    this.species = species12;
  }
  makeSound() {
    console.log(`${this.name1}is`);
  }
}

const cat = new Animal("Rah", "", "");

console.log(cat.makeSound());

class Animal1 {
  //   name1: string;
  //   species: string;
  //   sound: string;
  constructor(
    public name12: string,
    public species12: string,
    public sound12: string
  ) {
    // this.name1 = name12;
    // this.sound = sound12;
    // this.species = species12;
  }
  makeSound() {
    console.log(`${this.name12}is`);
  }
}

const cat1 = new Animal("Rah", "", "");

console.log(cat1.makeSound());

// -----------------Inheritence--

class Student {
  name: string;
  id: number;
  roll: number;
  constructor(name1: string, id: number, roll: number) {
    this.name = name1;
    this.id = id;
    this.roll = roll;
  }
}
