

// 1️⃣ 객체 실습 – 1-object.ts
// Person 객체를 선언하고, 이름(name: string), 나이(age: number), 이메일(email: string, 선택적)을 속성으로 가진다.
// 콘솔에 이름과 나이를 출력한다. 이메일이 있다면 이메일도 출력한다.
// 예시:
// let person = {
//   name: "윤아",
//   age: 23,
//   email: "ellajya@ewha.ac.kr"
// };


let person = {
    name: "혜원",
    age: 20,
    email: "kimh@ewha.ac.kr"
}

console.log(`name: ${person.name}`);
    console.log(`age: ${person.age}`);
    if(person.email !== undefined) {
        console.log(`email: ${person.email}`);
    }

// //왜 인자에 person을 넣으면 안 되고 객체를 다 정의?해 줘야 하는 걸까
// function printName(person: {name: string, age: number, email?: string}){
//     console.log(`name: ${person.name}`);
//     console.log(`age: ${person.age}`);
//     if(person.email !== undefined) {
//         console.log(`email: ${person.email}`);
//     }
// }

