//1. 클라이언트에서 `room.send("scoreUp")` 메시지 보내기
//2. 서버가 `onMessage("scoreUp")`로 받고
//3. 서버 상태에 있는 `score += 1` 하기
//4. Colyseus가 모든 클라이언트에 `score` 자동 전파
//5. 클라이언트는 `state.score` 변화 감지해서 화면에 보여줌



import { Room, Client } from "colyseus";
import { MyState } from "./MyState";

export class MyRoom extends Room<MyState> {
    //defining room of colyseus
    //using MyState as state
    onCreate() {
        this.setState(new MyState());
        //init

        this.onMessage("scoreUp", (client) => {
            //out when client sends message
            this.state.score += 1;
            //score change
            console.log(`score +1! score now : ${this.state.score}`);
});
    }

    onJoin(client: Client) {
        //when client comes in
        console.log(`${client.sessionId} is with us!`);
    }
}

