
// 1. 객체 실습

let person : {name : string; age : number; email? : string }= {
    //이때 email 뒤에 ?를 붙여 선택적 속성으로
    name : "박채윤",
    age : 20
};

console.log("이름: " + person.name);
console.log("나이: " + person.age);
if (person.email !== undefined) {
    //if문을 통해 email이 있을 경우(undefined가 아닌) 출력
    console.log("Your email address is " + person.email);
}