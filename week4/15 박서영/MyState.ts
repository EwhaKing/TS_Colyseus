import {Schema, type, MapSchema} from "@colyseus/schema";

export class Player extends Schema{
    @type("string") name: string = "";
    @type("number") x: number = 0;
    @type("number") y: number = 0;
    @type("number") hp: number = 100;
    @type("number") score: number = 0;
    @type("string") color: string = "";

}

export class MyState extends Schema{
    @type({map:Player}) players = new MapSchema<Player>();
    //여러 플레이어를 저장하는 맵, 각 플레이어는 고유한 키(sessionId)로 구분됨
}