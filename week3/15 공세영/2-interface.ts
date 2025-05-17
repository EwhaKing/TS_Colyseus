// 프로덕트 각 변수 타입 정의와 함께 인터페이스 작성
interface Product {
    name: string,
    price: number,
    description?: string
};

// 상품 정보 출력 함수 정의. Product 인터페이스에 부합하는 객체만 p로 인정.
// description이 있을 때만 if로 받아와서 출력.
function printProduct(p:Product){
    console.log(p.name);
    console.log(p.price);
    if(p.description) console.log(p.description);
};

// 상품 정보가 있는 예제
const product1: Product = {
  name: "딸기",
  price: 10000,
  description: "딸기입니다."
};

// 상품 정보가 없는 예제
const product2: Product = {
  name: "황금 바나나",
  price: 999999999,
};

printProduct(product1);
printProduct(product2);