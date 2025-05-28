import { Client } from "colyseus.js";

const client = new Client("ws://localhost:2567");
(async () => {
  try {
    const room = await client.joinOrCreate("my_room");
    console.log("Joined successfully!", room.sessionId);

    // 서버에 메시지 보내기
    room.send("ping", { message: "클라이언트에서 ping 보냄!" });

    // 서버 응답 받기
    room.onMessage("pong", (data) => {
      console.log("서버 응답:", data);
    });

  } catch (e) {
    console.error("방 참가 실패", e);
  }
})();
