class Shape {
  getArea(a?: number, b?: number): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return 3.1416 * this.radius * this.radius;
  }
}

const Circle1 = new Circle(3);
console.log(Circle1.getArea()); // 28.2744
