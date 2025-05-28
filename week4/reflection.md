**1. Room, State, Client 각각이 어떤 역할을 하는지 설명해보세요.**
Room: 플레이어들이 들어오는 게임 공간
State: Room의 상태(바뀌면 client한테 실시간 전송됨)
Client: 플레이어 

**2. 코드를 작성하면서 어떤 부분이 흥미로웠나요?**
클래스 import/export 기능 덕에 관련된 코드를 주제별로 나누어 파일마다 정리할 수 있다는 것을 알았다. 

**3. 막히거나 헷갈렸던 점이 있었나요?**
node index.ts 입력했는데 파일 타입?이 안 맞는다고 함
--> npm install -g ts-node typescript

데코레이터 실행이 안 됨(@type이 undefined)
--> npm install @colyseus/schema로 패키지 추가설치
--> gpt따라서 tsconfig.json 수정
"experimentalDecorators": true, 
"emitDecoratorMetadata": true,

메세지핸들러 추가하는 보너스 과제
// 클라이언트가 메시지 보내면 서버가 응답(보너스과제)
    // gpt가 써줬는데 사실 요거 이해를 못하겠어요... 뭐지진짜
    this.onMessage("ping", (client, message) => {
      console.log(`ping 메시지 수신: ${message}`);
      client.send("pong", "pong 응답!");
    });
  }

**4. 실습을 통해 Colyseus의 흐름이 어떻게 이해되었나요?**
Room = 게임 공간, 플레이 공간, 플레이어들이 들어오는 곳
플레이어들/게임 공간의 상태(State)가 바뀌면 그 정보를 서버만 갖고 있지 말고 Client들한테도 전송 필요
--> 이 과정을 쉽게 할 수 있도록 기능 제공하는 라이브러리가 Colyseus

**5. Playground가 아닌 환경에서 코드를 돌려보니 어땠나요?**
어디에 뭘 입력해야 하는지 감이 하나도 안 잡혀서 gpt한테 모든 걸 꼬치꼬치 캐물어 겨우 성공했답니다. 하지만 평소 궁금했던 서버를 만드는 과정을 직접 해 볼 수 있어서 좋았어요.
(첨부한 성공화면 스크린샷도 확인해 주시면 감사하겠습니다 하하.)







