// 숫자 2개 입력받기 
let num1: number = Number(prompt("첫 번째 숫자를 입력하세요:"));
let num2: number = Number(prompt("두 번째 숫자를 입력하세요:"));

/**
* number 2개의 합 구하기
* 
* @param x 첫 번째 숫자
* @param y 두 번째 숫자
* @returns 두 숫자의 합
*/
//저번 세션에서 배웠던 주석규칙을 활용해 보았습니당. 이거 맞나요?
function add(x: number, y: number): number {
    return x + y;
}

// num1+num2 값을 콘솔에 출력 
console.log(add(num1, num2));