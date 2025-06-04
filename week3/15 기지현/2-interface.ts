//인터페이스 생성
interface Product {
  name : string;
  price : number;
  description? : string;
}

//프린트함수
function printProduct(p : Product) : void{
  console.log(`name : ${p.name}`);
  console.log(`price : ${p.price}`);
  if(p.description){
    console.log(`description : ${p.description}`);
  }
  console.log("\n");
}

//물건1 : descriptoin 있음
const p1 : Product = {name : "물건1", price : 10000, description : "아이들이 선호함."};

//물건2 : description 없음
const p2 : Product = {name : "물건2", price : 50000};

//물건 1, 2 차례대로 출력
printProduct(p1);
printProduct(p2);