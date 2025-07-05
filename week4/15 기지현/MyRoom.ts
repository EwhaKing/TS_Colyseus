import { Room, Client } from "colyseus";
import { MyState, Player } from "./MyState";

export class MyRoom extends Room<MyState> {
  onCreate(options: any) {
    this.setState(new MyState());
  }

  onJoin(client: Client, options: any) {
    const player = new Player();
    player.name = `Player_${client.sessionId}`;
    this.state.players.set(client.sessionId, player);
  }

  onLeave(client: Client) {
    this.state.players.delete(client.sessionId);
  }
}