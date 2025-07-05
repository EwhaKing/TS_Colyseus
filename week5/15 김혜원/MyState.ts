import { Schema, type } from "@colyseus/schema";

export class MyState extends Schema {
  @type("number") score: number = 0;
}