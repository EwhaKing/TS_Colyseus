//4.함수선언: 두 숫자를 입력받아 합을 반환.

//함수: 매개변수에 타입 명시, 함수 반환타입 명시
function addition (x: number, y: number) : number {
    return x+y;
}

let a : number = 10;
let b : number = 20;

console.log(addition(a,b)); //함수 호출
