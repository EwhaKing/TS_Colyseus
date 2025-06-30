import { Schema, type } from "@colyseus/schema";

export class MyState extends Schema {
  @type("number")
  score: number = 0;

  constructor() {
    super();
    console.log("✅ 상태 초기화: score = 0");
  }
}
