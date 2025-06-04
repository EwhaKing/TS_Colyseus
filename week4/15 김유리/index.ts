/*
**서버를 실행하고, 방(Room)을 등록하는 파일이에요.**

- Colyseus 서버를 만들고 `"my_room"`이라는 이름으로 `MyRoom`을 등록해주세요.
- 서버 포트는 2567로 설정!
*/


import { Server } from "colyseus";
//importing server class used when making game server
import { MyRoom } from "./MyRoom";
import { createServer } from "http";
//importing createServer to make basic http server

const port = 2567;
//port number where server opens
const httpServer = createServer();
//creating new http server which has colyseus game server on it
const gameServer = new Server({ server : httpServer });
//making game server instance using newly made http server

gameServer.define("my_room", MyRoom);
//room and room class appointed

gameServer.listen(port);
//game server waiting for network request
console.log("서버 실행 중! 포트: ${port}");