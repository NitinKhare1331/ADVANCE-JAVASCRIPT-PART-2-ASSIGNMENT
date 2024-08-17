// Base class
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle");
    }
}

function drawShape(shape) {
    shape.draw();
}

const shapes = [
    new Circle(),
    new Rectangle(),
    new Shape()
];

shapes.forEach(shape => drawShape(shape));
