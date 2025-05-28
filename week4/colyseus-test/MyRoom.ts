// **1️⃣ `MyRoom.ts`**

// **👉 Room 클래스 (게임 방 역할)를 정의하는 파일이에요.**

// - `Room` 클래스를 만들고 아래 메서드를 포함해주세요:
//     - `onCreate`: Room이 만들어질 때 호출
//     - `onJoin`: 플레이어가 입장할 때 호출
//     - `onLeave`: 플레이어가 나갈 때 호출
// - 입장한 플레이어마다 **Player 객체를 만들고**, `state.players`에 추가해보세요.
// - 나간 플레이어는 `state.players.delete()`로 제거해요.




// colyseus 라이브러리, MyState 파일에서 클래스 가져오기
import { Room, Client } from "colyseus";
import { MyState, Player } from "./MyState";

 
/* Room<MyState> 상속 --> colyseus에 이미 있는 기능 사용 가능
   onCreate: room이 생성될 때 실행됨
   options: 클라이언트가 방을 만들 때 전달할 수 있는 추가 설정값 ex최대인원?
   this.setState: 초기 상태 설정. new MyState()를 넘김-->room의 상태가 MyState 클래스의 구조를 따라감 */ 
export class MyRoom extends Room<MyState> {
  onCreate(options: any) {
    this.setState(new MyState());

    // 클라이언트가 메시지 보내면 서버가 응답(보너스과제)
    // gpt가 써줬는데 사실 요거 이해를 못하겠어요... 뭐지진짜
    this.onMessage("ping", (client, message) => {
      console.log(`ping 메시지 수신: ${message}`);
      client.send("pong", "pong 응답!");
    });
  }

  /* onJoin: 클라이언트가 입장할 때 실행되는 메서드
  (파라미터) client --> 고유한 sessionId 가짐 
  플레이어 객체 생성
  플레이어 이름 설정(sessionId이용)
  현재 room의 상태에 플레이어 등록(키:client.sessionId, 값:player인스턴스)
  --> 이 상태를 접속 중인 클라이언트 모두에게 실시간 동기화함 */
  onJoin(client: Client, options: any) {
    const player = new Player();
    player.name = `Player_${client.sessionId}`;
    this.state.players.set(client.sessionId, player);
    console.log(`플레이어${client.sessionId}님이 입장하셨습니다.`)
  }

  /* onLeave: 클라이언트가 나갈 때 실행되는 메서드
  room 상태에 플레이어 삭제
  --> 이 상태를 접속 중인 클라이언트 모두에게 실시간 동기화 */
  onLeave(client: Client) {
    console.log(`플레이어${client.sessionId}님이 퇴장하셨습니다.`)
    this.state.players.delete(client.sessionId);
  }
}





// import { Room, Client } from "colyseus";
// import { Schema, type, MapSchema } from "@colyseus/schema";

// // 상태 정의
// class MyState extends Schema {
//   @type("string") message: string = "hello from the server!";
// }

// export class MyRoom extends Room<MyState> {
//   // 방이 생성될 때 실행됨
//   onCreate(options: any) {
//     this.setState(new MyState());

//     this.onMessage("chat", (client, message) => {
//       console.log(`받은 메시지: ${message}`);
//       this.state.message = message;  // 상태 업데이트
//     });
//   }

//   // 클라이언트가 입장할 때 실행되는 메서드
//   onJoin(client: Client, options: any) {
//     console.log(`${client.sessionId} 가 입장했습니다.`);
//   }

//   // 클라이언트가 나갈 때 실행되는 메서드
//   onLeave(client: Client, consented: boolean) {
//     console.log(`${client.sessionId} 가 퇴장했습니다.`);
//   }
// }