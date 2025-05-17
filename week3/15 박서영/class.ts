class Animal {
    name: string

    constructor (name: string){
        this.name = name;
    }

    move (distance: number){
        console.log(`${this.name}이/가 ${distance}m만큼 이동합니다.`);
    }
}

class Dog extends Animal{
    bark(){
        console.log("Woof!");
    }
}

let dog = new Dog("바둑이");
dog.bark();
dog.move(30);