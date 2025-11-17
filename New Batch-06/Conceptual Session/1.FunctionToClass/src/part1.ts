class Pizza {
  toppings: string;
  size: number;

  constructor(toppings1: string, size1: number) {
    this.size = size1;
    this.toppings = toppings1;
  }
  serve() {
    const servePizza = `The Pizza Size is ${this.size}`;
    return servePizza;
  }
}

const chheze = new Pizza("Cheeze Pizza", 5);
console.log(chheze.serve());

class Car {
  brand: string;
  speed: number;
  constructor(brand1: string, speed: number) {
    this.brand = brand1;
    this.speed = speed;
  }
}
