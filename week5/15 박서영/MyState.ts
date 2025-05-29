import { Schema, type } from "@colyseus/schema";

export class MyState extends Schema {
  @type("number") score: number = 0;
}

//우선 여기에 그냥 넣었는데, 과제 진행..때는 따로 client.ts처럼 빼서 동작시켰었습니다..
const room = await client.joinOrCreate("my_room");

// 상태가 바뀔 때마다 호출됨!
room.onStateChange((state) => {
  scoreText.innerText = `현재 점수: ${state.score}`;
});

// 버튼 클릭 시 메시지 보내기
scoreButton.addEventListener("click", () => {
  room.send("scoreUp");
});
