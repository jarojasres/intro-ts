import { Product,calculateTax } from './product';
import { Tree, childrenLength } from './tree';

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

document.getElementById("output").innerHTML = `Total: ${total} </br> Tax: ${tax}`;

//Optional chaining

const trees: Tree[] = [{
    name: 'Tree 1'
},
{
    name: 'Tree 2',
    children: ['1', '2', '3', '5']
}];

document.getElementById("output").innerHTML += `<br/>Numero de hijos: ${childrenLength(trees[1])}`;

console.log(childrenLength(trees[1]));

