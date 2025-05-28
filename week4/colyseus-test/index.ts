// **3️⃣ `index.ts`**

// **👉 서버를 실행하고, 방(Room)을 등록하는 파일이에요.**

// - Colyseus 서버를 만들고 `"my_room"`이라는 이름으로 `MyRoom`을 등록해주세요.
// - 서버 포트는 2567로 설정!


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