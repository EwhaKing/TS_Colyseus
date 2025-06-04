let 이름: string = "정윤아";
let 나이: number = 23;
let 생일: number = 1216;
let 뭐든지: any = "문자열";
뭐든지 = 123;

let 입력값: unknown = "문자열";
let ID: string | number;
ID = "user123";
ID = 456;
let 방향: "left" | "right" | "up" | "down";
방향 = "left";

enum 요일 {
    월 = "Mon",
    화 = "Tue"
}

let 오늘: 요일 = 요일.월;
