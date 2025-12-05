"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    toppings;
    size;
    constructor(toppings1, size1) {
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
    brand;
    speed;
    constructor(brand1, speed) {
        this.brand = brand1;
        this.speed = speed;
    }
}
//# sourceMappingURL=part1.js.map