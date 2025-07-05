// MyState.ts

import "reflect-metadata";
import { Schema, type, MapSchema } from "@colyseus/schema";

export class Player extends Schema {
  @type("string") name: string;
  @type("number") x: number;
  @type("number") y: number;
}

export class MyState extends Schema {
  @type("map", Player)
  players = new MapSchema<Player>();
}