"use strict";
class Shape {
    getArea(a, b) {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return 3.1416 * this.radius * this.radius;
    }
}
const Circle1 = new Circle(3);
console.log(Circle1.getArea()); // 28.2744
