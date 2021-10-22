import { Product,calculateTax } from './product';

/*
    ===== Código de TypeScript =====
*/

const products: Product[] = [
    {
        price: 100,
        description: 'Product 1'
    },
    {
        price: 100,
        description: 'Product 2'
    }
];

const [total, tax] = calculateTax(products);

console.log("Total ", total);
console.log("Tax ", tax);

