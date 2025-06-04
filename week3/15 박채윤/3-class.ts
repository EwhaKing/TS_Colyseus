
// 3. 클래스 실습

class Animal {
    name : string;
    constructor(name : string) {
        this.name = name;
    }

    move(distance : number = 0) {
        console.log(this.name + " moved " + distance + " miles.");
    }
}


class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

const dog = new Dog("Nero");

dog.bark();
dog.move();
