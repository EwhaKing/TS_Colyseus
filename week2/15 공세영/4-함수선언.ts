// 두 숫자를 입력받아 합을 반환하는 함수 선언
// 첫 번째 숫자는 a, 두 번째 숫자는 b이며 매개변수와 반환 타입 전부 number 타입으로 지정
function addNumbers(a: number, b: number): number {
  return a + b;
}

// 함수 호출 및 결과 출력. a는 10이고, b는 20이다.
const result: number = addNumbers(10, 20);
console.log(`두 수의 합: ${result}`);