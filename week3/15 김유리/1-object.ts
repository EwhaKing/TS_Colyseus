
// 1. 객체 실습
// `Person` 객체를 선언하고, 이름(`name`: string), 나이(`age`: number), 이메일(`email`: string, 선택적)을 속성으로 가진다.
// 콘솔에 이름과 나이를 출력한다. 이메일이 있다면 이메일도 출력한다.


//객체를 선언
//타입을 객체에 직접 지정
let person : {name : string; age : number; email? : string }= {
    //이때 email 뒤에 ?를 붙여 선택적 속성으로
    name : "youri",
    age : 23,
    email : "2376064@ewhain.ac.kr"
};

console.log("Your name is " + person.name);
console.log("Your age is " + person.age);
if (person.email !== undefined) {
    //if문을 통해 email이 있을 경우(undefined가 아닌) 출력
    console.log("Your email address is " + person.email);
}

/*
[LOG]: "Your name is youri" 
[LOG]: "Your age is 23" 
[LOG]: "Your email address is 2376064@ewhain.ac.kr" 
*/