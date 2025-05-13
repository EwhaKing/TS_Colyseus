interface Shape{
    getArea(): number;
}

class Rectangle implements Shape{
    width: number;
    height: number;

    constructor(width: number, height:number){
        this.width = width;
        this.height = height;
    }

    getArea(): number{
        return this.width*this.height;
    }
}

class Circle implements Shape {
    radius : number;

    constructor(radius: number){
        this.radius = radius;
    }
    getArea(): number {
        return this.radius*this.radius*3.14;
    }
}

let circle1 = new Circle(5);
let rect1 = new Rectangle(5,6);

console.log(`원의 반지름: ${circle1.radius}, 원의 면적: ${circle1.getArea()}`);
console.log(`사각형의 높이: ${rect1.height}, 사각형의 가로: ${rect1.width}, 사각형의 넓이: ${rect1.getArea()}`);