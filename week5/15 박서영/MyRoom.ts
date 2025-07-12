import { Room, Client } from "colyseus";
import { MyState } from "./MyState";

export class MyRoom extends Room<MyState> {
  onCreate() {
    this.setState(new MyState());

    // 메시지 받았을 때 처리!
    this.onMessage("scoreUp", (client) => {
      this.state.score += 1;
      console.log(`점수 +1! 현재 점수: ${this.state.score}`);
    });
  }

  onJoin(client: Client) {
    console.log(`${client.sessionId} 님이 입장했습니다!`);
  }
}