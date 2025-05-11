class Animal{
    name: string;

    constructor(name:string){
        this.name = name;
    }

    move(distance: number){
        console.log(distance + "미터 만큼 이동.");
    }
};


class Dog extends Animal{
    bark(){
        console.log("Woof!");
    }
}


const pup = new Dog("pup");

pup.bark();
pup.move(30);