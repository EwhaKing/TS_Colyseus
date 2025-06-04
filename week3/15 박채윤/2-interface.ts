// 2-interface.ts

interface Product {
    name: string; price: number; description?: string; 
  }
  
  function printProduct(p: Product): void {
    console.log(`상품명: ${p.name}`);
    console.log(`가격: ${p.price}원`);
    if (p.description) {
      console.log(`설명: ${p.description}`);
    } else {
      console.log(`설명: 없음`);
    }
  }
  