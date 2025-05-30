console.log("서버시작");

import { Server } from "colyseus";
import { MyRoom } from "./MyRoom";
import { createServer } from "http";


const port = 2567;
const httpServer = createServer(); //이 HTTP 서버는 WebSocket 요청을 처리하는 데 사용됨...? 실시간 통신인가 보다
const gameServer = new Server({ server: httpServer });

gameServer.define("my_room", MyRoom);

gameServer.listen(port);
console.log(`게임 서버 실행 중! 포트: ${port}`);  