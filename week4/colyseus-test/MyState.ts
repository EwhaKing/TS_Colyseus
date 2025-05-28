// **2️⃣ `MyState.ts`**

// **👉 게임 상태(state)를 정의하는 파일이에요.** `MyState`라는 클래스는 `MyRoom.ts`에서 사용할 상태 정의입니다!

// - `Player` 클래스 안에 다음 세 가지 속성을 추가해주세요:
//     - `name: string`, `x: number`, `y: number`
// - `MapSchema`를 사용해서 플레이어 목록을 관리하세요!




import { Schema, type, MapSchema } from "@colyseus/schema";

/* Player 클래스 --> Colyseus의 Schema 상속
   (Schema: 실시간 상태를 정의할 때 사용하는 기본 클래스.
   상속하면 클래스 필드를 자동으로 클라이언트와 동기화해줌)

   @type: 데코레이터. 이 필드는 클라이언트와 동기화해야 한다고 알려주는 표시.
   ex) @type("string") name: string = "";
       name 속성이 string 타입이고, 이건 클라이언트와 실시간 동기화가 필요함. */
export class Player extends Schema {
  @type("string") name: string = "";
  @type("number") x: number = 0;
  @type("number") y: number = 0;

  // hp, score, color 속성 추가(보너스과제)
  @type("number") hp: number = 100;
  @type("number") score: number = 0;
  @type("string") color: string = "red";
}

/*  player라는 이름의 속성 생성
    MapSchema<Player>: 실시간 동기화 가능한 딕셔너리 구조
    */
export class MyState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}