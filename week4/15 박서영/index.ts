import {Server} from "colyseus";
import {MyRoom} from "./MyRoom";
import {createServer} from "http";

const port = 2567;
const httpServer = createServer();
const gameServer = new Server({server: httpServer});

gameServer.define("my_room", MyRoom);
gameServer.listen(port);
console.log(`게임 서버 실행 중! 포트: ${port}`);
