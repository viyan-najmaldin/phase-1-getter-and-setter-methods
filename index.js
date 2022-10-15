// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
  get area() {
    return Math.PI * (this.radius * this.radius);
  }
  set diameter(d) {
    this.radius = d / 2;
  }
  set circumference(c) {
    this.radius = c / (2 * Math.PI);
  }
  set area(a) {
    this.radius = Math.sqrt(a / Math.PI);
  }
}
const circle = new Circle(6);

console.log(circle.area);
console.log(circle.radius);
console.log(circle.circumference);
console.log(circle.diameter);
circle.diameter = 36;
console.log(circle.radius);
circle.circumference = 100;
console.log(circle.radius);
circle.area = 200;
console.log(circle.radius);
