/*
**Room 클래스 (게임 방 역할)를 정의하는 파일이에요.**

- `Room` 클래스를 만들고 아래 메서드를 포함해주세요:
    - `onCreate`: Room이 만들어질 때 호출
    - `onJoin`: 플레이어가 입장할 때 호출
    - `onLeave`: 플레이어가 나갈 때 호출
- 입장한 플레이어마다 **Player 객체를 만들고**, `state.players`에 추가해보세요.
- 나간 플레이어는 `state.players.delete()`로 제거해요.
*/


//import 사용
import { Room, Client } from "colyseus";
import { MyState, Player } from "./MyState";
//MyState로부터 MyState와 Player Class를 import

export class MyRoom extends Room<MyState> {
    onCreate(options: any) {
        //onCreate when first made
        this.setState(new MyState());
        //init
    }

    onJoin(client: Client, options: any) {
        //onJoin whenever log-in happens
        const player = new Player();
        //player instance
        player.name = 'Player_${client.sessionId}';
        //Id appointing
        this.state.players.set(client.sessionId, player);
        //using sessionId as a key storing player
    }

    onLeave(client: Client) {
        //onLeave whenever log-out happens
        this.state.players.delete(client.sessionId);
        //deleting info of the player
    }
}