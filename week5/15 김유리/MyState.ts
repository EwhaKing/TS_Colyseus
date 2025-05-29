//1. 클라이언트에서 `room.send("scoreUp")` 메시지 보내기
//2. 서버가 `onMessage("scoreUp")`로 받고
//3. 서버 상태에 있는 `score += 1` 하기
//4. Colyseus가 모든 클라이언트에 `score` 자동 전파
//5. 클라이언트는 `state.score` 변화 감지해서 화면에 보여줌



import { Schema, type } from "@colyseus/schema";

//schema extending
export class MyState extends Schema {
    //score defining
    @type("number") score : number = 0;
    //@type for pointing this field is synchronizing target of colyseus
    //init value is 0
}