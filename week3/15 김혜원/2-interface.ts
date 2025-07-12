// 2️⃣ 인터페이스 실습 – 2-interface.ts
// Product 인터페이스를 정의한다.
// 속성: name: string, price: number, description?: string (선택적)
// Product 타입의 매개변수를 받아 정보를 출력하는 printProduct() 함수를 작성한다.
// 두 가지 예제(description 있음/없음)를 테스트한다.
// 예시:
// interface Product { ... }
// function printProduct(p: Product) { ... }


interface Product {
    name: string;
    price: number;
    descrption?: string;
}

function printProduct(p: Product): void {
    console.log(`name: ${p.name}`);
    console.log(`price: ${p.price}`);
    if(p.descrption !== undefined){
        console.log(`descrption: ${p.descrption}`);
    }
} 

const ohyes: Product = { name: "Ohyes", price: 650, descrption: "reccommended by Seoyeon"};
printProduct(ohyes);

const sandwiches: Product = {name: "Sandwiches", price: 3500};
printProduct(sandwiches);