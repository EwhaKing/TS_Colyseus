// **3️⃣ 클래스 실습 – `3-class.ts`**
// - `Animal` 클래스를 정의한다.
//     속성: `name`: string
//     메서드: `move(distance: number)` → `console.log`로 이동 거리 출력
// - `Dog` 클래스를 `Animal`에서 상속받아
//     `bark()` 메서드(`console.log("Woof!")`)를 추가한다.
// - `Dog` 인스턴스를 만들어 `bark()`와 `move()`를 호출해본다.



class Animal {
    name: string;

    constructor(message: string) {
        this.name = message;
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}


const dog = new Dog("jina");
dog.bark();
dog.move(15);
dog.bark();
