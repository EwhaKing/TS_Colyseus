# WEEK 04 : Colyseus 서버 구조를 이해하자 - Room, State, Client를 중심으로

## 배운 것 요약

01. Colyseus란 무엇인가.
Colyseus는 Node.js 기반 프레임워크.
플레이어(n명): 접속할게.
서버: 상태 관리하면서 모든 클라이언트를 위해 리얼타임 정보 동기화 할게.
클라이언트: 감사합니다? 

Colyseus의 구조: Room, Client, State.
Room은 플레이어들이 게임하는 (개념적) 공간.
Client는 플레이어의 다른 이름.
State는 방의 현재 상태. 서버가 관리.

```
클라이언트 → Room 입장 → Room 안에서 상태 변경 → 모든 Client에게 실시간 전송

[Client] ──> [Room] ──> [State]
    ↑           ↓             ↑
    └───── message ───────────┘
    
```

GM / PC1 / PC2 / PC3 / PC4가 Roll20 방에 입장 중.
PC2가 카드를 덱에 추가함.
서버: 음. Room의 State가 바뀌었군. 업데이트하고 공지를 때린다.
나머지 PC들: 아하. PC2가 카드를 추가했군요. 감사합니다.

@type({ map: Player }) players = new MapSchema<Player>();




02. 실습

준비할 것: node.js, vscode(혹은 터미널)

```
사견: 시소실 생각나고 정겨움.

mkdir colyseus-test
cd colyseus-test
npm init -y

npm install colyseus
npm install -D typescript ts-node @types/node
```

이후 MyRoom.ts와 index.ts를 생성하는데, 주의해야 할 점은 tsconfig.json에서 주석처리된 기능을 켜 줘야 정상 작동을 한다.
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
이 두개를 켜야 Colyseus 타이틀이 터미널에 나타나는 듯.