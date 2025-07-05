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
    // (gpt가 써줬는데 사실 요거 이해를 못 하겠어요...)
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
  }

  /* onLeave: 클라이언트가 나갈 때 실행되는 메서드
  room 상태에 플레이어 삭제
  --> 이 상태를 접속 중인 클라이언트 모두에게 실시간 동기화 */
  onLeave(client: Client) {
    this.state.players.delete(client.sessionId);
  }
}