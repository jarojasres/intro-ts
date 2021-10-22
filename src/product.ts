export interface Product {
    description: string;
    price: number;
}

export const calculateTax = (products:Product[]) : [number, number] => {

    const total = products.reduce((total,{price}) => (total+= price ),0);
    return [total, total * 0.15];
}

