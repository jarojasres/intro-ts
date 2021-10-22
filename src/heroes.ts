
interface Address {
    street: string;
    city: string;
    country: string;
}

interface SuperHeroe {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
    
}

const superHeroe: SuperHeroe = {
    name: 'Julián',
    age: 42,
    address: {
        street: 'Calle 49BB',
        city: 'Medellín',
        country: 'Colombia'
    },
    showAddress: function() { 
       return `${this.address.street}, ${this.address.city}, ${this.address.country}`;
    }
}

const address = superHeroe.showAddress();

console.log(address);