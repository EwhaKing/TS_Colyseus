/*
**게임 상태(state)를 정의하는 파일이에요.** `MyState`라는 클래스는 `MyRoom.ts`에서 사용할 상태 정의입니다!

- `Player` 클래스 안에 다음 세 가지 속성을 추가해주세요:
    - `name: string`, `x: number`, `y: number`
- `MapSchema`를 사용해서 플레이어 목록을 관리하세요!
*/

//MyState = Defines state used in MyRoom

import { Schema, type, MapSchema } from "@colyseus/schema";
//Schema = Base Class used when defining State
//type = Decorator indicating what type is this field
//MapSchema = Auto-sync using network

export class Player extends Schema {
  //Player = becomes traceable object(extends)
  @type("string") name: string = "";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  //3 properties in Player class
}

export class MyState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}
//players= multi-Player collection
//MapSchema = real time auto-sync