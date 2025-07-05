
// 3. 클래스 실습
// `Animal` 클래스를 정의한다.
    
    //속성: `name`: string
    
    //메서드: `move(distance: number)` → `console.log`로 이동 거리 출력
    
// `Dog` 클래스를 `Animal`에서 상속받아
    
    //`bark()` 메서드(`console.log("Woof!")`)를 추가한다.
    
// `Dog` 인스턴스를 만들어 `bark()`와 `move()`를 호출해본다



//Animal 클래스 정의
class Animal {
    //instance 속성 선언
    name : string;

    //외부의 name 값을 this.name에 저장
    constructor(name : string) {
        this.name = name;
    }

    //move 메서드에 distance 매개변수
    move(distance : number = 0) { //default 0
        console.log(this.name + " moved " + distance + " miles.");
    }
}


//extends로 상속
class Dog extends Animal {
    //Dog만의 메서드 bark 추가
    bark() {
        console.log("Woof!");
    }
}

//Dog의 인스턴스 생성
const dog = new Dog("Nero");
//이때 this.name에 Nero 들어감

//호출
dog.bark();
dog.move();

/*
[LOG]: "Woof!" 
[LOG]: "Nero moved 0 miles." 
*/