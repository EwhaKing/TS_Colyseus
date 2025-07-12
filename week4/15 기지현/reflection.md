1. room은 말 그대로 '방'의 개념. 게임이 이루어질 수 있는 공간으로써의 역할을 한다.
client는 플레이어. state는 room의 전반적인 상태를 의미.

2. 어렵다.. 내가 쓰는 서버들이 저런 코드로 만들어져서 관리되다가 없어지고 다시 생기고 했겠구나

3.  this.onMessage("chat", (client, message) => {
      console.log(받은 메시지: ${message});
      this.state.message = message;  // 상태 업데이트
    });
  }

이 코드를 통해 state가 바뀌는 것 같다. 클라이언트가 메시지를 보내면 그 내용으로 this.state.message가 변경되는 개념이라고 이해했다. 자동 동기화가 실행되고 있기에 서버와 클라이언트가 연결되어있다면 state의 변화를 클라이언트가 바로바로 받을 수 있다.

4. export class 문이 무슨 의민지 제대로 이해하지 못했다. extends 부분도 어렵다. 왜 쓰는지 그 이유가 납득이 안 되는 느낌이다. 