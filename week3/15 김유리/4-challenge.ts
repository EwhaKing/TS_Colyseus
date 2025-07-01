
// 4. 인스턴스 -> 면적 출력
// `Shape` 인터페이스 정의 (`getArea(): number`)
// `Rectangle` 클래스(`width`, `height`)와 `Circle` 클래스(`radius`)에서 `Shape` 인터페이스를 `implements`한다.
// 각 클래스에서 `getArea()` 메서드를 구현한다.
// 사각형과 원 인스턴스를 만들어 면적을 출력한다.



//Shape 인터페이스 정의
interface Shape {
    //getArea() 메서드
    getArea() : number;
}

//Rectangle 클래스 정의; Shape 인터페이스를 implements 
class Rectangle implements Shape {
    width : number;
    height : number;

    //생성자는 weight와 height를 내부 속성으로 지정
    constructor(width : number, height : number) {
        this.width = width;
        this.height = height;
    }

    getArea() : number {
        //Rectangle의 Area 계산
        return this.width * this.height;
    }
}

class Circle implements Shape {
    radius : number;

    constructor(radius : number) {
        this.radius = radius;
    }
    
    getArea() : number {
        //PI 내장 상수 
        return this.radius * this.radius * Math.PI;
    }
}

//getArea 출력해주는 함수 
function printArea(obj : Shape) : void {
    //Shape 인터페이스가 타입; Rectangle, Cirlcle 모두 인자 가능 
    console.log("The area is " + obj.getArea());
}

//Rectangle과 Circle 클래스 인스턴스 생성 
const Rectangle1 : Shape = new Rectangle(4,5); //생성자 호출
printArea(Rectangle1);

const Circle1 : Shape = new Circle(3);
printArea(Circle1);


/*
[LOG]: "The area is 20" 
[LOG]: "The area is 28.274333882308138" 
*/