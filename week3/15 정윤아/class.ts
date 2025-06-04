class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    move(distance:number):void{
        console.log(`${this.name}이 ${distance}m 움직였습니다.`);
    }
}

class Dog extends Animal{
    bark():void{console.log("Woof!");}
}

let 배추 = new Dog("배추");
배추.move(10);
배추.bark();

