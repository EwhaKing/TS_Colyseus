
// 2. 인터페이스 실습
// `Product` 인터페이스를 정의한다.
    
    //속성: `name`: string, `price`: number, `description?`: string (선택적)
    
//`Product` 타입의 매개변수를 받아 정보를 출력하는 `printProduct()` 함수를 작성한다.
// 두 가지 예제(`description` 있음/없음)를 테스트한다.



//Product 인터페이스 정의
interface Product {
    name : string;
    price : number;
    description? : string;
    //description 속성은 선택적
}

function printProduct(p: Product) : void {
    //매개변수에 타입 지정 
    console.log("상품명: " + p.name);
    console.log("가격 : " + p.price);
    if(p.description) {
        //if문을 통해 선택적 출력 
        console.log("설명 : " + p.description);
    }
}

//product1 상수가 product 타입임을 명시
const product1 : Product = { name : "팥붕", price : 1000};
//함수 호출
printProduct(product1);

const product2 : Product = { name : "슈붕", price : 1500, description : "팥붕보다 500원 비싸다"};
printProduct(product2);


/*
[LOG]: "상품명: 팥붕" 
[LOG]: "가격 : 1000" 
[LOG]: "상품명: 슈붕" 
[LOG]: "가격 : 1500" 
[LOG]: "설명 : 팥붕보다 500원 비싸다"
*/