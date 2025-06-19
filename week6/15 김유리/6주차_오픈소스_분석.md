# Project Analysis
## About 21 Online



1. Project Name
21 Online


2. Link
[Github](https://stopnoanime.github.io/21-online/, "Go BlackJack")


3. Description (어떤 게임인지, 주요 기능)
-멀티플레이어 블랙잭 게임
-딜러와 Player(혹은 Players)는 게임이 시작하면 두 장의 카드를 각각 배분받고 Hit과 Stay 중 하나를 선택해 최대한 21에 가깝도록 만든다
-Colyseus를 활용한 턴제 카드 게임의 상태 관리와 동기화
-실시간 상호작용


4. Structure (클라이언트와 서버)
| 구성요소 | 설명 | 
|---|---:|
| Player 클래스 | 각 플레이어의 베팅 금액, 총 자산, 손패, 상태(Stay, Hit) 등을 상태로 가짐 |
| GameState 클래스 | 전체 게임 상태 / player, dealer, turn, deck, roundState 등의 필드 포함 |
| GameRoom | 게임 룸 / 플레이어의 입장과 퇴장, 게임 시작, 턴 관리, 메시지 처리 등 |
| `onMessage("hit")` | 클라이언트로부터 히트 요청을 받아 해당 플레이어에게 카드 추가, 상태 갱신 |
| `onMessage("stay")` | 클라이언트로부터 스테이 요청을 받아 플레이어의 턴을 종료, 다음 턴으로 전환 |
| State 구조 | player, dealer, turn, deck, roundState 등으로 구성된 Schema 상태 객체 / 모든 Client와 실시간 동기화 |


5. Colyseus Use (룸 관리, 상태 동기화, 메시지 처리)
| 메서드 | 기능 | 설명 |
|---|:---:|---:|
| Room | 게임 테이블 | 서버가 새로운 룸을 생성 / 기존 빈 룸에 플레이어들 매칭 |
| `onjoin` | Room 상태에 Player 등록 | 플레이어 입장 시 트리거 |
| `onLeave` | Room 상태에서 제거 | 플레이어 퇴장 시 트리거 |
| State | 게임 상태 | 딜러와 플레이어들의 카드, 점수, 베팅액, 턴 등 / Schema 기반 |
| `this.setState()` | GameState를 생성 후 this.state로 지정 | 게임 상태 전체를 서버에서 생성하고 관리 / 변경 시 자동으로 모든 클라이언트에 동기화 |
| `this.onMessage()` | Client의 액션(Stay, Hit 등)을 서버가 수신 | 유효성 검사 후 서버가 상태 갱신 / 로직(카드 추가 배분, 턴 종료 등)과 검증은 서버만이 수행 |
| `this.clock.setInterval()` | 게임 흐름 | Colyseus 내장 타이머 시스템 사용 / 자동 행동(Auto Ready 등) 구현 가능 |
| `this.broadcast()` | 모든 Client에게 서버가 알림 전송 | Round 시작, 턴 종료, 승패 결과 등 / 클라이언트는 메시지를 수신해 화면에 반영 |


6. In Previous Weeks... (배운 개념과 연결되는 부분)
-this.setState()가 초기 상태를 설정하는데, 21 online의 경우 플레이어에게서 베팅 금액을 빼고 딜러와 플레이어에게 카드를 두 장씩 배분함
-onJoin()과 onLeave()를 통해 플레이어의 입장과 퇴장을 Room 상태에 반영할 수 있음


7. Impressive Structure or Idea
-onMessage()를 활용해 hit와 stay 기능 구현
-게임 시작 시 나오는 Round Start는 this.broadcast()를 활용함
-턴에 상관없이 BlackJack이 나오는 카드 배분 직후의 로직이 존재함(서버 내부의 로직 검사)


8. Personal Opinions
-블랙잭은 원래 좋아하던 카드게임이었는데 웹 기술 스택 + Colyseus를 통해 구현할 수 있는 방법을 알게 되어 뿌듯하다
-간단한 로직으로 구성된 게임이라고 생각했는데 의외로 필요한 State와 구조가 많다...
-실습해본 건 일부뿐이긴 하지만 Colyseus를 통해 실시간 통신과 상태 동기화를 직접 구현해볼 수 있어서 좋았다
-솔직히 Typescript나 Colyseus 모두 생소했는데 이번에 스터디를 계기로 다같이 배워서 더 동기부여가 된 듯하다
-멀티플레이어 게임을 만들어보고 싶다!!!는 생각이 갑자기 들었다