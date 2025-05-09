# Week 2: 변수, 타입, 조건문, 함수

## 새로 알게 된 개념
1. TypeScript Playground 에디터로 웹에서 코드 작성 및 실행이 가능하다.
2. TS는 변수 선언 시 타입을 같이 명시할 수 있다.
   let 변수명: 자료형 = 값;
   *타입을 쓰지 않아도 타입 추론 기능이 있어서 초기 값이 있다면 그 값에 따라 변수 타입을 자동으로 유추해 준다.

**배열 선언**
   let 숫자들: number[] = [1, 2, 3];
   let 문자열들: Array<string> = ["a", "b", "c"];
**튜플 선언**
   let 좌표: [number, string] = [123, "px"];
**unknown**
   선언 시 아무 타입이든 상관없음, 타입 체크를 하면 사용할 수 있음
**union**
   복수 타입 허용
   let ID: string | number;
**literal type**
   정해진 값만 허용
   let 방향: "left" | "right" | "up" | "down";
   방향 = "left";   // 가능


## 헷갈렸던 부분
**enum 타입을 어떤 상황에 쓰는 건지 감이 잘 안 온다.**
--> 찾아보니 서로 관련 있는 상수들의 집합을 정의할 때 사용한다고 한다.

ex) GameState라는 자료형을 하나 더 만드는 느낌인 듯 하다!
    enum GameState {
    Start,
    Playing,
    GameOver
    }
    let state: GameState = GameState.Playing;

**TS에서는 변수명을 한글로도 쓸 수 있는 것인가??**
앗... 생각해 보니 파이썬도 가능했던 것 같다.
--> 찾아보니 C, C++ 말고는 거의 다 가능하다고 한다. (+ TS는 JS 기반이어서 유니코드 완전 지원)

**unknown, any는 언제 쓸까?**
입력받을 값의 타입이 확실하지 않을 때 쓰는 걸까?



## Playground 사용해 본 소감
뭔가를 추가로 깔아야 하는 게 귀찮아서 항상 코랩 replit 주피터 등등 웹 에디터를 애용했던 사람으로서... 편하고 좋아요! 


## 느낀 점
1. 명석한 1학년둥이로 봐 주셔서 감사합니다 기대를 충족시키기 위해 분발할게요 노력할게요 아자아자
2. JS를 정말 오랜만에 봐서 반가웠다. 변수 선언할 때 데이터형을 지정할 필요가 없다는 것도 까먹고 있었다가 오늘 다시 알았다.
3. 읽는 내내 JS에 타입을 지정하고 확인하는 절차가 빠져 있는 게 너무너무 의아하고 신기했다.
(+ 질문&답 부분 넘 유익해용) 