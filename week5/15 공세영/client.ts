import { Client } from "colyseus.js";
import WebSocket from "ws";
import readline from "readline";

// Node.js용 WebSocket을 전역으로 등록
(global as any).WebSocket = WebSocket;

const client = new Client("ws://localhost:2567");

async function main() {
  const room = await client.joinOrCreate("my_room");
  console.log(`✅ 방에 입장했습니다. 세션 ID: ${room.sessionId}`);
  console.log(`💡 Enter 키를 누르면 점수가 올라갑니다.`);

  room.onStateChange((state: any) => {
    console.log(`🎯 현재 점수: ${state.score}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", () => {
    console.log("📤 scoreUp 메시지 전송");
    room.send("scoreUp");
  });

  room.onLeave(() => {
    console.log("❌ 서버와 연결 종료됨");
    rl.close();
  });
}

main().catch((err) => {
  console.error("❌ 클라이언트 오류:", err.message);
});
