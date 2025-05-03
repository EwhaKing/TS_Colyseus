# WEEK 02 : TypeScript 맛보기(개념 및 실습)

## 배운 것 요?약?

TypeScript Playground & StackBlitz
별도의 로컬 개발환경이 없어도 브라우저 상에서 TypeScript 코드를 작성 및 실행할 수 있는 플랫폼.
= 온라인 통합 개발 환경, Online IDE(Integrated Development Environment), Web IDE

TypeScript Playground는 단일 파일 기반으로 코드 테스트가 가능한 반면 StackBlitz는 다중 파일로 프로젝트 빌드까지 가능하며 브라우저에서 직접 실행도 할 수 있다.



TypeScript 문법

01. 변수 / Variables + 02. 자료형 / Type

>> 변수 선언 시 콜론(:)을 이용해 타입 명시 가능
>> 지정된 타입과 다른 타입의 값을 입력 시 컴파일 에러 발생.
>> JavaScript 타입 시스템 위에 Static Type(정적 타입)을 추가 --> int, float, double과 같이 세분화된 타입이 아닌 [통합된 상위 타입]을 대신 사용한다!
>> Type Inference(타입 추론) 기능을 통해 특정 값으로 초기화 된 변수가 있다면 해당 값 기반으로 타입을 자동 할당해준다.

타입            사용처                              예시
number          정수, 실수, NaN 등                  let 나이: number = 22;
string          문자열                              let 이름: string = '공세영';
boolean         논리값(true/false)                  let 통과: boolean = true;
null            명시적으로 없음 표현                 let 소속: null = null;
undefined       값이 할당되지 않음                   let 소속: undefined = undefined;
symbol          고유하며 변경 불가능한 값            let 아이디: symbol = Symbol("skong302");
bigint          큰 정수 표현                        let 큰_수: bigint = 36854523132482345564;

any             어떤 타입이든 ok                    let 가격: any = 10000;      // 추천 안 한다고 함.
unknown         타입을 모를 때(안전한 any)           let 모름: unknown = "abc";
void            (함수) 반환값 없음                  function log(): void {}
never           절대 도달하지 않는 함수 반환 타입    function error(): never { throw new Error(); }


unknown 추가 설명
>> unknown은 any와 비슷하게 모든 값을 담을 수 있으나, any와 다르게 해당 변수의 타입이 명확해지기 전까지는 어떤 작업도 허용하지 않음.

let 입력값: unknown = "세영";
// console.log(입력값.length); // ❌ 에러! - TypeScript는 입력값의 타입을 모른다. 따라서 해당 변수에 .length 프로퍼티가 존재한다는 보장이 없다.
if (typeof 입력값 === "string") {
  console.log(입력값.length); // ✅ 가능! - 조건문으로 변수 타입이 string일 때만 통과 시키는 타입 좁히기(Narrowing)/타입 가드(Type Guard) 작업을 했음. 입력값은 string으로 처리되고 이후 .length 접근이 가능해짐.
}


Array / 배열 - number[], string[], Array<number>의 형태로 사용
let 숫자배열: number[] = [1,2,3];
let 문자열배열: Array<string> = ["공","세","영"];


Tuple / 튜플 - 길이와 타입이 고정된 배열. 
let coordinate: [number, number, string] = [10,20,'xy'];


Interface / 인터페이스 - 객체의 형태를 정의하는 문법 요소
interface student {
  name: string;
  age: number;
}

Object / 객체 - 속성의 타입들을 명시할 필요가 있음
let student: { name: string; age: number } = { name: '공세영', age:22 };


사용자 정의 타입
type ID = string | number;  // 문자열이나 숫자일 것.
let userId: ID = "abcd1234";


Union / 유니언 - 둘 이상의 타입을 허용함. 타입 검사 시 조건문으로 narrowing해 주어야 한다.
let ID: string | number;
ID = "skong302";
ID = 03021234;


Literal Type / 리터럴 타입 - 정해진 특정 값만을 허용한다. 값 자체가 타입. 유효한 옵션을 한정하기 위해 사용.
let direction: "left" | "right";
direction = "left";     // ✅
direction = "diagonal"; // ❌ 오류: 허용되지 않은 값


enum / 열거형 - 관련 있는 상수들을 이름으로 묶어 나열한 것. 따로 지정하지 않으면 자동으로 숫자가 할당됨.
enum Direction{
    up,     // 0
    down,   // 1
    left,   // 2
    right   // 3
}

enum Roles{
    leader = "정윤아"
    member = "공세영"
}

let myRole: Role = Role.member;
console.log(myRole);    // "공세영"



03. 조건문 / Conditional Statements
>> if, else, switch 등의 구문
>> 결과가 무조건 boolean 타입이어야 한다!
>> 지정된 타입과 맞지 않는 비교/연산의 경우 컴파일 에러 발생.

let age: number = 18;
if (age >= 18) {
  console.log("성인입니다.");
} else {
  console.log("미성년자입니다.");
}

let grade: string = "B";
switch (grade) {
  case "A":
    console.log("최우수");
    break;
  case "B":
    console.log("우수");
    break;
  default:
    console.log("보통");
}



04. 함수 / Function
>> TypeScript에서는 함수의 타입, 매개변수의 개수나 반환 타입 등을 정의해 함수의 안정성 및 명확성을 높인다.

function add(x: number, y: number): number {
  return x + y;
}

>> 선택적 매개변수(Optional Parameter)의 개념 - 물음표(?)가 붙은 매개변수는 있어도 없어도 된다.
function 함수명(매개변수?: 타입): 반환타입

function greet(name?: string): void {
  if (name) {
    console.log(`안녕하세요, ${name}님`);
  } else {
    console.log("안녕하세요, 주인님");  // undefined가 들어가서 default로 출력되는? 듯?
  }
}

greet("세영");     // 출력: 안녕하세요, 세영님
greet();           // 출력: 안녕하세요, 주인님




# 이하 진 짜 reflection

Q. 이번 주 학습에서 새롭게 알게 된 점은 무엇인가요?
A. TypeScript가 왜 'Type'Script인지 새삼 다시 알게 되었음. 정적 타입 시스템의 편리함에 대해서도 알게 된 듯. int, float, double을 안 쓴다니 신세계다.
정말 개발자를 위한 언어.... 그렇지만 프로젝트를 진행하는 게 아니라서 그런지 TypeScript의 강점인 컴파일 타임 시점의 코드 안정성 확보가 와닿지는 않는 것 같음. 여전히 입력값 잘못 넣으면 오류는 난다. (물론 다른 언어들은 런타임 오류가 많아서 디버깅이 고역임을 이론적으로 알고 있긴 하지만....)


Q. 실습하면서 헷갈렸던 부분이 있었나요?
A. TypeScript Playground의 에디터 작동 방식을 설명하는 노션 글 중, 편집기에 입력된 TypeScript 코드를 자동으로 'JavaScript'로 컴파일해 보여준다는 부분에 의문을 가졌음.
TypeScript가 Interpreter에 의해 바로 Binary Code나 기계어로 컴파일 될 것이라고 생각했으나...
먼저 브라우저가 이해할 수 있는 JavaScript로 transpile(by tsc)하는 과정이 필요하단 것을 새로 알게 되었다.

any 타입은 편리해 보이는데 사용을 지양해야 하는 이유에 대해서도 헷갈렸는데... 조금 생각해 보니 TypeScript의 강점인 타입 검사 기능을 무용지물로 만든다는 점에서 사용 지양해야 함을 깨달음.
코드의 의도(가독성)를 파악하기 어려울 뿐만 아니라 예측하기 어려우니 유지보수하기 어려울 테니까. 컴파일 타임에서의 any 오류는 어떻게 나지? 맥락이 없으니 어쩐지 두루뭉술하다....


Q. Playground(또는 StackBlitz) 사용해본 소감은 어떤가요?
A. 초기 환경 설정 과정을 생략하고, 별도의 설치 없이 곧바로 실습에 돌입할 수 있다는 점에서 Web IDE의 뛰어난 접근성을 체감함.
다만, 이러한 웹 기반 환경의 편의성에도 불구하고 로컬 개발환경을 이용하는 이유, 대규모 프로젝트까지 안정적으로 개발할 수 있는지 여부에 대해선 아직 궁금증이 남음.