# WEEK 03 : TypeScript 문법 개념 이해

## 배운 것 요약

01. 객체 / Object
>> 속성(property)들의 집함. 사용자 지정으로 여러 값을 key-value 형태로 저장할 때 사용.
>> 데이터와 기능은 객체로 구현.
>> 객체도 타입이 있음 = object type
>> 컴파일 시 속성 및 타입 검사를 위해 

```
// 캐릭터의 위치 정보를 출력하는 함수
function printPosition(pos: {x: number; y: number}) {
    console.log(`캐릭터의 위치 - X: ${pos.x}, Y: ${pos.y}`);
}
printPosition({x:120, y:340});  // 실제 사용 - 캐릭터의 위치를 출력한다.
```


02. 선택적 속성(Optional Properties)
>> 이 속성은 있을 수도, 없을 수도 있습니다.
>> 물음표(?)를 이용해 표시한다.

```
function printWeaponInfo(weapon: { name: string; upgradeLevel?: number }) {
  console.log(`무기 이름: ${weapon.name}`);
  if (weapon.upgradeLevel !== undefined) {      // 속성이 없을 경우를 고려해서 코드를 작성할 것
    console.log(`강화 레벨: +${weapon.upgradeLevel}`);
  }
}

// 실제 사용 - 입력에 따라 강화 레벨 출력 여부가 다름.
printWeaponInfo({ name: "핸드건" });             
// 출력: 무기 이름: 핸드건

printWeaponInfo({ name: "매그넘", upgradeLevel: 3 });
// 출력: 무기 이름: 매그넘, 강화 레벨: +3
```



03. 객체 타입 명시 vs 타입 추론
>> 타입을 직접 선언하느냐, TypeScript에게 초기값 기반 타입 판단을 맡기느냐.

```
// 타입 추론의 경우
let player = { 
  name: "Leon",
  level: 10,
  weapon: "Matilda"
};
```



04. 인터페이스(Interface)
>> 객체의 구조/모양을 정의하는 방법
>> 일종의 규약. 컴파일 타임 타입 검사 용도로 사용.
>> 객체의 형태만 맞으면 인터페이스로 간주 - 구조적 타이핑(structural typing)
>> implement 선언도 필요 없다. 헉. 진짜냐.

```
interface Character {
  name: string;
  weapon?: string;
}

function introduce(c: Character) {      // 타입이 Character인 변수 c를 이용해 함수를 정의
  console.log(`이름: ${c.name}`);
  if (c.weapon) console.log(`무기: ${c.weapon}`);
}

introduce({ name: "Leon", weapon: "Matilda" });
introduce({ name: "Claire" });
```



05. 클래스(Class)
>> 객체를 생성하기 위한 청사진
>> 필드(속성)와 메소드(기능)을 정의하고, constructor로 초기화.
>> 이것으로 객체를 반복해서 찍어낼 수 있다.
>> this.어쩌구는 현재 인스턴트를 가리킴.

```
class Character {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  attack() {
    return `${this.name}이(가) 공격했다!`;
  }
}

const leon = new Character("Leon");
console.log(leon.attack());  // Leon이(가) 공격했다!
```



06. 상속(extends)과 구조적 가이드/제약?(implements) 
>> 상속이란? super class의 필드 및 메소드를 물려받아 사용할 수 있다.
>> implements를 사용하면? 클래스가 인터페이스에 적힌 구조를 따르게 강제함.

```
// 무기 인터페이스: 모든 무기는 이름과 공격 메서드를 가져야 함
interface Weapon {
  name: string;
  attack(): void;
}

// 총기 클래스: Weapon 인터페이스를 구현
class Gun implements Weapon {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name}에서 탄환을 발사합니다.`);
  }
}

// 칼 클래스: Weapon 인터페이스를 구현
class Knife implements Weapon {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name}로 적을 벱니다.`);
  }
}

function useWeapon(w: Weapon) {
  console.log(`플레이어가 ${w.name}을(를) 사용합니다.`);
  w.attack();
}

const matilda = new Gun("Matilda");
const combatKnife = new Knife("Combat Knife");

useWeapon(matilda);     // Matilda에서 탄환을 발사합니다.
useWeapon(combatKnife); // Combat Knife로 적을 벱니다.
```