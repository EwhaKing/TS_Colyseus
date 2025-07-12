// person 객체 생성. 이름, 나이, 이메일의 타입은 명시하지 않았음.
let person = {
  name: "공세영",
  age: 22,
  email: "skong302@ewhain.net"
};

// 정보를 출력하기 위해 함수 생성.
// 이름, 나이, 이메일 타입을 정의하고 출력하게 함.
function printInfo(p: { name: string; age: number; email: string; }) {
  console.log(`이름: ${p.name}`);
  console.log(`나이: ${p.age}세`);
  if (p.email !== undefined) {
    console.log(`이메일: ${p.email}`);
  }
}

printInfo(person);