// 목적: 게임의 상태(state)를 정의
// Colyseus의 Schema를 기반으로 서버와 클라이언트 간 상태를 자동으로 동기화한다고....
import { Schema, type, MapSchema } from "@colyseus/schema";

// 목적: 개별 플레이어를 나타내는 클래스
export class Player extends Schema {
  @type("string") name: string = "";   // 이름
  @type("number") x: number = 0;       // 현재 위치 X
  @type("number") y: number = 0;       // 현재 위치 Y
}

// 목적: 게임 룸의 전체 상태(state)를 관리하는 클래스
export class MyState extends Schema {
  // 모든 플레이어를 저장하는 맵
  // 키는 sessionId, 값은 Player 객체
  @type({ map: Player }) players = new MapSchema<Player>();
}
