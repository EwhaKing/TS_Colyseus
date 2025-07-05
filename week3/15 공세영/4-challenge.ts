interface Shape{
    getArea():number
};


class Rect implements Shape{
    width: number;
    height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width*this.height;
    }
};

class Circle implements Shape{
    radius: number;

    constructor(radius: number){
        this.radius = radius;
    }

    getArea(){
        return 3.14*(this.radius^2)
    }
};

const rect = new Rect(10, 10);
const circle = new Circle(10);

console.log(rect.getArea());
console.log(circle.getArea());