# week4 : Room, State and Client



## 회고 질문


1. Room / State / Client는 각각 어떤 역할을 하나요?
-Room = 교실
-State = 자리 배치도(교수님이 관리)
-Client = 학생
-이때 State는 Client끼리 모두 공유하게 됨
-State 변경 -> Client에 자동 반영


2. 직접 서버 코드를 실행해본 느낌은 어땠나요?
-타입스크립트를 vs code에서 실행해보니까 재밌었다 
-import export extends 를 활발하게 쓰니까 여러 파일들을 만들고 같은 구조는 재활용할 수 있는 게임 시스템이 더 잘 이해되는 것 같았다 


3. State가 어떻게 바뀌고, 클라이언트가 그걸 어떻게 받는 구조인지 이해가 되나요?
-server는 room class 내부에서 this.state라는 객체를 가진다 
-우리가 정의해놓은 properties가 바뀌면 colyseus가 그걸 자동으로 감지한다는 게 신기했다
-colyseus는 모든 client에게 변경된 부분만을 전송해준다 


4. 어려웠던 부분이나 헷갈린 부분은?
-import 할 때 undefined라고 자꾸 에러가 났었는데 알고 보니까 tsconfig에서 데코레이터 관련 코드가 true가 아니라 주석 처리되어 있어서 에러가 났었다...
-방 log in과 log out에 따라 player 객체가 state에 추가되고 제거되는 것이 신기했다
-처음에는 어떻게 "실시간"으로 정보를 주고 받는다는 건지 와닿지 않았다


5. 실습을 통해 Colyseus의 흐름이 어떻게 이해되었나요?
-client는 room에 모여 state를 공유
-그걸 중매해주는 것이 server
-코드를 직접접 써보니 room이 만들어지고 player가 오고가는 흐름이 잘 보여서 좋았다 


6. Playground가 아닌 환경에서 코드를 돌려보니 어땠나요?
-따로 파일을 설치해야 했지만 한 번 설치하고 나서부터는 Visual Studio Code에서 돌려볼 수 있어서 편했다
-import 할 때 자꾸 에러 나서 새로 파일 깔고 또 파일 깔고 하는 게 까다로웠다 
