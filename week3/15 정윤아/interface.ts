interface Product {
    name: string;
    price: number;
    description?: string;
}

function printProduct(product: Product) {
    console.log(`${product.name} - ${product.price}원 - ${product.description}`);
}

let product1: Product = {
    name: "치킨",
    price: 10000,
    description: "맛있는 치킨"
}

printProduct(product1);

let product2: Product = {
    name: "치즈볼",
    price: 5000,
}

printProduct(product2);

