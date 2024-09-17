function cityTaxes(name, population, treasury) {
    const taxRate = 10;
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: taxRate,
        collectTaxes() {
            const taxes = Math.floor(this.population * this.taxRate);
            this.treasury += taxes;
        },
        applyGrowth(percentage) {
            const growth = Math.floor((percentage / 100) * this.population);
            this.population += growth;
        },
        applyRecession(percentage) {
            const recession = Math.floor((percentage / 100) * this.treasury);
            this.treasury -= recession;
        },
    };
    return city;
}
// INPUT 1
// const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);
// INPUT 2
const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
// city.applyRecession(2);
// console.log(city.treasury);
//# sourceMappingURL=index.js.map