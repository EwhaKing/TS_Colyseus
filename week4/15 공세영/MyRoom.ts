// Colyseus에서 제공하는 Room 클래스를 확장하여 하나의 게임 방을 구성합니다.
import { Room, Client } from "colyseus";
import { MyState, Player } from "./MyState";

// 방이다.
export class MyRoom extends Room<MyState> {

  // 방이 생성될 때 호출됨.
  // 기본 상태를 설정하고, 이후 이벤트 리스너 설정 가능.
  onCreate(options: any) {
    this.setState(new MyState());
    console.log(`[시스템] 방이 개설되었습니다.`);
  }

  // 플레이어가 방에 입장했을 때 호출됨.
  onJoin(client: Client, options: any) {
    const player = new Player();
    player.name = `Survivor_${client.sessionId.slice(0, 5)}`;  // 세션ID 기반 코드명
    player.x = 0;  // 초기 위치 설정 (맵의 출발 지점)
    player.y = 0;

    // 방 상태에 플레이어 등록
    this.state.players.set(client.sessionId, player);
    console.log(`[입장] ${player.name} 플레이어가 방에 들어왔습니다.`);
  }

  // 플레이어가 방에서 나갔을 때 호출됨.
  onLeave(client: Client) {
    const player = this.state.players.get(client.sessionId);
    this.state.players.delete(client.sessionId);

    if (player) {
      console.log(`[이탈] ${player.name} 플레이어가 구역을 벗어났습니다.`);
    }
  }
}
