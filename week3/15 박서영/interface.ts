interface Product {
    name: string;
    price: number;
    description?: string;
}

function printProduct(p: Product){
    console.log(`제품 이름: ${p.name}`);
    console.log(`가격: ${p.price}`);

    if(p.description!==undefined){
        console.log(`설명 ${p.description}`);
    }
    console.log("------------------")
}

let p1 :Product = {name: "초콜릿", price: 2300};
printProduct(p1);
const p2 = {name: "사탕", price:200, description: "츄파츕스-딸기"};
printProduct(p2);

