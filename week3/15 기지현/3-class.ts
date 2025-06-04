class Animal{
  name : string;

  move(distance: number){
   console.log('이동 거리는 ' + distance); 
  }
}

class Dog extends Animal {
  bark(){
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);