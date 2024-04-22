const priceList = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
];
const getLowestPrices = (priceList) => {
    const products = [];
    for (const entry of priceList) {
        const [townName, productName, productPrice] = entry.split(' | ');
        const price = parseInt(productPrice);
        const exsistingEntry = products.find(product => {
            return product.productName === productName;
        });
        if (exsistingEntry) {
            if (exsistingEntry.productLowestPrice > price) {
                exsistingEntry.productLowestPrice = price;
                exsistingEntry.townName = townName;
            }
        }
        else {
            products.push({ productName: productName, productLowestPrice: price, townName: townName });
        }
    }
    for (const productKey in products) {
        const product = products[productKey];
        console.log(`${product.productName} -> ${product.productLowestPrice} (${product.townName})`);
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
//# sourceMappingURL=06-lowest-prices-in-cities.js.map