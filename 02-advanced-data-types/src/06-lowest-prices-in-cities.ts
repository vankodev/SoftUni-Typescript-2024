const priceList: string[] = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
];

type Item = {
    townName: string;
    productName: string;
    productPrice: number;
};

type Product = {
    productName: string;
    productLowestPrice: number;
    townName: string;
};

const getLowestPrices = (priceList: string[]): void => {
    const products = [] as Product[];

    for (const entry of priceList) {
        const [townName, productName, productPrice]: string[] = entry.split(' | ');
        const price: number = parseInt(productPrice);

        const exsistingEntry: Product = products.find(product => {
            return product.productName === productName;
        })

        if (exsistingEntry) {
            if (exsistingEntry.productLowestPrice > price) {
                exsistingEntry.productLowestPrice = price
                exsistingEntry.townName = townName
            }
        } else {
            products.push({productName: productName, productLowestPrice: price, townName: townName})
        }

    }

    for (const productKey in products) {
        const product: Product = products[productKey]
        console.log(`${product.productName} -> ${product.productLowestPrice} (${product.townName})`)
    }
};

getLowestPrices(priceList);



// Input: 
// ['Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10']

// Output:
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
