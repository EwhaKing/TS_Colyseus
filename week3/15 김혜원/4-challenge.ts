// **4️⃣ 심화 도전 (선택 과제) – `4-challenge.ts`**

// - `Shape` 인터페이스 정의 (`getArea(): number`)
// - `Rectangle` 클래스(`width`, `height`)와 `Circle` 클래스(`radius`)에서 `Shape` 인터페이스를 `implements`한다.
// - 각 클래스에서 `getArea()` 메서드를 구현한다.
// - 사각형과 원 인스턴스를 만들어 면적을 출력한다.



interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(num1: number, num2: number){
        this.width = num1;
        this.height = num2;
    }

    getArea(): number {
        // console.log(`Area is ${this.width*this.height}`)
        return (this.height * this.width);
    }
}

class Circle implements Shape {
    radius: number;

    constructor(num1: number){
        this.radius = num1;
    }

    getArea(): number {
        return (this.radius * this.radius);
    }
}



const rectangle = new Rectangle(2, 5);
console.log(rectangle.getArea());

const circle = new Circle(5);
console.log(circle.getArea());
