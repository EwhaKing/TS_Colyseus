// 목적: 엔트리 파일 - Colyseus 게임 서버를 생성 및 방을 등록
import "reflect-metadata";  // 데코레이터 기능 활성화를 위한 필수 import << 이거 안 하니까 오류 뜸.
import { Server } from "colyseus";
import { MyRoom } from "./MyRoom";
import { createServer } from "http";

const port = 2567;
const httpServer = createServer();
const gameServer = new Server({ server: httpServer });

// 'my_room'이라는 이름으로 방 정의
gameServer.define("my_room", MyRoom);

// 서버 시작
gameServer.listen(port);
console.log(`방이 포트 ${port}에서 활성화되었습니다.`);
